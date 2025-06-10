import { Button } from '@/shared/components/ui/button';

export default function HomePage() {
  return (
    <div className="relative w-screen h-[90vh] flex justify-center items-center bg-[#F2EEE8] overflow-hidden">
      <img src="./public/bgHome.jpg" alt="imagem de fundo" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-orange-900/50">
        <Button>Button</Button>
      </div>
    </div>
  );
}
