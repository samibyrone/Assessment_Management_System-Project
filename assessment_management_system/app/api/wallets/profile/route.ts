import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const apiUrl = `https://glass-wallet.onrender.com/api/wallets/profile/${userId}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.message || 'Failed to fetch wallet profile' }, { status: response.status });
    }

    const walletProfile = await response.json();
    return NextResponse.json(walletProfile, { status: 200 });
  } catch (error) {
    console.error('Error fetching wallet profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
