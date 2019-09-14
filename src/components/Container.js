import React from 'react';
import styled from 'styled-components';
import media from '../styled-templates/media';

export default function Container({ className, children, fluid, slim }) {
  return (
    <Wrapper className={className} fluid={fluid} slim={slim}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  max-width: ${({ slim }) => (slim ? '720px' : '1000px')};

  ${media.s`
    max-width: ${({ fluid }) => (fluid ? 'none' : '540px')};
  `};

  ${media.m`
    max-width: ${({ fluid }) => (fluid ? 'none' : '720px')};
  `};

  ${media.l`
    max-width: ${({ fluid, slim }) => (slim ? '720px' : fluid ? 'none' : '960px')};
  `};

  ${media.xl`
    max-width: ${({ fluid, slim }) => (slim ? '720px' : fluid ? 'none' : '1140px')};
  `};
`;
