import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from '../ColorPicker';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColorPicker colors={[]} title="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});