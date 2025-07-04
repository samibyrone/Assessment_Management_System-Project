
// Define interfaces for our data structures
interface UserProgress {
  completedAssessments: number;
  totalAssessments: number;
  averageScore: number;
  streak: number;
}

// Mock data - replace with actual data fetching
const mockUserProgress: UserProgress = {
  completedAssessments: 8,
  totalAssessments: 10,
  averageScore: 85,
  streak: 5,
};

// Progress Component
export default function Progress() {
  const userProgress = mockUserProgress;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
        <p className="text-gray-600">Track your learning journey and achievements.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm text-gray-600">{Math.round((userProgress.completedAssessments / userProgress.totalAssessments) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(userProgress.completedAssessments / userProgress.totalAssessments) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Average Score</span>
                <span className="text-sm text-gray-600">{userProgress.averageScore}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${userProgress.averageScore}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-medium text-gray-900 mb-4">Recent Assessments</h4>
            <div className="space-y-3">
              {[
                { name: 'JavaScript Fundamentals', score: 88, date: '2024-12-20', status: 'completed' },
                { name: 'React Components', score: 92, date: '2024-12-18', status: 'completed' },
                { name: 'CSS Flexbox', score: 75, date: '2024-12-15', status: 'completed' },
                { name: 'Node.js Basics', score: null, date: null, status: 'in-progress' }
              ].map((assessment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      assessment.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    <div>
                      <p className="font-medium text-gray-900">{assessment.name}</p>
                      <p className="text-sm text-gray-600">
                        {assessment.status === 'completed' ? assessment.date : 'In Progress'}
                      </p>
                    </div>
                  </div>
                  {assessment.score && (
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      assessment.score >= 80 ? 'bg-green-100 text-green-800' : 
                      assessment.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {assessment.score}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Streak</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{userProgress.streak}</div>
              <div className="text-sm text-gray-600 mb-4">Days in a row</div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 7 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded ${
                      i < userProgress.streak ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Categories</h3>
            <div className="space-y-3">
              {[
                { name: 'Programming', level: 85, color: 'bg-blue-500' },
                { name: 'Problem Solving', level: 78, color: 'bg-green-500' },
                { name: 'System Design', level: 62, color: 'bg-yellow-500' },
                { name: 'Testing', level: 45, color: 'bg-purple-500' }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
