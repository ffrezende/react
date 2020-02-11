import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import store from './store';
import history from './shared/router/history';
import BackdropLoadingContainer from './features/loading/views/BackdropLoadingContainer';
import TelaInicial from './features/apresentacao/views/TelaInicial';
import ExemploContainer from './features/Exemplo/views/exemploContainer';
import HooksContainer from './features/hooks/views/hooksContainer';
import MaterialContainer from './features/material/';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BackdropLoadingContainer />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={TelaInicial} />
          <Route exact path='/loading' component={ExemploContainer} />
          <Route exact path='/hooks' component={HooksContainer} />
          <Route exact path='/material' component={MaterialContainer} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
