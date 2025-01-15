export type Category = { strCategory: string };
export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};
export type SearchForm = {
  search: string;
};

export type MealDetails = {
  // No usar esto, es un atajo solo para la explicacion.
  [key: string]: string;
};
