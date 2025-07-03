"use client"
import { useState } from 'react';
import { Plus, BookOpen, Users, CheckCircle, Award } from 'lucide-react';
import Sidebar from './NavBar/Navbar';
import AssessmentPage from './Assessment/AssessmentPage';
import StudentDashboard from './Assessment/StudentDashboard';
import AnalyticsPage from './MarketPlace/AnalyticsPage';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  icon: LucideIcon;
  title: string;
  value: number | string;
  change: number;
  color: 'blue' | 'green' | 'purple' | 'orange';
};

const StatCard = ({ icon: Icon, title, value, change, color }: StatCardProps) => {
    const colorClasses = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      purple: 'text-purple-500',
      orange: 'text-orange-500',
    };
  
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
          <p className={`text-xs ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change > 0 ? `+${change}%` : `${change}%`} vs last month
          </p>
        </div>
        <div className={`p-2 rounded-lg bg-opacity-20 ${colorClasses[color].replace('text-', 'bg-')}`}>
          <Icon className={`w-6 h-6 ${colorClasses[color]}`} />
        </div>
      </div>
    );
  };
  
  const Dashboard = () => {
    const stats = {
      totalAssessments: 128,
      activeStudents: 12,
      completedToday: 32,
      avgPlatformScore: 85,
    };
  
    const assessments = [
      { id: 1, title: 'React Fundamentals', type: 'MCQ', dueDate: '2024-07-25', status: 'active' },
      { id: 2, title: 'JavaScript Algorithms', type: 'Coding', dueDate: '2024-07-28', status: 'draft' },
      { id: 3, title: 'CSS Grid and Flexbox', type: 'Practical', dueDate: '2024-08-01', status: 'completed' },
    ];
  
    const students = [
      { id: 1, name: 'John Doe', assessments: 12, avgScore: 92 },
      { id: 2, name: 'Jane Smith', assessments: 10, avgScore: 88 },
      { id: 3, name: 'Peter Jones', assessments: 15, avgScore: 85 },
    ];
  
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create Assessment
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={BookOpen}
            title="Total Assessments"
            value={stats.totalAssessments}
            change={12}
            color="blue"
          />
          <StatCard
            icon={Users}
            title="Active Students"
            value={stats.activeStudents}
            change={8}
            color="green"
          />
          <StatCard
            icon={CheckCircle}
            title="Completed Today"
            value={stats.completedToday}
            change={-3}
            color="purple"
          />
          <StatCard
            icon={Award}
            title="Avg. Score"
            value={`${stats.avgPlatformScore}%`}
            change={5}
            color="orange"
          />
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Assessments</h3>
            <div className="space-y-3">
              {assessments.slice(0, 3).map(assessment => (
                <div key={assessment.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{assessment.title}</p>
                    <p className="text-sm text-slate-600">{assessment.type} • Due {assessment.dueDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assessment.status === 'active' ? 'bg-green-100 text-green-800' :
                      assessment.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {assessment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Performers</h3>
            <div className="space-y-3">
              {students.slice(0, 3).map((student, index) => (
                <div key={student.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{student.name}</p>
                      <p className="text-sm text-slate-600">{student.assessments} assessments</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{student.avgScore}%</p>
                    <p className="text-sm text-slate-600">avg score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default function Home() {
    const [activeTab] = useState('dashboard');
  
    const renderContent = () => {
      switch (activeTab) {
        case 'dashboard':
          return <Dashboard />;
        case 'assessments':
          return <AssessmentPage />;
        case 'students':
          return <StudentDashboard />;
        case 'analytics':
          return <AnalyticsPage />;
        default:
          return <Dashboard />;
      }
    };
  
    return (
      <div className="flex bg-slate-100">
        <Sidebar/>
        <main className="flex-1 p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    );
  }
