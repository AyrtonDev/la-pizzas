import { useEffect, useState } from 'react';

import type { PizzaModel } from '@/domain/models/pizza-model';

import { CardProduct } from '../components/card-product';
import { getPizzasService } from '../services/pizza-service';

export default function MenuPage() {
  const [pizzas, setPizzas] = useState<PizzaModel[] | null>(null);

  useEffect(() => {
    getPizzas();
  }, []);

  async function getPizzas() {
    const data = await getPizzasService();

    setPizzas(data);
  }

  return (
    <div className="">
      {pizzas && (
        <div className="flex flex-col gap-20 pt-5">
          {pizzas.map((pizza) => (
            <CardProduct pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
}
