import { NextResponse } from 'next/server';

// Mock user data - in a real application, this would be fetched from a database
// based on the authentication token.
const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: 'Creator',
  avatar: '/vercel.svg', 
};

export async function GET() {
  try {
    // In a real application, you would:
    // 1. Get the token from the request cookies: req.cookies.get('token')?.value
    // 2. Verify the token and fetch user data from the database.
    // For now, we return mock data.

    // Check if a token exists (simulating authentication check)
    // For demonstration, we'll assume if the request is made, the user is authenticated.
    // In a real scenario, you'd check the token's validity.

    return NextResponse.json(mockUser, { status: 200 });

  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Failed to fetch user data' }, { status: 500 });
  }
}
