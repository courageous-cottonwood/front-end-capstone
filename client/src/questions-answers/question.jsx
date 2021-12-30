import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Answer from './answer.jsx';
import AddAnswerForm from './forms/addAnswer.jsx';
import styles from './qa.module.css';

const Question = (props) => {

  const [numAnswers, setNumAnswers] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  const [helpful, setHelpful] = useState(props.questionData.question_helpfulness);
  const [reportIsLink, setReportIsLink] = useState(true);

  let loadMoreAnswers = () => {
      setNumAnswers(numAnswers + 2);
  };

  let showModal = () => {
    setShowAnswerForm(!showAnswerForm);
  };

  let report = () => {
    axios.put('/qa/questions/report', { question_id: props.questionData.question_id })
    .then((res) => {
      setReportIsLink(false);
      console.log(res.data);
    });
  };

  let markHelpful = () => {
    axios.put('/qa/questions/helpful', { question_id: props.questionData.question_id })
    .then((res) => {
      setHelpful(helpful + 1);
    });
  };

  useEffect(() => {
    if (numAnswers > Object.values(props.questionData.answers).length) {
      setShowLoadMore(false);
    }
    setAnswers(Object.values(props.questionData.answers).slice(0,numAnswers))
  },[numAnswers]);



  return (

    <div className={styles.question_container}>
      <div className={styles.questionAnswertext}>
        <div className={styles.questionText}>
          <span className={styles.largeQA}>{props.questionData.question_body}</span>
        </div>
        <div className={styles.answerText}>
          <div className={styles.answers_detail}>

            {answers.map((answer, i) => {
                return <Answer data={answer} key={i} />
            })}


          </div>


          <div className={styles.helpful_addAnswer}>
          { showLoadMore ?
          <div className={styles.bottom_button}>
             <a onClick={() => {loadMoreAnswers()}} className={styles.small_link}>Load More Answers</a>
          </div>
         : <p></p> }

            <div className={styles.bottom_button}>
              <p>Helpful? <a href="#" onClick={ () => {markHelpful()} }>Yes</a> ({helpful})</p>
            </div>
            <div className={styles.bottom_button}>
            {showAnswerForm ?
          <div className={styles.modal_background}>
            <div className={styles.model_content}>
              <AddAnswerForm question_id={props.questionData.question_id} showModal={showModal} />
            </div>
          </div> :
          <p><button onClick={() => { showModal() }}>Add Answer</button></p>
          }
            </div>

      </div>
        </div>
      </div>




    </div>
  );
};

export default Question;
