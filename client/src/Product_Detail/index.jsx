import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import components
import ProductView from './Product_View.jsx';
import SocialMedia from './Social_Media.jsx';
import ProductInfo from './Product_Info.jsx';
import AddToCart from './Add_To_Cart.jsx';

// import styles
import css from './productdetail.module.css';

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({
    photos: [
      {
        url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg',
        thumbnail_url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'
      }
    ]
  })

  useEffect(() => {
    // get current product info
    axios.get('/products/get', {
      params: {
        product_id: props.product_id
      }
    })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // get product styles
    axios.get('/products/styles', {
      params: {
        product_id: props.product_id
      }
    })
      .then((response) => {
        setStyles(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const selectStyle = (selectedStyle) => {
    setCurrentStyle(selectedStyle);
  }

  return (
    <div className={css.productDetailContainer}>
      <div>
        <ProductView currentStyle={currentStyle}/>
      </div>
      <div className={css.sidebar}>
        <ProductInfo
          styles={styles}
          selectStyle={selectStyle}
          currentStyle={currentStyle}
          product={product}
        />
        <AddToCart />
        <SocialMedia />
      </div>
    </div>
  );
};

export default ProductDetail;