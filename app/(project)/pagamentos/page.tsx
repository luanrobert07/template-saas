"use client";

import useMercadoPago from "@/app/hooks/useMercadoPago";
import { useStripe } from "@/app/hooks/useStripe";

export default function Pagamentos() {

  const { createPaymentStripeCheckout, createSubscriptionStripeCheckout, handlecreatePortalStripe} = useStripe();
  const { createMercadoPagoCheckout } = useMercadoPago()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pagamentos</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2" onClick={() => createPaymentStripeCheckout({
        testeId: "123"
      })}>
        Adicionar Pagamento
      </button>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2" onClick={() => handlecreatePortalStripe({
       
      })}>
        Criar Portal de Pagamento
      </button>
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" onClick={() => createSubscriptionStripeCheckout({
        testeId: "123"
      })}>
        Criar assinatura
      </button>
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" onClick={() => createMercadoPagoCheckout({
        testeId: "123",
        userEmail: "teste@teste.com"
      })}>
        Criar pagamento Mercado pago
      </button>
    </div>
  );
}