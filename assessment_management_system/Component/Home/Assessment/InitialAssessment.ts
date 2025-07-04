import { Assessment } from './assessment';

export const initialAssessments: Assessment[] = [
  {
    id: 1,
    title: 'React Fundamentals',
    creator: 'John Doe',
    status: 'published',
    participants: 120,
    avgScore: 85,
  },
  {
    id: 2,
    title: 'Advanced CSS Techniques',
    creator: 'Jane Smith',
    status: 'draft',
    participants: 75,
    avgScore: 92,
  },
  {
    id: 3,
    title: 'UI/UX Design Principles',
    creator: 'Alex Johnson',
    status: 'published',
    participants: 200,
    avgScore: 88,
  },
];
