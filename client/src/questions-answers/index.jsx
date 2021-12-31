import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import components
import QASearchBar from './searchBar.jsx';
import Question from './question.jsx';
import Buttons from './buttons.jsx';
import AddAnswerForm from './forms/addAnswer.jsx';
import AddQuestionForm from './forms/addQuestion.jsx';

//import styles
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
    });
  };

  useEffect(() => {
    getQADataForItem(props.product_id || 63609);
    axios.get('products/related', { params: { product_id: 63609 }} ).
    then((res) => {
      console.log(res.data);
    })
  }, [numQuestions]);

  return (
    <div className={styles.questionAnswerContainer}>
      <h4 onClick={() => { loadMoreQuestions() }}>QUESTIONS AND ANSWERS</h4>
      <QASearchBar />
      {questions.map((question, i) => { return <Question questionData={question} key={i} /> })}
      <Buttons product_id={props.product_id} reload={getQADataForItem} loadMore={loadMoreQuestions} />
    </div>
  );
};

export default QuestionsAnswers;
