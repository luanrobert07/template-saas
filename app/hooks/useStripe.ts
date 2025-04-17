import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";

export function useStripe(){
  const [stripe, setStripe] = useState(<Stripe | null>(null))

  useEffect(() => {
    async function loadStripeAsync() {
      const stripeInstance = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      setStripe(stripeInstance)
    }
    loadStripeAsync()
  }, [])

  async function createPaymentStripeCheckout(chekoutData:any){
    if (!stripe) {
      throw new Error("Stripe not loaded yet")
    }

    try{
      const response = await fetch("/api/stripe/create-pay-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chekoutData),
      })
      const data = await response.json()
      await stripe.redirectToCheckout({sessionId: data.sessionId,})

    } catch (error) {
      console.error("Error creating checkout session:", error)
      throw error
    }
  }

  async function createSubscriptionStripeCheckout(chekoutData:any){
    if (!stripe) {
      throw new Error("Stripe not loaded yet")
    }

    try{
      const response = await fetch("/api/stripe/create-subscription-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chekoutData),
      })
      const data = await response.json()
      await stripe.redirectToCheckout({sessionId: data.sessionId,})

    } catch (error) {
      console.error("Error creating checkout session:", error)
      throw error
    }
  }

  async function handlecreatePortalStripe(chekoutData: any) {
    try {
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chekoutData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro ao criar sessão do portal:", errorText);
        throw new Error("Erro ao criar sessão do portal.");
      }
  
      const data = await response.json();
  
      if (!data?.url) {
        throw new Error("URL da sessão do portal não encontrada.");
      }
  
      window.location.href = data.url;
    } catch (error) {
      console.error("Erro ao redirecionar para o portal do cliente:", error);
      throw error;
    }
  }
  

  return {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handlecreatePortalStripe,
  }
}