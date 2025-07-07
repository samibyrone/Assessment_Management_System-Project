"use client";
import React, { useState } from "react";
import { Plus, Eye, Edit, Trash2 } from "lucide-react";
import { Assessment, User, Question } from "./assessment";
import { initialAssessments } from "./InitialAssessment";

const mockCurrentUser: User = {
  role: "Creator"
};

interface AssessmentListProps {
  assessments: Assessment[];
  currentUser: User;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

const AssessmentList: React.FC<AssessmentListProps> = ({
  assessments,
  currentUser,
  setCurrentView
}) => (
  <div className='p-6 mt-10 mr-10 ml-10'>
    <div className='flex items-center justify-between mb-15'>
      <h1 href="#" className='text-4xl font-bold text-gray-900'>Assessments</h1>
      {(currentUser?.role === "Creator" || currentUser?.role === "Talent") && (
        <button
          type="button"
          onClick={() => setCurrentView("create-assessment")}
          className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2'
        >
          <Plus className='w-5 h-5' />
          Create Assessment
        </button>
      )}
    </div>

    <div className='flex gap-4 mb-10'>
      <button type="button" className='bg-indigo-600 text-white px-4 py-2 rounded-lg'>
        All
      </button>
      <button type="button" className='bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black font-semibold transition-colors'>
        Programming
      </button>
      <button type="button" className='bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black font-semibold transition-colors'>
        Design
      </button>
      <button type="button" className='bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black font-semibold transition-colors'>
        Business
      </button>
      <button type="button" className='bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black font-semibold transition-colors'>
        Architechture
      </button>
      <button type="button" className='bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black font-semibold transition-colors'>
        System Analysis
      </button>
      <button type="button" className='bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black font-semibold transition-colors'>
        Education
      </button>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {assessments.map((assessment) => (
        <div
          key={assessment.id}
          className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow'
        >
          <div className='flex items-center justify-between mb-4'>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                assessment.status === "published"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {assessment.status}
            </span>
            <div className='flex items-center gap-2'>
              <button
                type="button"
                className='text-gray-400 hover:text-gray-600'
                aria-label='View assessment'
              >
                <Eye className='w-4 h-4' />
              </button>
              {currentUser?.role !== "learner" && (
                <>
                  <button
                    type="button"
                    className='text-gray-400 hover:text-gray-600'
                    aria-label='Edit assessment'
                  >
                    <Edit className='w-4 h-4' />
                  </button>
                  <button
                    type="button"
                    className='text-gray-400 hover:text-red-600'
                    aria-label='Delete assessment'
                  >
                    <Trash2 className='w-4 h-4' />
                  </button>
                </>
              )}
            </div>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            {assessment.title}
          </h3>
          <p className='text-sm text-gray-600 mb-4'>
            Created by {assessment.creator}
          </p>
          <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
            <span>{assessment.participants} participants</span>
            <span>Avg: {assessment.avgScore}%</span>
          </div>
          <button className='w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors'>
            {currentUser?.role === "learner"
              ? "Take Assessment"
              : "View Details"}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default function Assessments() {
  const [currentView, setCurrentView] = React.useState("list"); // 'list' or 'create-assessment'
  const [assessments] = React.useState<Assessment[]>(initialAssessments);
  const [currentUser] = React.useState<User>(mockCurrentUser);

  return (
    <>
      {currentView === "list" && (
        <AssessmentList
          assessments={assessments}
          currentUser={currentUser}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === "create-assessment" && (
        <CreateAssessment setCurrentView={setCurrentView} />
      )}
    </>
  );
}

interface CreateAssessmentProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

const CreateAssessment = ({ setCurrentView }: CreateAssessmentProps) => {
  const [assessmentData, setAssessmentData] = useState<{
    title: string;
    description: string;
    category: string;
    type: string;
    timeLimit: number;
    questions: Question[];
  }>({
    title: "",
    description: "",
    category: "",
    type: "quiz",
    timeLimit: 60,
    questions: []
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    question: "",
    type: "multiple-choice",
    options: ["", "", "", ""],
    correctAnswer: 0,
    points: 1
  });

  const addQuestion = () => {
    setAssessmentData((prev) => ({
      ...prev,
      questions: [...prev.questions, currentQuestion]
    }));

    setCurrentQuestion({
      question: "",
      type: "multiple-choice",
      options: ["", "", "", ""],
      correctAnswer: 0,
      points: 1
    });
  };

  return (
    <div className='p-6 mb-20 mt-10'>
      <div className='mb-6'>
        <h1 className='text-4xl font-bold text-gray-900 mb-2'>
          Create Assessment
        </h1>
        <p className='text-gray-600'>
          Build a new assessment for your students or candidates.
        </p>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Assessment Title
            </label>
            <input
              type='text'
              value={assessmentData.title}
              onChange={(e) =>
                setAssessmentData((prev) => ({
                  ...prev,
                  title: e.target.value
                }))
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter assessment title'
            />
          </div>
          <div>
            <label
              htmlFor='assessment-category'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Category
            </label>
            <select
              id='assessment-category'
              value={assessmentData.category}
              onChange={(e) =>
                setAssessmentData((prev) => ({
                  ...prev,
                  category: e.target.value
                }))
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value=''>Select category</option>
              <option value='programming'>Programming</option>
              <option value='design'>Design</option>
              <option value='business'>Business</option>
              <option value='other'>Other</option>
              <option value='programming'>Programming</option>
              <option value='design'>Design</option>
              <option value='business'>Business</option>
              <option value='other'>Other</option>
            </select>
          </div>
        </div>

        <div className='mb-8'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Description
          </label>
          <textarea
            value={assessmentData.description}
            onChange={(e) =>
              setAssessmentData((prev) => ({
                ...prev,
                description: e.target.value
              }))
            }
            rows={4}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Describe the assessment objectives and instructions'
          />
        </div>

        <div className='border-t pt-8'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Add Question
          </h3>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Question
              </label>
              <textarea
                value={currentQuestion.question}
                onChange={(e) =>
                  setCurrentQuestion((prev) => ({
                    ...prev,
                    question: e.target.value
                  }))
                }
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='Enter your question'
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {currentQuestion.options.map((option, index) => (
                <div key={index}>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Option {index + 1}
                  </label>
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...currentQuestion.options];
                        newOptions[index] = e.target.value;
                        setCurrentQuestion((prev) => ({
                          ...prev,
                          options: newOptions
                        }));
                      }}
                      className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      placeholder={`Enter option ${index + 1}`}
                    />
                    <input
                      type='radio'
                      name='correctAnswer'
                      checked={currentQuestion.correctAnswer === index}
                      onChange={() =>
                        setCurrentQuestion((prev) => ({
                          ...prev,
                          correctAnswer: index
                        }))
                      }
                      className='mt-3'
                      aria-label={`Set option ${
                        index + 1
                      } as the correct answer`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className='flex gap-4'>
              <button
                type='button'
                onClick={addQuestion}
                className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-black font-semibold transition-colors'
              >
                Add Question
              </button>
              <button
                type='button'
                className='bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-black font-semibold transition-colors'
              >
                Preview Question
              </button>
            </div>
          </div>
        </div>

        {assessmentData.questions.length > 0 && (
          <div className='border-t pt-8 mt-8'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              Questions Added ({assessmentData.questions.length})
            </h3>
            <div className='space-y-4'>
              {assessmentData.questions.map((q, index) => (
                <div key={index} className='bg-gray-50 p-4 rounded-lg'>
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <p className='font-medium text-gray-900 mb-2'>
                        {index + 1}. {q.question}
                      </p>
                      <div className='grid grid-cols-2 gap-2 text-sm'>
                        {q.options.map((option, optIndex) => (
                          <span
                            key={optIndex}
                            className={`px-2 py-1 rounded ${
                              q.correctAnswer === optIndex
                                ? "bg-green-100 text-green-800"
                                : "bg-white text-gray-600"
                            }`}
                          >
                            {String.fromCharCode(65 + optIndex)}. {option}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      type='button'
                      className='text-red-500 hover:text-red-700'
                      aria-label='Delete question'
                    >
                      <Trash2 className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='flex gap-4 mt-8 pt-8 border-t'>
          <button
            type='submit'
            className='bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 hover:text-black transition-colors font-semibold'
          >
            Publish Assessment
          </button>
          <button
            type='button'
            className='bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-black transition-colors font-semibold'
          >
            Save as Draft
          </button>
          <button
            type='button'
            className='bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-black transition-colors font-semibold'
          >
            Preview
          </button>
          <button
            type='button'
            onClick={() => setCurrentView("list")}
            className='bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 font-semibold hover:text-black transition-colors'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
