import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
