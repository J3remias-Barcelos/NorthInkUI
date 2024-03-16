import { BsPersonCircle } from 'react-icons/bs';

function HomeHeader() {
  return (
    <div className="flex justify-between bg-transparent p-6 w-full">
      {/* Logo */}
      <img src="src/assets/logoBranco.png" alt="North Ink" className="w-18 h-12" />
    

      {/* Botão de Entrar e ícone de perfil */}
      <div className="flex items-center">
        <BsPersonCircle className="text-purple-500 text-3xl mr-2" />
        <button className="text-white text-xl border-purple-400 rounded">Entrar</button>
      </div>
    </div>
  );
}

export default HomeHeader;
