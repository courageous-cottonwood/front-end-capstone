import React, { useState, useEffect } from 'react';
import Answer from './answer.jsx';
import AddAnswerForm from './forms/addAnswer.jsx';
import styles from './qa.module.css';

const Question = (props) => {

  const [numAnswers, setNumAnswers] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  let loadMoreAnswers = () => {
      setNumAnswers(numAnswers + 2);
  };

  let showModal = () => {
    setShowAnswerForm(!showAnswerForm);
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
          <span className={styles.largeQA} style={{ marginRight: 10 }}>Q: </span>
          <span className={styles.largeQA}>{props.questionData.question_body}</span>
        </div>
        <div className={styles.answerText}>
          <span style={{ marginRight: 15 }} className={styles.largeQA}>A:</span>
          <div className={styles.answers_detail}>

            {answers.map((answer, i) => {
                return <Answer data={answer} key={i} />
            })}
            { showLoadMore ? <a onClick={() => {loadMoreAnswers()}} className={styles.small_link}>Load More Answers</a> : <div></div> }
          </div>
        </div>
      </div>


      <div className={styles.helpful_addAnswer}>
        <div className={styles.subdetail_small}>
          <p> Helpful? <a href="http://www.google.com">Yes</a> ({props.questionData.question_helpfulness})</p>
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
  );
};

export default Question;
