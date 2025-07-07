
import { CheckCircle } from 'lucide-react';
interface BadgesProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export default function Badges ({ setCurrentView }: BadgesProps) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Badges & Achievements</h1>
        <p className="text-gray-600">Celebrate your learning milestones and accomplishments.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          { name: 'JavaScript Master', description: 'Complete 10 JavaScript assessments', earned: true, date: '2024-12-01', icon: '🏆', color: 'bg-yellow-500' },
          { name: 'React Expert', description: 'Master React fundamentals and advanced concepts', earned: false, progress: 75, icon: '⚛️', color: 'bg-blue-500' },
          { name: 'Problem Solver', description: 'Solve 50 coding challenges', earned: true, date: '2024-11-15', icon: '🧩', color: 'bg-green-500' },
          { name: 'Speed Runner', description: 'Complete assessment in under 30 minutes', earned: false, progress: 30, icon: '⚡', color: 'bg-purple-500' },
          { name: 'Perfect Score', description: 'Achieve 100% on any assessment', earned: true, date: '2024-12-10', icon: '🎯', color: 'bg-red-500' },
          { name: 'Consistent Learner', description: 'Maintain 7-day learning streak', earned: false, progress: 57, icon: '📚', color: 'bg-indigo-500' },
          { name: 'Team Player', description: 'Help 10 fellow learners', earned: false, progress: 20, icon: '🤝', color: 'bg-pink-500' },
          { name: 'Early Bird', description: 'Complete morning assessments 5 times', earned: false, progress: 80, icon: '🌅', color: 'bg-orange-500' }
        ].map((badge, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-sm border-2 p-6 text-center transition-all duration-300 hover:shadow-md ${
              badge.earned 
                ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center text-2xl mb-4 mx-auto ${
              !badge.earned ? 'opacity-40' : ''
            }`}>
              {badge.icon}
            </div>
            
            <h3 className={`font-semibold text-lg mb-2 ${
              badge.earned ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {badge.name}
            </h3>
            
            <p className="text-sm text-gray-600 mb-4">
              {badge.description}
            </p>

            {badge.earned ? (
              <div>
                <div className="flex items-center justify-center gap-2 text-green-600 font-medium mb-2">
                  <CheckCircle className="w-5 h-5" />
                  Earned
                </div>
                <p className="text-xs text-gray-500">{badge.date}</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{badge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-300 w-[${badge.progress}%]`}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Keep Learning, Keep Earning!</h2>
        <p className="text-indigo-100 mb-6">
          Complete more assessments to unlock exclusive badges and showcase your expertise.
        </p>
        <button
          onClick={() => setCurrentView('assessments')}
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
        >
          Explore Assessments
        </button>
      </div>
    </div>
  );
}
