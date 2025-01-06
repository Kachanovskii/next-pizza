export type ICartItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  type?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: ICartItem[];
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id, number, quantity, number) => Promise<void>;
  addCartItem: (values: createCartItemValues) => Promise<void>;
  removeCartItem: (id: number) => Promice<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,
}))
