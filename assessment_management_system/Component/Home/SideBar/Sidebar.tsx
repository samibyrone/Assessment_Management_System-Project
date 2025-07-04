import React from 'react';
import Image from 'next/image';
import { BarChart3, BookOpen, TrendingUp, Award, Search, Plus, Users, AlertCircle, Settings, X } from 'lucide-react';

type User = {
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
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, currentUser, currentView, setCurrentView, handleLogout }) => {
    const menuItems: { [key: string]: MenuItem[] } = {
      Creator: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
        { id: 'assessments', label: 'Assessments', icon: BookOpen },
        { id: 'progress', label: 'Progress', icon: TrendingUp },
        { id: 'badges', label: 'Badges', icon: Award },
        { id: 'search', label: 'Search', icon: Search }
      ],
      Talent: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
        { id: 'my-assessments', label: 'My Assessments', icon: BookOpen },
        { id: 'create-assessment', label: 'Create Assessment', icon: Plus },
        { id: 'analytics', label: 'Analytics', icon: TrendingUp },
        { id: 'students', label: 'Students', icon: Users }
      ],
      admin: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
        { id: 'content-management', label: 'Content Management', icon: BookOpen },
        { id: 'user-management', label: 'User Management', icon: Users },
        { id: 'flagged-content', label: 'Flagged Content', icon: AlertCircle },
        { id: 'system-settings', label: 'Settings', icon: Settings }
      ]
    };

    const items = menuItems[currentUser?.role || 'Creator'];

    return (
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white rounded-lg w-8 h-8 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">AssessHub</span>
          </div>
          <button
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
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  currentView === item.id ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' : 'text-gray-700'
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
