'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter and usePathname
import { BarChart3, BookOpen, TrendingUp, Award, Search, Plus, Users, AlertCircle, Settings, X } from 'lucide-react';

export type User = {
    role: 'Creator' | 'Talent' | 'admin';
    avatar: string;
    name: string;
};

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    currentUser: User | null;
    currentView: string;
    setCurrentView: (view: string) => void;
    handleLogout: () => void;
}

type MenuItem = {
    id: string;
    label: string;
    icon: React.ElementType;
    path: string; // Add path for navigation
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, currentUser, handleLogout }) => {
    const router = useRouter(); // Initialize useRouter
    const pathname = usePathname(); // Initialize usePathname

    const menuItems: { [key: string]: MenuItem[] } = {
      Creator: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/creatorDashboard' },
        { id: 'assessments', label: 'Assessments', icon: BookOpen, path: '/assessments' },
        { id: 'progress', label: 'Progress', icon: TrendingUp, path: '/progress' },
        { id: 'badges', label: 'Badges', icon: Award, path: '/badges' },
        { id: 'search', label: 'Search', icon: Search, path: '/search' },
        { id: 'create-assessment', label: 'Create Assessment', icon: Plus, path: '/assessmentPage' },
        { id: 'create-course', label: 'Create Course', icon: BookOpen, path: '/create-course' },
        { id: 'analytics', label: 'Analytics', icon: TrendingUp, path: '/analytics' } // Added Analytics
      ],
      Talent: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/talentDashboard' },
        { id: 'my-assessments', label: 'My Assessments', icon: BookOpen, path: '/my-assessments' },
        { id: 'create-assessment', label: 'Create Assessment', icon: Plus, path: '/assessmentPage' },
        { id: 'analytics', label: 'Analytics', icon: TrendingUp, path: '/analytics' },
        { id: 'students', label: 'Students', icon: Users, path: '/students' }
      ],
      admin: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/adminDashboard' },
        { id: 'content-management', label: 'Content Management', icon: BookOpen, path: '/content-management' },
        { id: 'user-management', label: 'User Management', icon: Users, path: '/user-management' },
        { id: 'flagged-content', label: 'Flagged Content', icon: AlertCircle, path: '/flagged-content' },
        { id: 'system-settings', label: 'Settings', icon: Settings, path: '/system-settings' }
      ]
    };

    const items = menuItems[currentUser?.role || 'Creator'];

    return (
      <div className={`bg-blue-400 fixed inset-y-0 left-0 z-50 w-64 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white rounded-lg w-8 h-8 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">AMS Hub</span>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
            title="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  router.push(item.path); // Use router.push for navigation
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  pathname === item.path ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' : 'text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={currentUser?.avatar || "/vercel.svg"}
              alt={currentUser?.name || "User Avatar"}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-gray-900">{currentUser?.name}</div>
              <p className="text-sm text-gray-500 capitalize">{currentUser?.role}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
};

export default Sidebar;
