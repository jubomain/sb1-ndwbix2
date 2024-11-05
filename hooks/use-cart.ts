'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  cartCount: number;
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      cartCount: 0,
      total: 0,
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              cartCount: state.cartCount + 1,
              total: state.total + product.price,
            };
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
            cartCount: state.cartCount + 1,
            total: state.total + product.price,
          };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const item = state.items.find((item) => item.id === productId);
          return {
            items: state.items.filter((item) => item.id !== productId),
            cartCount: state.cartCount - (item?.quantity || 0),
            total: state.total - (item?.price || 0) * (item?.quantity || 0),
          };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          const item = state.items.find((item) => item.id === productId);
          const quantityDiff = quantity - (item?.quantity || 0);
          return {
            items: state.items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
            cartCount: state.cartCount + quantityDiff,
            total:
              state.total +
              (item?.price || 0) * quantityDiff,
          };
        }),
      clearCart: () => set({ items: [], cartCount: 0, total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);