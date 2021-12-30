/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import StarRating from './StarRating';
import RelatedCSS from './cssModules/Related.module.css';

// pass down rating prop
const Item = (props) => {
  // thubnail call
  const [image, setImage] = useState('');

  useEffect(() => {
    // GET /products/:product_id/styles
    axios.get('/products/styles', { params: { product_id: props.id } })
      .then((res) => {
        // --> results [] --> photos [] --> "thumbnail_url"
        // console.log(res.data);
        const item = res.data;
        // console.log(item.results[0].photos[0].thumbnail_url);
        setImage(item.results[0].photos[0].thumbnail_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={RelatedCSS.card}>
      <div>
        <h4>{props.category || 'Still loading'}</h4>
        <h2>{props.name || 'Still loading'}</h2>
        <img src={image} alt={props.name} />
        <p>{'$' + (props.price || 'Still loading')}</p>
        <StarRating id={props.id} />
      </div>
    </div>
  );
};

export default Item;
