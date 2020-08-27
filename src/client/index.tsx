import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import App from './components/App';

ReactDOM.hydrate(<App />, document.getElementById('root'));
