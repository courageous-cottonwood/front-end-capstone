import React from 'react';
import styles from './qa.module.css';

const Buttons = (props) => {

  return (
    <div className={styles.button_holder}>
      <button onClick={() => { props.loadMore() }} className={styles.qa_button}>
        MORE ANSWERED QUESTIONS
      </button>
      <button className={styles.qa_button}>
        ADD A QUESTION &nbsp; +
      </button>
    </div>
  )
};

export default Buttons;