import mpClient from "@/app/lib/mercado-pago";
import { status } from "@grpc/grpc-js";
import { Preference } from "mercadopago"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { testeId, userEmail } = await request.json();

  try{
    const preference = new Preference(mpClient)

    const createdPreference = await preference.create({
      body: {
        external_reference: testeId,
        metadata: {
          testeId, // Essa variável é convertida para snack_case
          userEmail, // Essa variável é convertida para snack_case
        },
        ...(userEmail && { payer: ({ email: userEmail } )}), // Adiciona o payer apenas se useEmail for verdadeiro
        items: [
          {
            id: "",
            description: "Produto de teste",
            title: "Produto de teste",
            quantity: 1,
            unit_price: 1,
            currency_id: "BRL",
            category_id: "outros",
          },
        ],
        payment_methods: {
          installments: 12,
          // excluded_payment_types: [
          //   {
          //     id: "bolbradesco",
          //   },
          //   {
          //     id: "pec",
          //   }
          // ],
          // excluded_payment_types: [
          //   {
          //     id: "debit_card",
          //   },
          //   {
          //     id: "credit_card",
          //   },
          // ],
      },
      auto_return: "approved",
      back_urls: {
        success: `${request.headers.get("origin")}/api/mercado-pago/pending`,
        failure: `${request.headers.get("origin")}/api/mercado-pago/pending`,
        pending: `${request.headers.get("origin")}/api/mercado-pago/pending`,
      },
    }
  })

  if(!createdPreference.id) {
    return NextResponse.json({
      error: "Error creating preference",
      status: status.INTERNAL,
    });
  }

  return NextResponse.json({
    preferenceId: createdPreference.id,
    initPoint: createdPreference.init_point,
  });
    
  } catch (error) {
    console.log("Error creating preference: ", error)
    return NextResponse.json({
      error: "Error creating preference",
      status: status.INTERNAL,
    });
    
  }
}