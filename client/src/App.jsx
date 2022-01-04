import React, { useState } from 'react';

import Header from './header/header.jsx';
import QuestionsAnswers from './questions-answers/index.jsx';
import Ratings_and_Reviews from './Ratings_and_Reviews/Ratings_and_Reviews.jsx';
import ProductDetail from './Product_Detail/index.jsx';
import AppRelated from './related-items/related-items-app.jsx';
import { useEffect } from 'react/cjs/react.development';
//import RelatedCSS from './related-items/cssModules/Related.module.css';

const App = (props) =>  {
//default 63609
//to test carousel 64220
  const [productId, setProductId] = useState('');

  const loadFromURL = () => {
    let url = window.location.pathname.replace('/', '');
    return url;
  }

  const setProduct = (id) => {
    setProductId(id);
  };

  useEffect(() => {
    if (loadFromURL() !== '') {
      setProductId(loadFromURL());
    } else {
      setProductId(63609);
    }
  }, []);

  useEffect(() => {
    window.history.pushState("", "", `/${productId}`);
  }, [productId])


  return (
      <div>
        <Header />
        <ProductDetail product_id={productId} />
        <AppRelated setProduct={setProduct} product_id={productId}/>
        <QuestionsAnswers product_id={productId} />
        <Ratings_and_Reviews product_id={productId}/>
      </div>
    )
}

export default App;
