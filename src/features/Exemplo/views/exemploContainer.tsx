import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AppState } from '../../../store';

import * as ExemploOperation from '../redux/exemploOperations';
import { ExemploReduxStateType } from '../redux/exemploTypes';
import Exemplo from './exemplo';

const mapStateToProps = ({ exemplo }: AppState): ExemploReduxStateType | any => {
  return {
    loading: exemplo.loading
  };
};

const mapDispatchToProps = {
  estadoLoading: ExemploOperation.estadoLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exemplo);
