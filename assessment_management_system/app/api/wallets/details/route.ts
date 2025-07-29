import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletId = searchParams.get('walletId');

    if (!walletId) {
      return NextResponse.json({ error: 'Wallet ID is required' }, { status: 400 });
    }

    const apiUrl = `https://glass-wallet.onrender.com/api/wallets/details/${walletId}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.message || 'Failed to fetch wallet details' }, { status: response.status });
    }

    const walletDetails = await response.json();
    return NextResponse.json(walletDetails, { status: 200 });
  } catch (error) {
    console.error('Error fetching wallet details:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
