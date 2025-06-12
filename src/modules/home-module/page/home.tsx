import { Link } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

export default function HomePage() {
  return (
    <div className="bg-light relative flex h-[90vh] w-screen items-center justify-center overflow-hidden">
      <img src="./public/bgHome.jpg" alt="imagem de fundo" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-20 bg-black/70">
        <h1 className="text-light text-center font-serif text-lg font-bold sm:text-4xl">
          O sabor da Itália direto pra sua mesa
        </h1>
        <Link to="/cardapio">
          <Button className="text-light font-display cursor-pointer p-5 text-lg shadow-lg/50">
            Ver Cardápio
          </Button>
        </Link>
      </div>
    </div>
  );
}
