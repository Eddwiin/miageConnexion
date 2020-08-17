import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route component={Home}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
