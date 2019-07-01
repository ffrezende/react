import React from 'react';
import { AppState } from '../../../store';
import { LoadingReduxStateType } from '../redux/loadingTypes';
import { connect } from 'react-redux';
import BackdropLoading from './BackdropLoading';

type Props = {
  carregando?: boolean;
};

const BackdropLoadingContainer: React.FC<Props> = (props: Props) => {
  const { carregando } = props;
  return <BackdropLoading carregando={carregando} />;
};

const mapStateToProps = ({ loading }: AppState): LoadingReduxStateType | any => {
  return {
    carregando: loading.carregando
  };
};

export default connect(mapStateToProps)(BackdropLoadingContainer);
