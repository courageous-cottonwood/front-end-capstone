import React, { useState, useEffect } from 'react';

import Header from './header/header.jsx';
import QuestionsAnswers from './questions-answers/index.jsx';
import Ratings_and_Reviews from './Ratings_and_Reviews/Ratings_and_Reviews.jsx';
import ProductDetail from './Product_Detail/index.jsx';
import AppRelated from './related-items/related-items-app.jsx';
//import RelatedCSS from './related-items/cssModules/Related.module.css';

const App = (props) =>  {
//default 63609
//to test carousel 64220
  const [productId, setProductId] = useState(null);

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

  if (productId === null) {
    return (<div></div>)
  } else {

    return (
      <div>
        <Header />
        <ProductDetail product_id={productId} />
        <AppRelated setProduct={setProduct} product_id={productId}/>
        <QuestionsAnswers product_id={productId} />
        {/* <Ratings_and_Reviews product_id={productId}/> */}
      </div>
    )

  }


}

export default App;
