
import { Upload, Download, User } from 'lucide-react';
import React from 'react';

interface Student {
  id: number;
  name: string;
  email: string;
  assessments: number;
  avgScore: number;
  status: 'active' | 'inactive';
}

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">Students</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            <Upload className="w-4 h-4" />
            Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map(student => (
          <div key={student.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{student.name}</h3>
                <p className="text-sm text-slate-600">{student.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Assessments</span>
                <span className="text-sm font-medium">{student.assessments}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Avg. Score</span>
                <span className="text-sm font-medium">{student.avgScore}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Status</span>
                <span className={`text-sm font-medium ${
                  student.status === 'active' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {student.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

export default StudentList;
