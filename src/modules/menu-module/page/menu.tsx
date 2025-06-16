import { useEffect, useState } from 'react';

import type { PizzaModel } from '@/domain/models/pizza-model';

import { CardProduct } from '../components/card-product';
import { Loader } from '../components/loader';
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
    <>
      {pizzas && (
        <div className="grid h-full w-full grid-cols-1 place-items-center gap-10 py-4 sm:gap-15 md:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((pizza) => (
            <CardProduct pizza={pizza} />
          ))}
        </div>
      )}
      {!pizzas && <Loader />}
    </>
  );
}
