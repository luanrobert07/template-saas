import { db } from "@/app/lib/firebase";
import "server-only"
import { resend } from "@/app/lib/resend";

import type Stripe from "stripe";

export async function handleStripePayment(event: Stripe.CheckoutSessionCompletedEvent){
  if(event.data.object.payment_status === "paid"){
    const metadata = event.data.object.metadata
    const userEmail = event.data.object.customer_email || event.data.object.customer_details?.email
  const userId = metadata?.userId

  if(!userId || !userEmail) {
    console.error("No userId or userEmail found in metadata")
    return
  }


  await db.collection("users").doc(userId).update({
    stripeSubscriptionId: event.data.object.subscription,
    subscriptionStatus: "active"
  })

  const { data, error } = await resend.emails.send({
    from: 'luanrobert580@gmail.com',
    to: [userEmail],
    subject: 'Pagamento',
    text: "Pagamento realizado com sucesso"
  });

  if (error) {
    console.log("Error sending email:", error);
  }

 console.log("Email sent successfully:", data);

  
  }
}