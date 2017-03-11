/**
 * Created by nette on 01.03.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App/App';

import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main-wrapper'));