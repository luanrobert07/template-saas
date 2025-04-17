import mpClient from "@/app/lib/mercado-pago";
import { NextResponse } from "next/server";
import { Payment } from "mercadopago";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paymentId = searchParams.get('payment_id')
  const testeId = searchParams.get('external_reference')

  if(!paymentId || !testeId) {

    return NextResponse.json({
      error: 'Missing payment_id or external_reference'
    }, { status: 400 })
  }
  
  const payment = new Payment(mpClient)
  const paymentData = await payment.get({
    id: paymentId
  })

  if(paymentData.status === "approved" || paymentData.date_approved !== null) {
    return NextResponse.redirect(new URL(`/success`, request.url))
  }

  return NextResponse.redirect(new URL(`/`, request.url))
      
}