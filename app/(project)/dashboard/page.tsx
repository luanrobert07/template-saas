
import { handleAuth } from "@/app/actions/handle-auth";
import { Button } from "@/app/components/ui/button";
import { auth } from "@/app/lib/auth";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, Bell, Home, LightbulbIcon, MessageSquare, Settings, UserCircle, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
}

const mockConnections = [
  {
    id: 1,
    name: "Ana Silva",
    description: "Desenvolvedora full-stack com experiência em React, Node.js e design de interfaces.",
    tags: ["tecnologia", "desenvolvimento", "design"],
    type: "solucao",
    avatar: "/placeholder.svg?height=60&width=60",
    unreadMessages: 2,
  },
  {
    id: 2,
    name: "Carlos Mendes",
    description: "Empreendedor buscando uma solução tecnológica para otimizar a logística de entregas.",
    tags: ["negocios", "tecnologia", "inovacao"],
    type: "problema",
    avatar: "/placeholder.svg?height=60&width=60",
    unreadMessages: 0,
  },
  {
    id: 3,
    name: "Juliana Costa",
    description: "Designer UX/UI especializada em criar experiências intuitivas para produtos digitais.",
    tags: ["design", "tecnologia", "inovacao"],
    type: "solucao",
    avatar: "/placeholder.svg?height=60&width=60",
    unreadMessages: 1,
  },
]

const tagColors: Record<string, string> = {
  tecnologia: "bg-blue-100 text-blue-800",
  desenvolvimento: "bg-purple-100 text-purple-800",
  design: "bg-pink-100 text-pink-800",
  negocios: "bg-green-100 text-green-800",
  inovacao: "bg-amber-100 text-amber-800",
  marketing: "bg-red-100 text-red-800",
}

export default async function Dashboard() {
  // Estamos do lado do servidor
  const session = await auth()
  if(!session){
    // Se não houver sessão, redirecionar para a página de login
    return (
      redirect("/login")
    );
  }


  // Botaão LO

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-8">
      <header className="bg-white border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="bg-primary text-white p-2 rounded-lg">
                <LightbulbIcon className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl">
                <span className="text-primary"></span> Solution Match
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              {
              session?.user?.email && (
              <form action={handleAuth}>
                <button type="submit" className="border rounded-md px-2 py-2 cursor-pointer">
                  Logout
                </button>
              </form>
              )}
              <Link href="/pagamentos" className="border rounded-md px-2 py-2 cursor-pointer">
                Pagamentos
              </Link>
            </div>
          </div>
        </div>
      </header>

      <p></p>
      
      

      <main className="flex-1 container py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{"Olá, " + (session?.user?.email ? session.user.name : "Usuário não está logado!!!")}!</h1>
          <p className="text-gray-500">Bem-vindo ao seu dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-1">3</h3>
              <p className="text-gray-500">Conexões ativas</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-1">8</h3>
              <p className="text-gray-500">Mensagens não lidas</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-1">12</h3>
              <p className="text-gray-500">Potenciais matches</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Suas conexões</h2>
          <Link href="/match">
            <Button variant="outline" size="sm">
              Encontrar mais
            </Button>
          </Link>
        </div>

        {/* <div className="space-y-4">
          {connections.map((connection) => (
            <Card key={connection.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={connection.avatar || "/placeholder.svg"}
                      alt={connection.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{connection.name}</h3>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <Link href={`/chat?id=${connection.id}`}>
                          <Button variant="outline" size="sm" className="relative">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Mensagem
                            {connection.unreadMessages > 0 && (
                              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] text-white flex items-center justify-center">
                                {connection.unreadMessages}
                              </span>
                            )}
                          </Button>
                        </Link>
                        <Link href={`/perfil/${connection.id}`}>
                          <Button variant="ghost" size="sm">
                            <UserCircle className="h-4 w-4 mr-1" />
                            Perfil
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3 line-clamp-2">{connection.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {connection.tags.map((tag) => (
                        <Badge key={tag} className={tagColors[tag] || ""}>
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Badge>
                      ))}
                      <Badge className="bg-gray-100">
                        {connection.type === "problema" ? "Problema" : "Solução"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </main>

      <nav className="sticky bottom-0 border-t bg-white py-3">
        <div className="container">
          <div className="flex justify-around">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="flex flex-col items-center gap-1 text-primary">
                <Home className="h-5 w-5" />
                <span className="text-xs">Início</span>
              </Button>
            </Link>
            <Link href="/match">
              <Button variant="ghost" size="icon" className="flex flex-col items-center gap-1">
                <Users className="h-5 w-5" />
                <span className="text-xs">Matches</span>
              </Button>
            </Link>
            <Link href="/chat">
              <Button variant="ghost" size="icon" className="flex flex-col items-center gap-1">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs">Chat</span>
              </Button>
            </Link>
            <Link href="/perfil">
              <Button variant="ghost" size="icon" className="flex flex-col items-center gap-1">
                <UserCircle className="h-5 w-5" />
                <span className="text-xs">Perfil</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}