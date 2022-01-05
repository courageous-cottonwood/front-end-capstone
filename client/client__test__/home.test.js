import React from 'react';
import {render, fireEvent, waitForElement, screen} from '@testing-library/react'
import App from '../src/App.jsx';

it('renders without crashing', () => {
  render(<App />);
});

// it('renders Hello World', () => {
//   const wrapper = shallow(<App />);
//   const hello = <h1>Hello World</h1>;
//   expect(wrapper.contains(hello)).toEqual(true);
// });

