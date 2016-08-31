import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/app';
import Counter from './components/examples/counter';
import Keyboard from './components/examples/keyboard';
import DoubleClick from './components/examples/doubleClick';
import Spreadsheet from './components/examples/spreadsheet';
import UserDetails from './components/examples/userDetails';
import Movies from './components/examples/movies';
import NoMatch from './components/noMatch';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="counter" component={Counter} />
      <Route path="keyboard" component={Keyboard} />
      <Route path="double-click" component={DoubleClick} />
      <Route path="spreadsheet" component={Spreadsheet} />
      <Route path="user-details" component={UserDetails} />
      <Route path="movies" component={Movies} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.getElementById('app')
);
