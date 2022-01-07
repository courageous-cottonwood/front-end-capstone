import React from 'react';
import { render, fireEvent, waitForElement, screen } from '@testing-library/react';
import AppRelated from '../src/related-items/related-items-app.jsx';
import ItemCard from '../src/related-items/ItemCard.jsx';
import CompareCard from '../src/related-items/CompareCard.jsx';

const product_id = 63609;

const parentItemStub = {
  "id": 63609,
  "campus": "hr-sfo",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-12-21T17:19:40.556Z",
  "updated_at": "2021-12-21T17:19:40.556Z",
  "features": [
    {
      "feature": "Fabric",
      "value": "Canvas"
    },
    {
      "feature": "Buttons",
      "value": "Brass"
    }
  ]
}

// items related to parent item
const relatedArray = [
  63610,
  63611,
  63616,
  63615
];

const thumbnailplaceHolder = 'https://www.budget101.com/images/image-not-available.png?14867';


test('should render with a product id passed as a prop and see related items as a title',async () => {
  await render(<AppRelated product_id={product_id} />);
  expect(screen.getByText("FETCHING RELATED ITEMS"));
});

const stubbedItemOne = {
  'parentId': "63609",
  'id': 63610,
  'category': 'Accessories',
  'image': null,
  'price': '69.00',
  'name': 'Bright Future Sunglasses'
};


const stubbedItemTwo = {
  'parentId': "63609",
  'id': 63611,
  'category': 'Pants',
  'image': 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
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
  'image': 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'price': '120.00',
  'name': 'Blues Suede Shoes'
}

it('matches snapshot of Item One', async () => {
  const { asFragment } = await render(<ItemCard id={stubbedItemOne.id} parentId={stubbedItemOne.parentId} category={stubbedItemOne.category} name={stubbedItemOne.name} image={stubbedItemOne.image} price={stubbedItemOne.price} noImage={thumbnailplaceHolder} />);
  expect(asFragment()).toMatchSnapshot();
});


it('matches snapshot of Item Two', async () => {
  const { asFragment } = await render(<ItemCard id={stubbedItemTwo.id} parentId={stubbedItemTwo.parentId} category={stubbedItemTwo.category} name={stubbedItemTwo.name} image={stubbedItemTwo.image} price={stubbedItemTwo.price} noImage={thumbnailplaceHolder} />);
  expect(asFragment()).toMatchSnapshot();
});



it('matches snapshot of Item Three', async () => {
  const { asFragment } = await render(<ItemCard id={stubbedItemThree.id} parentId={stubbedItemThree.parentId} category={stubbedItemThree.category} name={stubbedItemThree.name} image={stubbedItemThree.image} price={stubbedItemThree.price} noImage={thumbnailplaceHolder} />);
  expect(asFragment()).toMatchSnapshot();
});



it('matches snapshot of Item Four', async () => {
  const { asFragment } = await render(<ItemCard id={stubbedItemFour.id} parentId={stubbedItemFour.parentId} category={stubbedItemFour.category} name={stubbedItemFour.name} image={stubbedItemFour.image} price={stubbedItemFour.price} noImage={thumbnailplaceHolder} />);
  expect(asFragment()).toMatchSnapshot();
});


//each card needs to have a compare me button
it('each card has compare button', () => {
  render(<ItemCard id={relatedArray[0]} />);
  expect(screen.getByText("Compare Me"));
});


//snapshot tests for compare card modal

//id = 63610
const itemOneFeaturesStub = [
  { feature: 'Lenses', value: 'Ultrasheen' },
  { feature: 'UV Protection', value: null },
  { feature: 'Frames', value: 'LightCompose' }
];


//id = 63611
const itemTwoFeaturesStub = [
  { feature: 'Fabric', value: '100% Cotton' },
  { feature: 'Cut', value: 'Skinny' }
]

//id = 63616
const itemThreeFeaturesStub = [
  { feature: 'Sole', value: 'Rubber' },
  { feature: 'Material', value: 'FullControlSkin' },
  { feature: 'Stitching', value: 'Double Stitch' }
]

//id = 63615
const itemFourFeaturesStub = [
  { feature: 'Sole', value: 'Rubber' },
  { feature: 'Material', value: 'FullControlSkin' },
  { feature: 'Stitching', value: 'Double Stitch' }
]

it('matches snapshot of features for Item One', async () => {
  const { asFragment } = await render(<CompareCard id={stubbedItemOne.id} parentId={parentItemStub.id} parentFeatures={parentItemStub.features} itemFeatures={itemOneFeaturesStub} itemName={stubbedItemOne.name} parentItemName={parentItemStub.name} />);
  expect(asFragment()).toMatchSnapshot();
});


it('matches snapshot of features for Item Two', async () => {
  const { asFragment } = await render(<CompareCard id={stubbedItemTwo.id} parentId={parentItemStub.id} parentFeatures={parentItemStub.features} itemFeatures={itemTwoFeaturesStub} itemName={stubbedItemTwo.name} parentItemName={parentItemStub.name} />);
  expect(asFragment()).toMatchSnapshot();
});


it('matches snapshot of features for Item Three', async () => {
  const { asFragment } = await render(<CompareCard id={stubbedItemThree.id} parentId={parentItemStub.id} parentFeatures={parentItemStub.features} itemFeatures={itemThreeFeaturesStub} itemName={stubbedItemThree.name} parentItemName={parentItemStub.name} />);
  expect(asFragment()).toMatchSnapshot();
});


it('matches snapshot of features for Item Four', async () => {
  const { asFragment } = await render(<CompareCard id={stubbedItemFour.id} parentId={parentItemStub.id} parentFeatures={parentItemStub.features} itemFeatures={itemFourFeaturesStub} itemName={stubbedItemFour.name} parentItemName={parentItemStub.name} />);
  expect(asFragment()).toMatchSnapshot();
});


