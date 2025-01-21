import React from 'react';
import { Bitcoin, ArrowRight, Shield, DollarSign, Lightbulb, Gift, Users, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629877521896-4719f02df3c7?auto=format&fit=crop&q=80"
            alt="Bitcoin background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Bitcoin className="w-20 h-20 text-yellow-500 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Guia Prático do Bitcoin
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-100 mb-4">
            Seja seu próprio banco e proteja seu poder de compra
          </p>
          <p className="text-xl text-gray-300 mb-8">
            O guia definitivo para conquistar sua soberania financeira através do Bitcoin
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all flex items-center mx-auto">
            Quero Começar Agora
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
            O que você vai aprender
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-100">Segurança Financeira</h3>
              <p className="text-gray-300">
                Aprenda a proteger seu patrimônio e ser seu próprio banco com total segurança
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-100">Proteção Contra Inflação</h3>
              <p className="text-gray-300">
                Descubra como preservar seu poder de compra em qualquer cenário econômico
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-yellow-100">Conhecimento Prático</h3>
              <p className="text-gray-300">
                Guia passo a passo para dominar o Bitcoin de forma simples e objetiva
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Benefits Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500">Conteúdo Completo do Guia</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✅</span>
                <span className="text-gray-200">O que é o Bitcoin e como ele pode proteger seu patrimônio.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✅</span>
                <span className="text-gray-200">Como funciona a blockchain e por que ela é revolucionária.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✅</span>
                <span className="text-gray-200">Como comprar, armazenar e usar Bitcoin de forma segura.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✅</span>
                <span className="text-gray-200">Os maiores erros dos iniciantes e como evitá-los.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✅</span>
                <span className="text-gray-200">Como o Bitcoin pode ser uma reserva de valor contra a inflação.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✅</span>
                <span className="text-gray-200">O futuro do Bitcoin e seu impacto no sistema financeiro global.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500">
              <Gift className="inline-block mr-2 mb-1" />
              Bônus Exclusivos
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-100 mb-2">Comunidade Privada</h3>
                  <p className="text-gray-300">Acesso a uma comunidade exclusiva para suporte e networking.</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-100 mb-2">Material Complementar</h3>
                  <p className="text-gray-300">eBooks e cursos adicionais sobre estratégias avançadas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-100 mb-2">Atualizações e Webinars</h3>
                  <p className="text-gray-300">Conteúdo exclusivo e webinars com especialistas do mercado.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 p-8 rounded-2xl">
            <p className="text-xl text-yellow-100 mb-8">
              Se você quer proteger seu dinheiro, investir com segurança e entender o futuro das finanças digitais, este eBook é para você! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-yellow-500">
            Comece Sua Jornada Hoje
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Não deixe seu dinheiro perder valor. Aprenda a proteger seu patrimônio com Bitcoin.
            O momento é agora!
          </p>
          <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 p-8 rounded-2xl mb-12">
            <p className="text-5xl font-bold text-yellow-500 mb-4">R$ 97,00</p>
            <p className="text-yellow-100">Por tempo limitado</p>
          </div>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 px-12 rounded-full text-xl hover:from-yellow-400 hover:to-yellow-500 transition-all">
            Garantir Meu Guia Agora
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;