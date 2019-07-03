import React, { Component } from 'react';
import { Button, withStyles, Typography } from '@material-ui/core';
import history from '../../../shared/router/history';
type Props = {
  classes: any;
};

type State = {
  modalAberto: boolean;
};

class TelaInicial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      modalAberto: false
    };
  }

  render() {
    const { classes } = this.props;
    const { modalAberto } = this.state;
    return (
      <div>
        <Typography>Bem vindo ao boiler FFRezende </Typography>
        <Button onClick={() => history.push('/loading')}> </Button>
      </div>
    );
  }
}

const styles = {};

export default withStyles(styles)(TelaInicial);
