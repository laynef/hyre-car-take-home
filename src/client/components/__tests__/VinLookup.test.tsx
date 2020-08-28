import React from 'react';
import ReactDOM from 'react-dom';

import VinLookup from '../VinLookup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VinLookup />, div);
  ReactDOM.unmountComponentAtNode(div);
});