import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import { IProducts } from "./model";
import { Container, CardWrapper } from "./Home.styled";
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
