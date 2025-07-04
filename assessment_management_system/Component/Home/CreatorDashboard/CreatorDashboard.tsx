'use client';

import React, { useState } from 'react';
import Sidebar, { User } from '../SideBar/Sidebar'; // Assuming Sidebar component exists

const CreatorDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const [currentView, setCurrentView] = useState('dashboard'); // Default view

  // Placeholder for current user data (replace with actual user context/auth)
  const currentUser: User = {
    role: 'Creator',
    avatar: '/vercel.svg', // Placeholder avatar
    name: 'John Doe',
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('User logged out');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
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
                  onClick={() => setCurrentView('create-assessment')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Create Assessment
                </button>
              </div>

              {/* Card for Create Course */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-3">Create New Course</h2>
                <p className="text-gray-600 mb-4">Build comprehensive courses with modules and integrated assessments.</p>
                <button
                  onClick={() => setCurrentView('create-course')}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Create Course
                </button>
              </div>

              {/* Placeholder for other features */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-3">View Analytics</h2>
                <p className="text-gray-600 mb-4">Track performance and engagement for your content.</p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                  View Analytics
                </button>
              </div>
            </div>
          </>
        );
      case 'create-assessment':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Create New Assessment</h1>
            <p>This is where the assessment creation form will go.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to Dashboard
            </button>
          </div>
        );
      case 'create-course':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Create New Course</h1>
            <p>This is where the course creation form will go.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to Dashboard
            </button>
          </div>
        );
      case 'assessments':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">My Assessments</h1>
            <p>List of existing assessments will be displayed here.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to Dashboard
            </button>
          </div>
        );
      case 'progress':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Progress Tracking</h1>
            <p>Progress reports and analytics will be displayed here.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to Dashboard
            </button>
          </div>
        );
      case 'badges':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Badges</h1>
            <p>Badges earned or created will be displayed here.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to Dashboard
            </button>
          </div>
        );
      case 'search':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Search Content</h1>
            <p>Search functionality for assessments and courses.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to Dashboard
            </button>
          </div>
        );
      default:
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
            <p>The requested page does not exist.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentUser={currentUser}
        currentView={currentView}
        setCurrentView={setCurrentView}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default CreatorDashboard;
