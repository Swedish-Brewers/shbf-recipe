import React from 'react';
import Grid from '@material-ui/core/Grid';
import MultiSelect from './MultiSelect';

const SearchForm = () => (
  <Grid container spacing={1}>
    <Grid container item xs={12}>
      row 1
    </Grid>
    <Grid container item xs={12}>
      <Grid item xs={4}>
        {/*  eslint-disable-next-line no-use-before-define */}
        <MultiSelect options={hops} labelKey="name" />
      </Grid>
      <Grid item xs={8}>
        row 2 col 2
      </Grid>
    </Grid>
  </Grid>
);

const hops = [
  { label: 'Amarillo' },
  { label: 'Cascade' },
  { label: 'Simcoe' },
];

export default SearchForm;
