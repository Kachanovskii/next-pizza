import { ICartItem } from "../store/cart";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  type?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  items: ICartItem[];
  totalAmount: number;
}

export const getCartDetails = (data: any[]) => {};
