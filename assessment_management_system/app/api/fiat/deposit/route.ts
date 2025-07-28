import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { currencyType, receiverId, companyId, amount, reference } = await request.json();

    if (currencyType === "SUI") {
      const receiverId = "123e4567-e89b-12d3-a456-426614174000";
      const companyId = "987f6543-dcba-9876-fedc-0123456789ab";
      const amount = 10.00;
      const reference = "default_deposit";

      const depositResponse = {
        success: true,
        message: 'SUI deposit successful',
        receiverId,
        companyId,
        amount,
        reference,
      };

      return NextResponse.json(depositResponse);
    } else {
      if (!receiverId || !companyId || !amount || !reference) {
        return NextResponse.json({ success: false, message: 'Missing required parameters' }, { status: 400 });
      }

      const transactionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const depositResponse = {
        success: true,
        message: 'Fiat deposit successful',
        transactionId: transactionId,
      };

      return NextResponse.json(depositResponse);
    }
  } catch (error) {
    console.error('Error depositing currency:', error);
    return NextResponse.json({ success: false, message: 'Failed to deposit currency' }, { status: 500 });
  }
}
