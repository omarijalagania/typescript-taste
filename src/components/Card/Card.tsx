import React from "react";
import styled from "styled-components";
import { device } from "../sizes";
import { IProducts } from "../model";

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

const Container = styled.div`
  min-width: 260px;
  height: 430px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 20px 15px;
  @media ${device.mobileL} {
    width: 95%;
    height: 520px;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    width: 80%;
    height: 150px;
    object-fit: contain;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`;

const Description = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  font-weight: lighter;
  font-size: 14px;
`;

const Price = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: green;
`;

const Button = styled.div`
  width: 100%;
  height: 45px;
  background-color: green;
  position: absolute;
  margin-top: 20px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: lighter;
`;
