import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

interface Props {
  classes: any;
  carregando?: boolean;
}

export class BackdropLoading extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render(): JSX.Element {
    const { carregando, classes } = this.props;
    return (
      <Grid
        container
        alignItems='center'
        justify='center'
        className={
          carregando ? classes.container : [classes.container, classes.displayNone].join(' ')
        }
      >
        <Grid item>
          <img src='/imagens/loading.gif' />
        </Grid>
      </Grid>
    );
  }
}

const styles = (theme: Object) => ({
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255,255,255,0.8)',
    position: 'fixed' as 'fixed',
    top: 0,
    zIndex: 9999
  },
  displayNone: {
    display: 'none'
  }
});

export default withStyles(styles)(BackdropLoading);
