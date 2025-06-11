import { Menu } from 'lucide-react';

import { Button } from '../ui/button';

export const MenuSidebar = () => {
  return (
    <Button
      size="icon"
      className="bg-detail-y hover:bg-light hover:text-primary relative size-10 cursor-pointer"
    >
      <Menu />
    </Button>
  );
};
