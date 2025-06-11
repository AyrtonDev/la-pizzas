import { MenuSidebar } from '../menu-sidebar';
import { CartButton } from './cart-button';

export default function Header() {
  return (
    <div className="bg-secondary flex h-[10vh] w-screen justify-center">
      <div className="flex h-full w-full items-center justify-between px-3 sm:max-w-7xl sm:px-3">
        <img src="/logo-main.svg" alt="logo" className="w-25" />
        <div className="flex gap-6">
          <CartButton />
          <MenuSidebar />
        </div>
      </div>
    </div>
  );
}
