import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import './index.css';
import GoatGallery from './components/GoatGallery';
import { appReducer } from './reducers';

function App() {
  return (
    <div>
      <GoatGallery />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
