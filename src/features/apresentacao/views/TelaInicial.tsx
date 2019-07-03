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
        <Grid
          container
          alignContent='center'
          alignItems='center'
          justify='center'
          className={classes.gridCenter}
        >
          <Paper className={classes.paper}>
            <Grid item className={classes.margin}>
              <Button className={classes.degredeButton} onClick={() => history.push('/loading')}>
                Exemplo redux
              </Button>
              <Typography className={classes.textoPadrao}>Developer by: FFRezende </Typography>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TelaInicial);
