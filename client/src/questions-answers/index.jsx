import React, { useState, useEffect } from 'react';
import QASearchBar from './searchBar.jsx';
import Question from './question.jsx';
import axios from 'axios';

const QuestionsAnswers = function (props) {

  const [questions, setQuestions] = useState([]);

  const getQADataForItem = (product_id, cb) => {
    axios.get('/qa/questions', { params: { product_id: product_id, page: 1, count: 2 } })
      .then((response) => {
        setQuestions(response.data.results);
        console.log(response.data.results);
      });
  };

  useEffect(() => {
    getQADataForItem(63609);
  }, []);

  return (
    <div>
      <h4>QUESTIONS AND ANSWERS</h4>
      <QASearchBar />
      {questions.map((question, i) => {
        return <Question questionData={question} key={i} />
      })}
      <Question />
    </div>

  );
};

export default QuestionsAnswers;
