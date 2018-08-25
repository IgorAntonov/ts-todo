import * as React from 'react';
import { createStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { Header } from './components/header';
import { AddTodo } from './components/add-todo';
import { Todos } from './components/todos';

const styles = createStyles({
  root: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

interface Props {
  classes: {
    root: string
  }
}

export const App = withStyles(styles)(({ classes }: Props) => (
  <CssBaseline>
    <React.Fragment>
      <Header />
      <Grid container className={classes.root}>
        <Grid container item xs={12} justify="center">
          <Grid item xs={12} sm={9} md={6} lg={4}>
            <AddTodo />
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Grid item xs={12} sm={9} md={6} lg={4}>
            <Todos />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  </CssBaseline>
));
