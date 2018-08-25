import * as React from 'react';
import { WithStyles, createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import { Todo as TodoType } from 'Src/store';

const styles = createStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5
  },
  button: {
    padding: '8px 4px'
  },
  icon: {
    fontSize: 20
  },
  typography: {
    fontSize: 16
  }
});

interface Props extends WithStyles<typeof styles> {
  todo: TodoType,
  deleteTodo: (id: string) => void
}


export const Todo = withStyles(styles)<Props>(({ todo, classes, deleteTodo }: Props) => (
  <Paper square className={classes.root}>
    <Typography className={classes.typography}>
      {todo.value}
    </Typography>
    <Button
      onClick={() => deleteTodo(todo.id)}
      className={classes.button}
    >
      <DeleteRoundedIcon className={classes.icon} />
    </Button>
  </Paper>
));
