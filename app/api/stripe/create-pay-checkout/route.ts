import { stripe } from "@/app/lib/stripe";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { testeId, userEmail } = await req.json();

  const price = process.env.STRIPE_PRODUCT_PRICE_ID;
  if (!price) {
    return new Response("Missing price ID", { status: 500 });
  }

  const metadata = {
    testeId,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price, quantity: 1 }],
      payment_method_types: ["card", "boleto"],
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/`,
      ...(userEmail && { customer_email: userEmail }),
      metadata
    });

    if (!session) {
      return new Response("Failed to create checkout session", { status: 500 });
    }

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session", error);

    return new Response("Internal server error", { status: 500 });
  }
}
