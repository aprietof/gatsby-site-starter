import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';

export default function Index() {
  return (
    <Layout>
      <SEO />
      <Container slim>
        <h1>Hello World!</h1>
      </Container>
    </Layout>
  );
}
