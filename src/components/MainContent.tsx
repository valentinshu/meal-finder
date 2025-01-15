import { SimpleGrid } from "@chakra-ui/react";
import { Meal } from "../types";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  loading: boolean;
  onOpen: (meal: Meal) => void;
};

function MainContent({ meals, loading, onOpen: openRecipe }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loading &&
        meals.map((m) => (
          <MealCard openRecipe={() => openRecipe(m)} meal={m} key={m.idMeal} />
        ))}
    </SimpleGrid>
  );
}

export default MainContent;
