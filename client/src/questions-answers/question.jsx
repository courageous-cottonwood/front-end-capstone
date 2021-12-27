import React from 'react';
import styles from './qa.module.css';


const Question = (props) => {
  return (

    <div className={styles.question_container}>
      <div className={styles.questionAnswertext}>
        <div className={styles.questionText}>
          <span className={styles.largeQA} style={{ marginRight: 10 }}>Q: </span>
          <span className={styles.largeQA}>What is the question?</span>
        </div>
        <div className="answerText">
          <span style={{ marginRight: 15 }} className="largeQA">A:</span>
          <div className="answers_detail">
            {/* //answers */}
            <a className={styles.small_link} href="http://www.google.com">Load More Answers</a>
          </div>
        </div>
      </div>
      <div className="helpful_addAnswer">
        <div className={styles.subdetail_small}>
          <p> Helpful? <a href="http://www.google.com">Yes</a>(2)</p>
          <p><a href="http://www.google.com">Add Answer</a></p>
        </div>
      </div>

    </div>
  );
};

export default Question;
