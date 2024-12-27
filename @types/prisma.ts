import { ingredients } from "@/prisma/constans";
import { Ingredient, Product, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & {
  items: ProductItem[];
  ingredients: Ingredient[];
};
