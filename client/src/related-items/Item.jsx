/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Compare from './Compare.jsx';
import ItemCSS from './cssModules/Item.module.css';
import ItemCard from './ItemCard.jsx';
//import NotImage from './cssModules/image_not_available.png';

// pass down rating prop
const Item = (props) => {
  // thubnail call
  const [image, setImage] = useState('');
  const [noImage, setReplacement] = useState('https://www.budget101.com/images/image-not-available.png?14867')
  const [showCompare, setCompare] = useState(false);

  useEffect(() => {
    // GET /products/:product_id/styles
    axios.get('/products/styles', { params: { product_id: props.id } })
      .then((res) => {
        // --> results [] --> photos [] --> "thumbnail_url"
        const item = res.data;
        //console.log(item.results[0].photos[0].thumbnail_url);
        var thumbnail = item.results[0].photos[0].thumbnail_url;
        setImage(thumbnail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //need a click event to re-render the site with new item
  const handleClickedOnItem = () => {
    console.log(props.id);
    props.setProduct(props.id);
  }
  //shows compare modal when button clicked
  const handleCompareButton = () => {
    setCompare(!showCompare)
  }
  //hides the modal when clicked on itself
  const handleCloseModal = () => {
    setCompare(!showCompare)
  }

  return (
      <div className={ItemCSS.card}>
        {showCompare ?
          <Compare
            id={props.id}
            parentId={props.parentId}
            name={props.name}
            showModal={handleCloseModal}
          /> : null
        }
        <ItemCard
          id={props.id}
          parentId={props.parentId}
          category={props.category}
          name={props.name}
          price={props.price}
          image={image}
          noImage={noImage}
          clickOnTitle={handleClickedOnItem}
          compareButton={handleCompareButton}
        />
      </div>
  );
};

export default Item;