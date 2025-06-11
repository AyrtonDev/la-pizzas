import { createContext, useContext, useEffect, useState } from 'react';

import type { CartItem } from '@/domain/models/cart-model';
import { useCache } from '@/shared/hooks';
import type { PropsType } from '@/shared/types/props';

interface CartContextData {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const LOCAL_KEY = 'cart_data';

export const CartProvider = ({ children }: PropsType) => {
  const { get, remove, set } = useCache();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const data = get(LOCAL_KEY);
    if (data) {
      setCart(data);
    }
  }, []);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    updateCart();
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
    updateCart();
  };

  const clearCart = () => {
    setCart([]);
    remove(LOCAL_KEY);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  function updateCart() {
    set(LOCAL_KEY, cart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado dentro do CartProvider');
  }

  return context;
};
