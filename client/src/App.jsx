import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './questions-answers/index.jsx';
import Ratings_and_Reviews from './Ratings_and_Reviews/Ratings_and_Reviews.jsx';
import ProductDetail from './Product_Detail/index.jsx';
import AppRelated from './related-items/related-items-app.jsx';
//import RelatedCSS from './related-items/cssModules/Related.module.css';

const App = () =>  {
//default 63609
//to test carousel 64220
  const [productId, setProductId] = useState(63609);

  const setProduct = (id) => {
    setProductId(id);
  };

  return (
      <div>
        {/* <ProductDetail product_id={productId} />
        <AppRelated setProduct={setProduct} product_id={productId}/>
        <QuestionsAnswers product_id={productId} /> */}
        <Ratings_and_Reviews product_id={productId}/>
      </div>
    )
}

export default App;
