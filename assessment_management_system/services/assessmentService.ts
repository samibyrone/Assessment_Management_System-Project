const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your actual backend API base URL

export const getCreatorAssessments = async () => {
  try {
    const token = localStorage.getItem('authToken');

    const response = await fetch(`${API_BASE_URL}/creator/assessments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }), // Add authorization header if token exists
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch creator assessments');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching creator assessments:', error);
    throw error;
  }
};
