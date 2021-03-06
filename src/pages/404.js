import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <main>
    <title>Sidan hittades inte</title>
    <h1>Sidan hittades inte</h1>
    <p>Sorry bro! 🍻</p>
    <Link to="/">Till startsidan</Link>
  </main>
);

export default NotFoundPage;
