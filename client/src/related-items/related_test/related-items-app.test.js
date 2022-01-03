import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import AppRelated from '../related-items-app.jsx';

it('renders related items section without crashing', () => {
  shallow(<AppRelated />);
});

// it('renders Hello World', () => {
//   const wrapper = shallow(<AppRelated />);
//   const hello = <h1>Hello World</h1>;
//   expect(wrapper.contains(hello)).toEqual(true);
// });

// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";
// const mock = new MockAdapter(axios);
// mock
//   .onGet("https://api.github.com/repos/tannerlinsley/react-query")
//   .reply(200, {
//     name: "value from the api",