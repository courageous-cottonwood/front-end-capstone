
//each image is being fetched from
//results[0].photos[0].thumbnail_url
// const relatedItems = [
//   63610,
//   63611,
//   63616,
//   63615
// ];



const itemOne = {
  "product_id": "63610",
  "results": [
    {
      "style_id": 391652,
      "name": "Black Lenses & Black Frame",
      "original_price": "69.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": null,
          "url": null
        }
      ],
      "skus": {
        "null": {
          "quantity": null,
          "size": null
        }
      }
    },
    //..many more styles
  ]
};


const itemTwo = {
  "product_id": "63611",
  "results": [
    {
      "style_id": 391656,
      "name": "Black",
      "original_price": "40.00",
      "sale_price": null,
      "default?": true,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },

        //..many more styles
      ]
    }
  ]
};

const itemThree = {
  "product_id": "63616",
  "results": [
    {
      "style_id": 391682,
      "name": "Zebra Stripe",
      "original_price": "900.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        //..many more styles
      ]
    }
  ]
}

const itemFour = {
  "product_id": "63615",
  "results": [
    {
      "style_id": 391677,
      "name": "White Sole",
      "original_price": "120.00",
      "sale_price": null,
      "default?": false,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        }
      ],
      // ...many more styles
    }
  ]
};