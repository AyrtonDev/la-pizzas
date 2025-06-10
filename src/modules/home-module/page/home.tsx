import { Button } from '@/shared/components/ui/button';

export default function HomePage() {
  return (
    <div className="relative w-screen h-[90vh] flex justify-center items-center bg-light overflow-hidden">
      <img src="./public/bgHome.jpg" alt="imagem de fundo" className="w-full h-full object-cover" />
      <div className="w-full h-full absolute inset-0 bg-black/70 flex justify-center items-center flex-col gap-20">
        <h1 className=' font-bold text-light font-serif text-2xl text-center'>O sabor da Itália direto pra sua mesa</h1>
        <Button className='text-light font-display text-lg p-5 shadow-lg/50 cursor-pointer'>Ver Cardápio</Button>
      </div>
    </div>
  );
}
