import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const senderId = "e6f7g8h9-i0j1-2345-6789-0abcdef12345";
    const companyId = "1a2b3c4d-5e6f-7890-abcd-ef1234567890";
    const amount = 5.00;
    const reference = "default_sui_withdrawal";

    const withdrawalResponse = {
      success: true,
      message: 'SUI withdrawal successful',
      senderId,
      companyId,
      amount,
      reference,
    };

    return NextResponse.json(withdrawalResponse);
  } catch (error) {
    console.error('Error withdrawing SUI currency:', error);
    return NextResponse.json({ success: false, message: 'Failed to withdraw SUI currency' }, { status: 500 });
  }
}
