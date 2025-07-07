export interface Question {
  question: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options: string[];
  correctAnswer: number | string;
  points: number;
}

export interface Assessment {
  id: number;
  title: string;
  creator: string;
  status: 'published' | 'draft';
  participants: number;
  avgScore: number;
}

export interface User {
  role: 'Creator' | 'Talent' | 'Admin' | 'learner';
}


export interface AssessmentListProps {
  assessments: Assessment[];
  currentUser: User;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}
