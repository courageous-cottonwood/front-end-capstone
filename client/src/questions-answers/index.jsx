import React, { useState, useEffect } from 'react';
import QASearchBar from './searchBar.jsx';
import Question from './question.jsx';
import Buttons from './buttons.jsx';
import axios from 'axios';
import styles from './qa.module.css';

const QuestionsAnswers = function (props) {

  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(2);

  let loadMoreQuestions = () => {
    setNumQuestions(numQuestions + 2);
  };

  const getQADataForItem = (product_id, cb) => {
    axios.get('/qa/questions', { params: { product_id: product_id, page: 1, count: numQuestions } })
      .then((response) => {
        setQuestions(response.data.results);
        console.log(response.data.results);
      });
  };

  useEffect(() => {
    getQADataForItem(props.product_id || 63609);
  }, [numQuestions]);

  return (
    <div className={styles.questionAnswerContainer}>
      <h4 onClick={() => { loadMoreQuestions() }}>QUESTIONS AND ANSWERS</h4>
      <QASearchBar />
      {questions.map((question, i) => {
        return <Question questionData={question} key={i} />
      })}
      <Buttons loadMore={loadMoreQuestions} />
    </div>

  );
};

export default QuestionsAnswers;
