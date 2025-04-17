import {NextResponse, type NextRequest } from "next/server";
import mpClient, { validateMercadoPagoWebhook } from "@/app/lib/mercado-pago";
import { Payment } from "mercadopago";
import { handleMercadoPagoPayment } from "@/app/server/mercado-pago/handle-payment";

export async function POST(req: NextRequest){
  try{
    validateMercadoPagoWebhook(req)

    const body = await req.json()
    const { type, data } = body

    switch(type) {
      case "payment":
        const payment = new Payment(mpClient)
        const paymentData = await payment.get({ id: data.id })
        if(paymentData.status === "approved" || paymentData.status !== null) {
          await handleMercadoPagoPayment(paymentData)
        }
        break;
      case "subscription_preaproval":
        // Handle subscription event
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    return NextResponse.json({ type, data }, { status: 200 });

  } catch (error) {
    console.error("Error in webhook:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}