import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};
function SideNav({
  categories,
  selectedCategory,
  setSelectedCategory,
  loading,
}: Props) {
  return loading ? (
    <SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight={"bold"} mb={4}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {categories.map((element) => (
          <Link
            onClick={() => setSelectedCategory({ ...element })}
            px={2}
            py={1}
            borderRadius={5}
            _hover={{ textDcoration: "none" }}
            key={element.strCategory}
            {...(selectedCategory.strCategory == element.strCategory &&
              selectedProps)}
          >
            {element.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
