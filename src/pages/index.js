import * as React from 'react';
import { Helmet } from 'react-helmet';
import SearchForm from '../components/SearchForm';

const IndexPage = () => (
  <main className="shbf-main">
    <Helmet>
      <title>SHBF Receptsök</title>
    </Helmet>
    <h1>SHBF Receptsök</h1>
    <p>Sök bland 10-tusentals ölresept i SHBS:s recept</p>
    <SearchForm />
  </main>
);

export default IndexPage;
