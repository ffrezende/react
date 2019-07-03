import React, { Component } from 'react';
import { Button, Paper, Grid, withStyles, Typography } from '@material-ui/core';
import history from '../../../shared/router/history';

import styles from './styles/cardStyle';
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
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item>
              <Typography className={classes.textoPadrao}>Developer by: FFRezende </Typography>
              <Button className={classes.degredeButton} onClick={() => history.push('/loading')}>
                Exemplo redux
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TelaInicial);
