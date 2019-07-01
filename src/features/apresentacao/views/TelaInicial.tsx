import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

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
    return <Typography>Bem vindo ao boiler FFRezende</Typography>;
  }
}

const styles = {};

export default withStyles(styles)(TelaInicial);
