import type { CartItem } from '@/domain/models/cart-model';
import { formatCurrency } from '@/modules/menu-module/helpers/format';

type RowTableProps = {
  cartItem: CartItem;
};

export const RowTable = ({ cartItem }: RowTableProps) => {
  return (
    <div className="text-primary flex items-center">
      <div className="w-20 truncate">{cartItem.name}</div>
      <div className="w-1/3 text-center text-black">{formatCurrency(cartItem.price)}</div>
      <div className="ml-auto w-1/3 text-center text-black">{cartItem.quantity}</div>
    </div>
  );
};
