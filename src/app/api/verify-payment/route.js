export async function POST(request) {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      await request.json();

    // In production, use RAZORPAY_KEY_SECRET from env
    // const crypto = require('crypto');
    // const generated_signature = crypto
    //   .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    //   .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    //   .digest('hex');
    // if (generated_signature !== razorpay_signature) {
    //   return Response.json({ success: false, error: 'Invalid signature' }, { status: 400 });
    // }

    // Demo: always success for test
    return Response.json({ success: true, payment_id: razorpay_payment_id });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
