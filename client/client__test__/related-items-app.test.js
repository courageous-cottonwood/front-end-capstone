import React from 'react';
import {render, fireEvent, waitForElement, screen} from '@testing-library/react';
import AppRelated from '../src/related-items/related-items-app.jsx';
import ItemCard from '../src/related-items/ItemCard.jsx';
// var relatedAppData = require('../src/related-items/related_test_data/related-app-data.js')

const product_id = 63609;


const relatedArray = [
  63610,
  63611,
  63616,
  63615
];

const thumbnailplaceHolder = 'https://www.budget101.com/images/image-not-available.png?14867';


test('should render with a product id passed as a prop and see related items as a title', async () => {
  render(<AppRelated product_id={product_id}/>);
  //const {getByTestId, findAllByTestId} = await
  //  const cards = findAllByTestId('card');
  //  expect(cards).toHaveLength(4);
  expect(screen.getByText("Related Items"));
});

const stubbedItemOne = {
  'parentId': "63609",
  'id': 63610,
  'category': 'Accessories',
  'image':  null,
  'price': '69.00',
  'name': 'Bright Future Sunglasses'
};


const stubbedItemTwo = {
  'parentId': "63609",
  'id': 63611,
  'category': 'Pants',
  'image':  'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'price': '40.00',
  'name': 'Morning Joggers'
}


const stubbedItemThree = {
  'parentId': "63609",
  'id': 63616,
  'category': 'Kicks',
  'image': 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'price': '450.00',
  'name': 'YEasy 350'
}


const stubbedItemFour = {
  'parentId': "63609",
  'id': 63615,
  'category': 'Dress Shoes',
  'image':  'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'price': '120.00',
  'name': 'Blues Suede Shoes'
}

it('matches snapshot of Item One', async () => {
  const {asFragment} = await render(<ItemCard id =  {stubbedItemOne.id} parentId = {stubbedItemOne.parentId} category = {stubbedItemOne.category} name = {stubbedItemOne.name} image = {stubbedItemOne.image} price = {stubbedItemOne.price} noImage = {thumbnailplaceHolder}/>);
  expect(asFragment()).toMatchSnapshot();
});

//noImage = {thumbnailplaceHolder}

it('matches snapshot of Item Two', async () => {
  const {asFragment} = await render(<ItemCard id =  {stubbedItemTwo.id} parentId = {stubbedItemTwo.parentId} category = {stubbedItemTwo.category} name = {stubbedItemTwo.name} image = {stubbedItemTwo.image} price = {stubbedItemTwo.price} />);
  expect(asFragment()).toMatchSnapshot();
});



it('matches snapshot of Item Three', async () => {
  const {asFragment} = await render(<ItemCard id =  {stubbedItemThree.id} parentId = {stubbedItemThree.parentId} category = {stubbedItemThree.category} name = {stubbedItemThree.name} image = {stubbedItemThree.image} price = {stubbedItemThree.price} />);
  expect(asFragment()).toMatchSnapshot();
});



it('matches snapshot of Item Four', async () => {
  const {asFragment} = await render(<ItemCard id =  {stubbedItemFour.id} parentId = {stubbedItemFour.parentId} category = {stubbedItemFour.category} name = {stubbedItemFour.name} image = {stubbedItemFour.image} price = {stubbedItemFour.price} />);
  expect(asFragment()).toMatchSnapshot();
});


//each card needs to have a compare me button
it('each card has compare button',  () => {
  render(<ItemCard id = {relatedArray[0]} />);
  expect(screen.getByText("Compare Me"));
});



//--------------MockAdapter------------


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
//
