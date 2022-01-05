import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import QA from '../src/questions-answers/index.jsx';
import ProductDetail from '../src/product_detail/index.jsx';
import ProductView from '../src/product_detail/product_view.jsx';


describe('<ProductDetail />', () => {
  it('renders without crashing', () => {
    shallow(<ProductDetail />);
  });

  
})
