import type { PizzaModel } from '@/domain/models/pizza-model';
import api from '@/shared/services/api';

export const getPizzasService = async (): Promise<PizzaModel[] | null> => {
  const response = await api.get('/pizzas');

  if (!response.data) return null;

  return response.data;
};
