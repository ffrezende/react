import React, { Component } from 'react';
import { Button, Grid, Paper, Typography, withStyles } from '@material-ui/core';

import styles from './styles/cardStyle';

interface IOwnProps {
  classes: any;
  loading: boolean;
}

type IProps = IOwnProps & any;

interface IState {
  loading: boolean;
}

class Exemplo extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    const { estadoLoading, loading, classes } = this.props;
    let estadoRedux = loading ? 'true' : 'false';
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
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={() => estadoLoading(true)}
              >
                Exemplo redux - true
              </Button>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
                onClick={() => estadoLoading(false)}
              >
                Exemplo redux - false
              </Button>
              <Typography className={classes.textoPadrao}>Estado redux = {estadoRedux} </Typography>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Exemplo);
