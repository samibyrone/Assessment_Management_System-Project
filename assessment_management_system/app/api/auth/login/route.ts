import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Set an HTTP-only cookie for authentication
    const response = NextResponse.json({ message: 'Login successful', user: user.email, role: user.role }, { status: 200 });
    // You might want to use JWT or session tokens here. For simplicity, we'll set a basic cookie.
    // The cookie name 'token' is used in logout and fetchUser.
    response.cookies.set('token', 'user-token-placeholder', { // Replace with actual token generation
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure in production
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    // Also set the role in a cookie or pass it in the response body for client-side use
    response.cookies.set('role', user.role, {
      httpOnly: false, // Role might be needed client-side without being httpOnly
      path: '/',
    });

    return response;
  } catch (error: unknown) {
    let message = 'An unknown error occurred';
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ message }, { status: 500 });
  }
}
