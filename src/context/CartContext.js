"use client";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const key = `${action.product.id}-${action.size}-${action.color}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return { ...state, items: state.items.map((i) => i.key === key ? { ...i, qty: i.qty + 1 } : i) };
      }
      return { ...state, items: [...state.items, { key, product: action.product, size: action.size, color: action.color, qty: 1 }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case "UPDATE_QTY":
      return { ...state, items: state.items.map((i) => i.key === action.key ? { ...i, qty: action.qty } : i) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const total = state.items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const count = state.items.reduce((sum, i) => sum + i.qty, 0);
  return (
    <CartContext.Provider value={{ ...state, total, count, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
