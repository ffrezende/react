import React, { Component } from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AppState } from '../../../store';

import * as ExemploOperation from '../redux/exemploOperations';
import { ExemploReduxStateType } from '../redux/exemploTypes';

interface IOwnProps {
  classes: any;
  loading: boolean;
}

type IProps = IOwnProps & any;

interface IState {
  loading: boolean;
}

class ExemploContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = ({ exemplo }: AppState): ExemploReduxStateType | any => {
  return {
    loading: exemplo.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      estadoLoading: ExemploOperation.estadoLoading
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExemploContainer));
