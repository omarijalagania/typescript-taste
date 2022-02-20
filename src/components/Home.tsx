import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card/Card";
import { device } from "./sizes";
import { IProducts } from "./model";
const Home: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <CardWrapper>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
