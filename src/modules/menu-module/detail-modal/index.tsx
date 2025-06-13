import { SquareMinus, SquarePlus } from 'lucide-react';
import { useState } from 'react';

import type { CartItem } from '@/domain/models/cart-model';
import type { PizzaModel } from '@/domain/models/pizza-model';
import { Button } from '@/shared/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/components/ui/dialog';
import { useCart } from '@/shared/contexts/cart/cart-context';
import type { PropsType } from '@/shared/types/props';

import { formatCurrency } from '../helpers/format';

type DetailModalProps = PropsType & {
  pizza: PizzaModel;
};

export const DetailModal = ({ children, pizza }: DetailModalProps) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  function handleAddToCart() {
    const item: CartItem = {
      id: pizza.id,
      image: pizza.image,
      price: pizza.price,
      name: pizza.name,
      quantity: count,
    };
    addToCart(item);
  }

  function handleCount(action: 'minus' | 'plus') {
    if (count > 1 && action === 'minus') {
      setCount((prev) => prev - 1);
    }
    if (count < 10 && action === 'plus') {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-light sm:max-w-[425px]">
        <div className="flex h-full w-full flex-col gap-4">
          <div className="flex w-full justify-between">
            <img
              src={`/images/pizzas/${pizza.image}`}
              alt="pizza de calabresa"
              className="size-50"
            />
            <div className="flex flex-col gap-18">
              <h1 className="text-primary text-3xl font-bold">{pizza.name}</h1>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-bold">Quantidade</span>
                <div className="flex items-center justify-between gap-1">
                  <Button
                    variant="ghost"
                    disabled={count === 1}
                    onClick={() => handleCount('minus')}
                  >
                    <SquareMinus className="text-primary size-10" />
                  </Button>
                  <span className="text-2xl font-bold">{count}</span>
                  <Button
                    variant="ghost"
                    onClick={() => handleCount('plus')}
                    disabled={count === 10}
                  >
                    <SquarePlus className="text-detail-g size-10" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-justify text-xl">{pizza.description}</p>
          <div className="flex items-center justify-around">
            <Button className="text-md h-10 w-1/2 font-bold text-white" onClick={handleAddToCart}>
              Adicionar a Carrinho
            </Button>
            <span className="text-primary text-4xl font-bold">
              {formatCurrency(pizza.price * count)}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
