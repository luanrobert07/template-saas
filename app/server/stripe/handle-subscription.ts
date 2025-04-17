import { db } from "@/app/lib/firebase";
import { resend } from "@/app/lib/resend";
import "server-only"

import type Stripe from "stripe";

export async function handleStripeSubscription(event: Stripe.CheckoutSessionCompletedEvent){
  if(event.data.object.payment_status === "paid"){
    console.log("Payment succeeded. Enviar email e liberar acesso")
    const metadata = event.data.object.metadata

    const userId = metadata?.userId
    const userEmail = event.data.object.customer_email || event.data.object.customer_details?.email

    console.log("metadata recebido:", metadata)


    if(!userId){
      console.error("No userId found in metadata")
      return
    }

    await db.collection("users").doc(userId).update({
      stripeSubscriptionId: event.data.object.subscription,
      subscriptionStatus: "active"
    })

    const { data, error } = await resend.emails.send({
      from: 'luanrobert580@gmail.com',
      to: userEmail ? [userEmail] : [],
      subject: 'Assinatura criada',
      text: "Assinatura criada com sucesso"
    });
  
    if (error) {
      console.log("Error sending email:", error);
    }
  
    console.log("Email sent successfully:", data);
  }

  

}