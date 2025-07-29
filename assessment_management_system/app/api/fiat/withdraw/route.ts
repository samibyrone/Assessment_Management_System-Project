import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const senderId = "a1b2c3d4-e5f6-7890-1234-567890abcdef";
    const companyId = "fedcba98-7654-3210-fedc-ba9876543210";
    const amount = 20.00;
    const reference = "default_withdrawal";

    const withdrawalResponse = {
      success: true,
      message: 'Fiat withdrawal successful',
      senderId,
      companyId,
      amount,
      reference,
    };

    return NextResponse.json(withdrawalResponse);
  } catch (error) {
    console.error('Error withdrawing fiat currency:', error);
    return NextResponse.json({ success: false, message: 'Failed to withdraw fiat currency' }, { status: 500 });
  }
}
