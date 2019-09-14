import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styles from '../styles';
import Header from './Header';

export default function Layout({ children, header = true }) {
  return (
    <ThemeProvider theme={styles.theme}>
      <>
        <GlobalStyle />
        {header && <Header />}
        {children}
      </>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${styles.reset}
  ${styles.custom}

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${styles.theme.colors.greyDarker};
    background-color: ${styles.theme.colors.bg};
  }
  
  h1, h2, h3, h4, h5, h6 {
   color: ${styles.theme.colors.greyBlueDarker};
  }

  a {
    color: ${styles.theme.colors.primary};
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: none;
    }
  }

  ::selection {
    color: ${styles.theme.colors.bg};
    background-color: ${styles.theme.colors.primary};
  }

  pre ::selection {
    text-shadow: none;
    background: #dfe2f1;
    color: inherit;
  }

  @media (max-width: ${styles.theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }

  @media (max-width: ${styles.theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`;
