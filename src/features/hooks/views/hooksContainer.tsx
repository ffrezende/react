import { connect } from 'react-redux';
import { AppState } from '../../../store';

import * as HooksOperation from '../redux/hooksOperations';
import { HooksReduxStateType } from '../redux/hooksTypes';
import Hooks from './hooks';

const mapStateToProps = ({ exemplo }: AppState): HooksReduxStateType | any => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hooks);
