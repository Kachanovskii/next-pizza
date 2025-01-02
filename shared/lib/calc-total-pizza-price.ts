import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constans/pizza";

/**
 * Function for calculate the total cost of the pizza.
 * 
 * @param type - type of dough for the selected pizza
 * @param size - size of the pizza you orderd
 * @param items - list of variations
 * @param ingredients - list of ingredients
 * @param selectedIngredients - selected ingredients
 * 
 * @returns number total cost
 */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<Number>,
) => {
  const pizzaPrice = items.find((item) => item.pizzaType === type)!.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
