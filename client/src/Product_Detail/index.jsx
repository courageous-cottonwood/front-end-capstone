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
  });
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

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
        setCurrentStyle(response.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

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
        setCurrentStyle(response.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [product]);

  return (
    <div className={css.productDetailContainer}>
      <div>
        <ProductView
          currentStyle={currentStyle}
          currentStyleIndex={currentStyleIndex}
          setCurrentStyleIndex={setCurrentStyleIndex}
          styles={styles}
        />
      </div>
      <div className={css.sidebar}>
        <ProductInfo
          styles={styles}
          setCurrentStyle={setCurrentStyle}
          currentStyle={currentStyle}
          product={product}
        />
        <AddToCart
          currentStyle={currentStyle}
        />
        <SocialMedia />
      </div>
    </div>
  );
};

export default ProductDetail;