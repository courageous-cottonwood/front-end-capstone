import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './questions-answers/index.jsx';
import Ratings_and_Reviews from './Ratings_and_Reviews/Ratings_and_Reviews.jsx';
import ProductDetail from './Product_Detail/index.jsx';

const App = () =>  {

  return (
      <div>
        <ProductDetail product_id={63609} />
        <QuestionsAnswers product_id={63609} />
        <Ratings_and_Reviews/>
      </div>
    )
}

export default App;
