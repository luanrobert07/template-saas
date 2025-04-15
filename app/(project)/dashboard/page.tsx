import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // Estamos do lado do servidor
  const session = await auth()
  if(!session){
    // Se não houver sessão, redirecionar para a página de login
    return (
      redirect("/login")
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold">Protected Dashboard Page</h1>
      <p>{session?.user?.email ? session.user.email : "Usuário não está logado!!!"}</p>
      {
        session?.user?.email && (
        <form action={handleAuth}>
          <button type="submit" className="border rounded-md px-2 py-2 cursor-pointer">
            Logout
          </button>
        </form>
        )
      }
    </div>
  );
}