import { BookOpen, BarChart3, Award, Users, Shield, Search } from 'lucide-react'

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary-600" />,
      title: "Assessment Creation",
      description: "Create comprehensive assessments with various question types and auto-scoring capabilities."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
      title: "Progress Tracking",
      description: "Monitor learner progress with detailed analytics and performance insights."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Badge System",
      description: "Reward achievements with digital badges and credentials for skill validation."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Multi-Role Support",
      description: "Built for students, educators, employers, and administrators with role-specific features."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Quality Control",
      description: "Automated flagging and review workflows ensure content quality and integrity."
    },
    {
      icon: <Search className="w-8 h-8 text-primary-600" />,
      title: "Smart Search",
      description: "Find assessments and courses easily with advanced search and filtering options."
    }
  ]
