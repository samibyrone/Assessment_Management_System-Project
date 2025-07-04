
  // Analytics Component (for Educators/Employers)
  const Analytics = () => (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Monitor performance and engagement across your assessments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Responses', value: '2,847', change: '+12%', color: 'bg-blue-500' },
          { label: 'Average Score', value: '78.5%', change: '+5.2%', color: 'bg-green-500' },
          { label: 'Completion Rate', value: '89.3%', change: '+3.1%', color: 'bg-yellow-500' },
          { label: 'Active Assessments', value: '24', change: '+2', color: 'bg-purple-500' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className={`${stat.color} text-white rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
            <div className="text-sm text-green-600 font-medium">{stat.change} from last month</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Assessments</h3>
          <div className="space-y-4">
            {assessments.map((assessment) => (
              <div key={assessment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{assessment.title}</p>
                  <p className="text-sm text-gray-600">{assessment.participants} participants</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{assessment.avgScore}%</p>
                  <p className="text-sm text-gray-600">avg score</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { user: 'Alice Johnson', action: 'completed', assessment: 'JavaScript Basics', score: 92, time: '2 hours ago' },
              { user: 'Bob Smith', action: 'started', assessment: 'React Components', score: null, time: '3 hours ago' },
              { user: 'Carol Davis', action: 'completed', assessment: 'CSS Flexbox', score: 78, time: '5 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action} {' '}
                    <span className="font-medium">{activity.assessment}</span>
                    {activity.score && (
                      <span className="text-green-600"> - {activity.score}%</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
