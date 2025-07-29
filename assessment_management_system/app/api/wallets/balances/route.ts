import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const recipientIdentifier = "default_user";

    const walletBalanceResponse = {
      success: true,
      message: 'Wallet balances retrieved successfully',
      recipientIdentifier,
      balances: {
        fiat: 1000.00,
        sui: 50.00,
      },
    };

    return NextResponse.json(walletBalanceResponse);
  } catch (error) {
    console.error('Error retrieving wallet balances:', error);
    return NextResponse.json({ success: false, message: 'Failed to retrieve wallet balances' }, { status: 500 });
  }
}
