export const mapPizzSize = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
} as const;

export const mapPizzType = {
  20: "традиционное",
  30: "тонкое",
} as const;

export const pizzaSizes = Object.entries(mapPizzSize).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSizes = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
