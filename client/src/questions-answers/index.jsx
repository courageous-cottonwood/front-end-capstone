import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import components
import QASearchBar from './searchBar.jsx';
import Question from './question.jsx';
import Buttons from './buttons.jsx';

//import styles
import styles from './qa.module.css';

const QuestionsAnswers = function (props) {

  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(2);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);

  let loadMoreQuestions = () => {
    setNumQuestions(numQuestions + 2);
  };

  const getQADataForItem = (number) => {
    axios.get('/qa/questions', { params: { product_id: props.product_id, page: 1, count: numQuestions } })
    .then((response) => {
      console.log(response.data);
      setQuestions(response.data.results);

    });
  };

  useEffect(() => {
    getQADataForItem(2);
    setFirstLoad(false);
  }, []);

  //response to product id changes
  useEffect(() => {
    if (!firstLoad) {
      setQuestions([]);
      setNumQuestions(2);
    }
  }, [props.product_id]);

  useEffect(() => {
    if (!firstLoad) {
      getQADataForItem(numQuestions);
    }
  }, [numQuestions]);

  //search
  const searchForAnswers = (searchText) => {
    setSearchTerm(searchText);
    let results =  allQuestions.filter((question) => { return question.question_body.includes(searchTerm) });
  };

  const loadAllQuestions = (product_id) => {
    axios.get('/qa/questions', { params: { product_id: props.product_id, page: 1, count: 99 } })
    .then((response) => {
      setAllQuestions(response.data.results);
    });
  }

  //handle state change for search to hide/show results
  useEffect(() => {
    if (searchTerm.length > 1) {
      setIsSearching(true);
    } else if (searchTerm.length === 0 || searchTerm === '') {
      setIsSearching(false);
    }
  }, [searchTerm]);

  return (
    <div data-testid="question" className={styles.questionAnswerContainer}>
      <h4 onClick={() => { loadMoreQuestions() }}>QUESTIONS AND ANSWERS</h4>
      <QASearchBar search={searchForAnswers} load={loadAllQuestions} product_id={props.product_id}/>
      {isSearching ?
        allQuestions.filter((question) => { return question.question_body.includes(searchTerm) })
        .map((question, i) => { return <Question questionData={question} key={i} /> })
        :
        questions.map((question, i) => { return <Question questionData={question} key={i} /> })
      }
      <Buttons product_id={props.product_id} reload={getQADataForItem} loadMore={loadMoreQuestions} />
    </div>
  );
};

export default QuestionsAnswers;
