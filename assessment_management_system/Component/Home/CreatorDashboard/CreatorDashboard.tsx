'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar, { User } from '../SideBar/Sidebar';
import { getCreatorAssessments } from '../../../services/assessmentService';

interface Assessment {
  id: string;
  title: string;
  description: string;
  // Add other properties of an assessment
}

export default function CreatorDashboard () {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const currentUser: User = {
    role: 'Creator',
    avatar: '/vercel.svg',
    name: 'John Doe',
  };

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const data = await getCreatorAssessments();
        setAssessments(data);
      } catch (err: unknown) { 
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  const handleLogout = () => {
    console.log('User logged out');
  };

  const renderContent = () => {
    if (loading) {
      return <div className="text-center py-8">Loading assessments...</div>;
    }

    if (error) {
      return <div className="text-center py-8 text-red-600">Error: {error}</div>;
    }

    return (
      <>
        <h1 className="text-3xl font-bold mb-6">Creator Dashboard</h1>
        <p className="text-lg text-gray-700 mb-8">Welcome, Creator! Here you can manage your assessments and courses.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-3">Create New Assessment</h2>
            <p className="text-gray-600 mb-4">Design and publish new assessment tests for your students.</p>
            <button
              type='button'
              onClick={() => router.push('/assessmentPage')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Assessment
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-3">Create New Course</h2>
            <p className="text-gray-600 mb-4">Build comprehensive courses with modules and integrated assessments.</p>
            <button
              type='button'
              onClick={() => router.push('/create-course')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Course
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-3">View Analytics</h2>
            <p className="text-gray-600 mb-4">Track performance and engagement for your content.</p>
            <button
              type='button'
              onClick={() => router.push('/analytics')}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              View Analytics
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Your Published Assessments</h2>
        {assessments.length === 0 ? (
          <p className="text-gray-600">No assessments published yet. Create one to see it here!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((assessment: Assessment) => (
              <div key={assessment.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{assessment.title}</h3>
                <p className="text-gray-600">{assessment.description}</p>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />

      <div className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};
