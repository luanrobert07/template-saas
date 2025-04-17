import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Users, LightbulbIcon, Star } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50 px-8">
      <header className="py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <LightbulbIcon className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl">
              <span className="text-primary"></span> Solution Match
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#como-funciona" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Benefícios
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button size="sm" className="font-medium">
                Entrar
              </Button>
            </Link>
            {/* <Link href="/cadastro">
              <Button size="sm" className="font-medium">
                Cadastrar
              </Button>
            </Link> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full opacity-20 blur-3xl"></div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAgMmgxdi00aC0xdjR6TTI0IDMwaDR2MWgtNHYtMXptMCAyaDFWMjhoLTF2NHptLTUgMGg0djFoLTR2LTF6bTAgMmgxdi00aC0xdjR6bS01LThoNHYxaC00di0xem0wIDJoMXYtNGgtMXY0em0tNSAyaDR2MWgtNHYtMXptMCAyaDF2LTRINXY0em0tNSAyaDR2MUgwdi0xem0wIDJoMXYtNEgwdjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        </div>

        <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 md:py-24 gap-12">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Conectando o "impossível" com soluções poderosas.
            </div>
            
            <h1 className="text-5xl md:text-6xl py-8 font-bold tracking-tight bg-gradient-to-r from-gray-900 via-primary to-purple-700 bg-clip-text text-transparent">
              Onde os Desafios se Encontram com Soluções Inovadoras.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Uma plataforma revolucionária que conecta quem tem desafios com aqueles que possuem as soluções certas para transformá-los em sucesso. Junte-se a uma comunidade de especialistas e solucionadores que estão mudando o jogo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/cadastro?tipo=problema">
                <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                      Preciso de Soluções
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="/cadastro?tipo=solucao">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-blue-50 transition-colors">
                  Tenho uma solução
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs">LR</div>
                <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">NR</div>
                <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs">AL</div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs">PK</div>
              </div>
              <p className="text-sm text-gray-600">
                Mais de <span className="font-bold text-primary">+2.500</span> Visionários Conectando Ideias e Soluções para uma Nova Era
              </p>
            </div>
          </div>
          
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 transform -rotate-6"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-white p-1.5 rounded-md">
                      <LightbulbIcon className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-sm">Solution Match</span>
                  </div>
                  <div className="text-xs font-medium text-gray-500">Agora</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Novo match encontrado!</h3> 
                        <p className="text-xs text-gray-500">Seu projeto em busca da solução perfeita. Compatibilidade: 92%</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Procuro desenvolvedor para criar um app de gestão financeira para pequenos negócios."
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Solução Alinhada à Sua Necessidade</h3>
                        <p className="text-xs text-gray-500">Full-Stack: Soluções escaláveis e de alta performance para seu projeto.</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Posso desenvolver soluções web e mobile com foco em usabilidade e performance."
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 shadow-sm hover:bg-gray-50">
                    Pular
                  </button>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-primary/90">
                    Conectar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seção de Reflexão / Propósito */}

      {/* Reflexão Transformadora */}
      <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium animate-fade-in-up">
            <Sparkles className="h-4 w-4 mr-2" />
            Uma pausa para refletir...
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up delay-200">
            O lugar mais rico do mundo...
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in-up delay-400">
            ...não é um banco, uma mina de ouro ou o Vale do Silício. É o cemitério.
            <br />Lá estão enterradas <span className="text-primary font-semibold">ideias que nunca foram compartilhadas</span>,
            <span className="text-primary font-semibold">soluções que nunca foram construídas</span>,
            e <span className="text-primary font-semibold">potenciais que nunca se realizaram</span>.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up delay-600">
            O *Solution Match* nasceu para mudar isso — para garantir que sua ideia, seu talento ou sua solução não morram em silêncio, mas sejam compartilhados, conectados e transformados em impacto real.
          </p>

          <div className="mt-10 animate-fade-in-up delay-800">
            <Link href="#como-funciona">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 transition-all duration-300">
                Descubra como fazemos isso acontecer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
            <p className="text-gray-600">
            Assim como o Tinder conecta pessoas, nossa plataforma conecta desafios a soluções inovadoras. Encontre rapidamente quem pode ajudar a transformar suas ideias em realidade, ou ofereça sua experiência para quem precisa de uma solução. Simples, direto e eficiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-8 -mt-8 transition-all duration-300 group-hover:scale-110"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2Z"></path>
                    <path d="M14.5 8A2.5 2.5 0 0 1 17 10.5v9a2.5 2.5 0 0 1-5 0v-9A2.5 2.5 0 0 1 14.5 8Z"></path>
                    <path d="M3 10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z"></path>
                    <path d="M19 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cadastre seu perfil</h3>
                <p className="text-gray-600">
                Diga o que você precisa ou o que pode oferecer e comece sua jornada.
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -mr-8 -mt-8 transition-all duration-300 group-hover:scale-110"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Encontre matches</h3>
                <p className="text-gray-600">
                Encontre pessoas com soluções ou problemas que se encaixam perfeitamente com você.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-8 -mt-8 transition-all duration-300 group-hover:scale-110"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Conecte-se</h3>
                <p className="text-gray-600">
                Converse, colabore e veja suas ideias ganharem vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">O que dizem nossos usuários</h2>
            <p className="text-gray-600">
            Histórias inspiradoras de pessoas que transformaram desafios em conquistas com a nossa plataforma.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  MC
                </div>
                <div>
                  <h4 className="font-bold">Marcos Costa</h4>
                  <p className="text-sm text-gray-500">Empreendedor</p>
                </div>
              </div>
              <p className="text-gray-700">
              "Eu estava com uma ideia engavetada há meses, até que encontrei o desenvolvedor perfeito aqui. Em poucas semanas, minha ideia se tornou realidade. A plataforma fez a conexão acontecer de forma simples e eficaz."
              </p>
              <div className="flex mt-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 mr-1 fill-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  AS
                </div>
                <div>
                  <h4 className="font-bold">Ana Silva</h4>
                  <p className="text-sm text-gray-500">Desenvolvedora</p>
                </div>
              </div>
              <p className="text-gray-700">
              "Como desenvolvedora, passei a encontrar projetos que realmente me desafiaram e clientes que entenderam o valor do meu trabalho. Essa plataforma fez a ponte entre minhas habilidades e as necessidades reais do mercado."
              </p>
              <div className="flex mt-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 mr-1 fill-yellow-400" />
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  AS
                </div>
                <div>
                  <h4 className="font-bold">Pedro Lucas</h4>
                  <p className="text-sm text-gray-500">Escritor</p>
                </div>
              </div>
              <p className="text-gray-700">
              “Publicar minhas ideias sempre foi um sonho, mas encontrar leitores que valorizassem minhas palavras era o verdadeiro desafio. Essa plataforma me conectou a pessoas que buscam mais do que conteúdo.”
              </p>
              <div className="flex mt-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 mr-1 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefícios</h2>
            <p className="text-gray-600">
            Ao se conectar com pessoas e soluções ideais, você não só amplia suas oportunidades, mas também ganha visibilidade, feedback valioso e abre portas para novas possibilidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Crescimento em rede</h3>
              <p className="text-gray-600">Conecte-se com profissionais de diferentes áreas, ampliando sua rede e aprendendo com as mais diversas experiências.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Ideias que saem do papel</h3>
              <p className="text-gray-600">Transforme suas ideias em realidade com a ajuda de pessoas que compartilham da sua visão e paixão.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Ambiente colaborativo</h3>
              <p className="text-gray-600">Foque no aprendizado mútuo e na troca de experiências para crescer junto com sua rede de contatos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
            <p className="text-gray-600">
            Descubra como nossa plataforma tem impactado a vida de nossos usuários e facilitado a conexão de ideias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4">
              "Encontrei meu sócio para a startup que sempre sonhei em menos de uma semana! A plataforma fez tudo acontecer de forma rápida e eficiente."
              </p>
              <span className="text-sm font-semibold text-primary">Ana Lima</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4">
              "Postei minha ideia e em pouco tempo fui ajudado por desenvolvedores qualificados. O projeto que parecia distante agora está em pleno desenvolvimento!"
              </p>
              <span className="text-sm font-semibold text-primary">Carlos Mendes</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4">
              "Poder ajudar a transformar ideias em soluções reais é algo indescritível. Sem dúvida, é uma experiência que vale a pena!"
              </p>
              <span className="text-sm font-semibold text-primary">Juliana Rocha</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-blue-100">
        <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Solution Match. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#como-funciona" className="text-sm text-gray-600 hover:text-primary">Como Funciona</Link>
            <Link href="#beneficios" className="text-sm text-gray-600 hover:text-primary">Benefícios</Link>
            <Link href="#depoimentos" className="text-sm text-gray-600 hover:text-primary">Depoimentos</Link>
            <Link href="/contato" className="text-sm text-gray-600 hover:text-primary">Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
