import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import App from '../src/App.jsx';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders Hello World', () => {
  const wrapper = shallow(<App />);
  const hello = <h1>Hello World</h1>;
  expect(wrapper.contains(hello)).toEqual(true);
});