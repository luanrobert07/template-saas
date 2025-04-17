import { auth } from "@/app/lib/auth";
import { stripe } from "@/app/lib/stripe";
import { getOrCreateCustomer } from "@/app/server/stripe/get-custormer-id";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  const { testeId } = await req.json()
  const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;
  if (!price) {
    return NextResponse.json({ error: "Missing price ID" }, { status: 500 });
  }

  const session = await auth()
  const userId = session?.user?.id
  const userEmail = session?.user?.email
  if (!userId || !userEmail) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); 
  }

  const customerId = await getOrCreateCustomer(userId, userEmail)
  
  const metadata = {
    testeId,
    price,
    userId,
  }



  try{
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price, quantity: 1 }],
      mode: "subscription",
      payment_method_types: ["card"],
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/`,
      metadata,
      customer: customerId,
    })
    
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session", error);
    return NextResponse.error()
  }
}