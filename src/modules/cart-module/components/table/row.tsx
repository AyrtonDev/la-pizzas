import { SquareMinus, SquarePlus } from 'lucide-react';

import type { CartItem } from '@/domain/models/cart-model';
import { formatCurrency } from '@/modules/menu-module/helpers/format';
import { Button } from '@/shared/components/ui/button';

type RowTableProps = {
  cartItem: CartItem;
};

export const RowTable = ({ cartItem }: RowTableProps) => {
  return (
    <div className="text-primary flex items-center justify-between gap-5">
      <span className="w-23 truncate">{cartItem.name}</span>
      <span className="text-black">{formatCurrency(cartItem.price)}</span>
      <div className="flex w-24 items-center">
        <Button variant="ghost" className="!p-0" onClick={() => {}}>
          <SquareMinus className="text-primary size-8" />
        </Button>
        <span className="w-full text-center text-black">{cartItem.quantity}</span>
        <Button
          variant="ghost"
          className="!p-0"
          onClick={() => {}}
          disabled={cartItem.quantity === 10}
        >
          <SquarePlus className="text-detail-g size-8" />
        </Button>
      </div>
    </div>
  );
};
