import React from "react";
import Cart from "../Cart";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/svg/original.svg";

import "./TopMenu.scss";

export default function TopMenu(props) {
  const { productsCart, getProductsCart, products } = props;
  return (
    <Navbar bg="dark" variant="black" className="top-menu">
      <Container>
        <BrandNav />
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      <div>
        <h2>La Casa De Los Helados</h2>
      </div>
    </Navbar.Brand>
  );
}
