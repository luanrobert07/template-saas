import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

export async function handleMercadoPagoPayment(paymentData: PaymentResponse) {
  const metadata = paymentData.metadata;
  const userEmail = metadata?.email;
  const testeId = metadata?.testeId;
  console.log("PAGAMENTO COM SUCESSO", {userEmail, testeId, paymentData});
}