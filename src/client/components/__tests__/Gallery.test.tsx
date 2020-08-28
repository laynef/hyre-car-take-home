import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../Gallery';


const query = {
    year: '',
    make: '',
    model: '',
    transparent: '',
    size: '',
    format: '',
}

const images = [{
    mime: 'type/png',
    width: 100,
    height: 100,
    link: 'https://google.com',
    thumbnailLink: 'https://google.com',
}]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery images={images} query={query} />, div);
  ReactDOM.unmountComponentAtNode(div);
});