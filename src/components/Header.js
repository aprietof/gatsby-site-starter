import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from './Container';

export default function Header() {
  return (
    <Nav>
      <Container>
        <Link to="/">Andres en Ingles</Link>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
`;
