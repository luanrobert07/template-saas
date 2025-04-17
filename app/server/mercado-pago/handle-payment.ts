import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";
import { resend } from "@/app/lib/resend";

export async function handleMercadoPagoPayment(paymentData: PaymentResponse) {
  const metadata = paymentData.metadata;
  const userEmail = metadata?.email;
  const testeId = metadata?.testeId;
  console.log("PAGAMENTO COM SUCESSO", {userEmail, testeId, paymentData});

  const { data, error } = await resend.emails.send({
    from: 'luanrobert580@gmail.com',
    to: [userEmail],
    subject: 'Assinatura cancelada',
    text: "Pagamento realizado com sucesso"
  });

  if (error) {
    console.log("Error sending email:", error);
  }

  console.log("Email sent successfully:", data);
}