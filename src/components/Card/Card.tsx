import React from "react";
import { IProducts } from "../model";
import {
  Container,
  Image,
  Title,
  Description,
  Price,
  Button,
} from "./Card.styled";
interface Props {
  product: IProducts;
}

const Card: React.FC<Props> = ({ product }) => {
  return (
    <Container>
      <Image>
        <img src={product.image} alt="product" />
      </Image>
      <Title>{product.title.substring(0, 40)}</Title>
      <Description>{product.description.substring(0, 40)}...</Description>
      <Price>${product.price}</Price>
      <Button>ADD TO CART</Button>
    </Container>
  );
};

export default Card;
