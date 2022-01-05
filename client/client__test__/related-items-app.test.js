import React from 'react';
import {render, fireEvent, waitForElement, screen} from '@testing-library/react';
import AppRelated from '../src/related-items/related-items-app.jsx';
var relatedAppData = require('../src/related-items/related_test_data/related-app-data.js')

let product_id = 63609;


//should see title 'related products' when renders

test('should render with a product id passed as a prop', () => {
  render(<AppRelated product_id={product_id}/>);
  expect(screen.getByText("Related Items"));
});

//











// it('renders related items section without crashing', () => {
//   shallow(<AppRelated />);
// });

// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// configure({ adapter: new Adapter() });
// import AppRelated from '../related-items-app.jsx';

// it('renders related items section without crashing', () => {
//   shallow(<AppRelated />);
// });

// Mocking a GET request
// for '/products/get in related-app component

// var axios = require("axios");
// var MockAdapter = require("axios-mock-adapter");

// // This sets the mock adapter on the default instance
// var mock = new MockAdapter(axios);

// // Mock any GET request to /users
// // arguments for reply are (status, data, headers)
// mock.onGet("/users").reply(200, {
//   users: [{ id: 1, name: "John Smith" }],
// });
//render the

// axios.get("/users").then(function (response) {
//   console.log(response.data);
// });


// Mocking a GET request with specific parameters
// for '/products/related' in related-app component
// for '/products/styles' in Item component
//for '/reviews/meta' in StarRating component


// var axios = require("axios");
// var MockAdapter = require("axios-mock-adapter");

// // This sets the mock adapter on the default instance
// var mock = new MockAdapter(axios);

// // Mock GET request to /users when param `searchText` is 'John'
// // arguments for reply are (status, data, headers)
// mock.onGet("/users", { params: { searchText: "John" } }).reply(200, {
//   users: [{ id: 1, name: "John Smith" }],
// });

// axios
//   .get("/users", { params: { searchText: "John" } })
//   .then(function (response) {
//     console.log(response.data);
//   });
