import { stripe } from "@/app/lib/stripe";
import { handleStripeCancelSubscription } from "@/app/server/stripe/handle-cancel";
import { handleStripePayment } from "@/app/server/stripe/handle-payment";
import { handleStripeSubscription } from "@/app/server/stripe/handle-subscription";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req: NextRequest){
  
  try {
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get("Stripe-Signature")

    if (!signature || !secret) {
      return NextResponse.json({ error: "No signature provided" }, { status: 400 })
    }

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    switch (event.type) {
      case 'checkout.session.completed':
        const metadata = event.data.object.metadata
        if (metadata?.price === process.env.STRIPE_PRODUCT_PRICE_ID) {
          await handleStripePayment(event)
        }
        if (metadata?.price === process.env.STRIPE_PRODUCT_SUBSCRIPTION_ID) {
          await handleStripeSubscription(event)
        }
        break
      case 'checkout.session.expired':
        console.log("Enviar um email para usuario informando que a sessao expirou")
        break
      case 'checkout.session.async_payment_succeeded':
        console.log("Enviar um email para usuario informando que o pagamento foi recebido")
        break
      case 'checkout.session.async_payment_failed':
        console.log("Enviar um email para usuario informando que o pagamento falhou")
        break
      case 'customer.subscription.created':
        console.log("Enviar um email para usuario informando que a subscricao foi criada")
        break
      case 'customer.subscription.updated':
        console.log("Enviar um email para usuario informando que a subscricao foi atualizada")
        break
      case 'customer.subscription.deleted':
        await handleStripeCancelSubscription(event)
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }
    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error) {
    console.error("Error processing Stripe webhook:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}