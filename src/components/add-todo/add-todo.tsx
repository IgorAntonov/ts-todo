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

interface Props extends WithStyles<typeof styles> {
  addTodo: (value: string) => void
}

export const AddTodo = withStyles(styles)<Props>(
  class Add extends React.Component<Props> {
    state = { value: '' }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
      value: e.target.value
    });

    handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.which === 13) {
        this.submitValue();
      }
    }

    submitValue = () => {
      const { addTodo } = this.props;
      const { value } = this.state;
      addTodo(value);
      this.setState({ value: '' });
    }

    render() {
      const { classes } = this.props;
      const { value } = this.state;
      return (
        <Paper className={classes.root}>
          <TextField
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
            className={classes.textField}
            autoFocus
          />
          <Button onClick={this.submitValue}>
            ADD
          </Button>
        </Paper>
      );
    }
  }
);
