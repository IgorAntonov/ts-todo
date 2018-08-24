import * as React from 'react';
import { WithStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = createStyles({
  root: {
    display: 'flex',
    paddingLeft: 10
  },
  textField: {
    flexGrow: 1
  }
});

export interface Props extends WithStyles<typeof styles> {
  foo?: string
}

export const AddTodo = withStyles(styles)<Props>(({ classes }) => (
  <Paper className={classes.root}>
    <TextField className={classes.textField} />
    <Button>
      ADD
    </Button>
  </Paper>
));
