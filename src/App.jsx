import HomeHeader from "./components/HomeHeader";

export default function App() {
  return (
    <main>
      {/* Imagem de fundo */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-85"
        src="public/tatuagemDeFundo.jpg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
  
      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col">
          {/* Cabeçalho */}
          <HomeHeader />

          {/* Frase de impacto e parágrafo */}
          <div className="flex-col max-w-34 mt-24 mr-auto ml-16">
            <div className="ustify-start max-w-lg text-white 'rounded-lg'">
              <h1 className="text-5xl font-bold mb-2 pb-2">ENCONTRE O SEU 
                  <strong className="text-purple-600"> TATUADOR </strong>IDEAL.</h1>
            </div>
            <p className="text-xl text-white font-bold w-5/6">Na nossa plataforma, <strong className="text-purple-500">conectamos</strong> você aos melhores tatuadores em minutos, 
              prontos para transformar suas ideias em tinta.
              Explore estilos únicos e faça da sua próxima tatuagem uma <strong className="text-purple-500">experiência</strong> inesquecível. </p>
          </div>

        {/* Botões adicionais */}
        <div className="flex justify-center items-center mt-28">
          <div className="flex justify-around">
            <button className="bg-purple-500 text-white px-8 py-4 rounded mr-8">Seja Um Parceiro</button>
            <button className="bg-zinc-500 text-white px-6 py-4 rounded ml-8">Buscar Profissionais</button>
          </div>
        </div>
      </div>
    </main>
  );
}
