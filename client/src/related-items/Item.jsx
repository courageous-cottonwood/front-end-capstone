/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import StarRating from './StarRating.jsx';
import RelatedCSS from './cssModules/Related.module.css';
import ItemCSS from './cssModules/Item.module.css';
// import ProductDetail from '../Product_Detail/index.jsx';

// pass down rating prop
const Item = (props) => {
  // thubnail call
  const [image, setImage] = useState('');

  useEffect(() => {
    // GET /products/:product_id/styles
    axios.get('/products/styles', { params: { product_id: props.id } })
      .then((res) => {
        // --> results [] --> photos [] --> "thumbnail_url"
        const item = res.data;
        // console.log(item.results[0].photos[0].thumbnail_url);
        setImage(item.results[0].photos[0].thumbnail_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //need a click event to re-render the site with new item
 const handleClickedOnItem = () => {
   props.setProduct(props.id);
 }

 return (
  <div className={ItemCSS.card}>
    <div className={ItemCSS.inner}>
      <h4 className={ItemCSS.h4}>{props.category}</h4>
      <h2 className={ItemCSS.item_title} onClick={() => {handleClickedOnItem()}}>{props.name}</h2>
      {image === undefined
        ?
        <div className={RelatedCSS.loader_container}>
          <div className={RelatedCSS.loader}></div>
        </div>
        :
        <img className={ItemCSS.image} src={image} />
      }
      <p className={ItemCSS.par}>{`$${props.price}`}</p>
      <StarRating id={props.id} />
    </div>
  </div>
);
};

export default Item;