import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import One from 'pages/One';
import Two from 'pages/Two';

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <One />
      </Route>
      <Route path="/two">
        <Two />
      </Route>
    </Switch>
  );
};

export default App;
