'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Sidebar, { User } from '../SideBar/Sidebar';

const CreatorDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false); // Keep useState for sidebarOpen
  const router = useRouter(); // Initialize useRouter

  const currentUser: User = {
    role: 'Creator',
    avatar: '/vercel.svg',
    name: 'John Doe',
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  const renderContent = () => {
    // This component will primarily serve as the layout for the Creator Dashboard.
    // The actual content for different views will be rendered by Next.js pages.
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">Creator Dashboard</h1>
        <p className="text-lg text-gray-700 mb-8">Welcome, Creator! Here you can manage your assessments and courses.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card for Create Assessment */}
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

export default CreatorDashboard;
