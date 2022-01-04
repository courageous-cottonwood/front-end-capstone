import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import QA from '../src/questions-answers/index.jsx';

it('renders without crashing', () => {
  shallow(<QA />);
});

it('should render with a product id passed as a prop', () => {

  let product_id = 63609;
  let q = 'Q:';

  const main = shallow(<QA product_id={product_id}/>);
  expect(main.contains(q)).toEqual(true);
});

// it('should render with a product id passed as a prop', () => {
//   const wrapper = shallow(<App />);
//   const hello = <h1>Hello World</h1>;
//   expect(wrapper.contains(hello)).toEqual(true);
// });

