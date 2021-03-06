import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import Answer from './answer.jsx';
import AddAnswerForm from './forms/addAnswer.jsx';
import styles from './qa.module.css';

const Question = (props) => {

  const [numAnswers, setNumAnswers] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  const [helpful, setHelpful] = useState(props.questionData.question_helpfulness || 0);
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
      <div  className={styles.questionAnswertext}>
        <div className={styles.questionText}>
          <span data-testid="question-text" className={styles.largeQA}>Q: {props.questionData.question_body}</span>
          <p className={styles.subQuestion}>by {props.questionData.asker_name}, {dayjs(props.questionData.question_date).format("MMMM D YYYY")}</p>
        </div>
        <div className={styles.answerText}>
          <div className={styles.answers_detail}>
            {answers.map((answer, i) => {
                return <Answer data-testid="answer" data={answer} key={i} />
            })}
          </div>

          <div className={styles.helpful_addAnswer}>
            {/* 1 */}

            { showLoadMore ?
             <a className={styles.bottom_button} onClick={() => {loadMoreAnswers()}} >Load More Answers</a> : <p></p> }

            {/* 2 */}
              <a className={styles.bottom_button} onClick={ () => {markHelpful()} }>
              <strong className={styles.small_squareNumber}>{helpful}</strong>Found This Question Helpful
              </a>

            {/* 3 */}

          {showAnswerForm ?
            <div className={styles.modal_background}>
              <div className={styles.model_content}>
                <AddAnswerForm question_id={props.questionData.question_id} showModal={showModal} />
              </div>
            </div>
          :
            <a className={styles.bottom_button} onClick={() => { showModal() }}>Add Answer</a>
          }
      </div>
        </div>
      </div>

    </div>
  );
};

export default Question;
