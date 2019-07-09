import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography, withStyles } from '@material-ui/core';

import styles from './style/cardStyle';
import history from '../../../shared/router/history';

interface IOwnProps {
  classes: any;
}

type IProps = IOwnProps & any;

const Hooks: React.FC<IProps> = (props: IProps) => {
  const { classes } = props;
  const [count, setCount] = useState(0);
  const [document, setDocument] = useState({ title: '' });

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    setDocument({ title: `You clicked ${count} times` });

    return () => {
      //Executa apos os dids
    };
  });

  return (
    <div>
      <Typography className={classes.textoPadrao}>{document.title}</Typography>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        onClick={() => {
          setCount(count + 1);
          setDocument({ title: `You clicked ${count} times` });
        }}
      >
        useState useEffects
      </Button>
      <Grid item>
        <Button
          variant='contained'
          color='primary'
          className={classes.degredeButton}
          onClick={() => history.push('/')}
        >
          Voltar
        </Button>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Hooks);
