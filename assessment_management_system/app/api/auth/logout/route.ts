import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({ message: 'Logout successful' }, { status: 200 });
    response.cookies.set('token', '', { httpOnly: true, expires: new Date(0), path: '/' });
    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ message: 'An error occurred during logout.' }, { status: 500 });
  }
}
