import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repositroy/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
    {/* esse + indica que tudo que vier depois de /repository é esse parâmetro, */}
    {/* no caso, tudo que vem depois de /repository seria  matheusaragaofs/buylist_api */}
  </Switch>
);

export default Routes;
