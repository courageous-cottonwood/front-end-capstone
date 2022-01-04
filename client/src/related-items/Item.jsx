/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import StarRating from './StarRating.jsx';
import Compare from './Compare.jsx';
import RelatedCSS from './cssModules/Related.module.css';
import ItemCSS from './cssModules/Item.module.css';
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
  const handleCompareButton = () => {
    setCompare(!showCompare)
  }


  return (
    <div className={ItemCSS.card}>
      {showCompare ?
        <Compare
          id={props.id}
          parentId={props.parentId}
          name = {props.name}
        /> : null
      }
      <div className={ItemCSS.inner}>
        <h4 className={ItemCSS.h4}>{props.category}</h4>
        <h2 className={ItemCSS.item_title} onClick={() => { handleClickedOnItem() }}>{props.name}</h2>
        {image === undefined
          ?
          <div className={RelatedCSS.loader_container}>
            <div className={RelatedCSS.loader}></div>
          </div>
          :
          <img className={ItemCSS.image} src={image === null ? noImage : image} />
        }
        <p className={ItemCSS.par}>{`$${props.price}`}</p>
        <StarRating
          id={props.id}
          parentId={props.parentId}
           />
        <button className={ItemCSS.button_compare} onClick={() => {handleCompareButton()}}>Compare Me</button>
      </div>
    </div>
  );
};

export default Item;