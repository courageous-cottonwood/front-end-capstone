import React, { useState, useEffect, Suspense, lazy } from 'react';

import Header from './header/header.jsx';

// import QuestionsAnswers from './questions-answers/index.jsx';
// import Ratings_and_Reviews from './Ratings_and_Reviews/Ratings_and_Reviews.jsx';
// import ProductDetail from './Product_Detail/index.jsx';
// import AppRelated from './related-items/related-items-app.jsx';

const QuestionsAnswers = lazy(() => import('./questions-answers/index.jsx'));
const ProductDetail = lazy(() => import('./Product_Detail/index.jsx'));
const Ratings_and_Reviews = lazy(() => import('./Ratings_and_Reviews/Ratings_and_Reviews.jsx'));
const AppRelated = lazy(() => import('./related-items/related-items-app.jsx'));

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
      setProductId(63610);
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
        <Suspense fallback = {<p>loading…</p>}>
          <ProductDetail product_id={productId} />
          <AppRelated setProduct={setProduct} product_id={productId}/>
          <QuestionsAnswers product_id={productId} />
          <Ratings_and_Reviews product_id={productId}/>
        </Suspense>
      </div>
    )
  }
}

export default App;
