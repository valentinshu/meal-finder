import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import { SearchForm } from "../types";

type Props = {
  onSubmit: (data: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container maxW="3xl" mt="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdSearch />
          </InputLeftElement>
          <Input
            mr="2"
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="text"
            placeholder="Intenta con 'Chicken' o 'beans'..."
          />
          <Button color="white" type="submit" bgColor="blue.400">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
