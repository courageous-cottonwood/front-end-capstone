import React, { useState } from 'react';
import styles from './qa.module.css';
import AddQuestionForm from './forms/addQuestion.jsx';

const Buttons = (props) => {

  const [showQuestionForm, setShowQuestionForm] = useState(false);

  let showModal = () => {
    setShowQuestionForm(!showQuestionForm);
  };

  return (
    <div className={styles.button_holder}>
      <button onClick={() => { props.loadMore() }} className={styles.qa_button}>
        Load More Questions
      </button>

      {showQuestionForm ?
          <div className={styles.modal_background}>
            <div className={styles.model_content}>
              <AddQuestionForm product_id={props.product_id} reload={props.reload} showModal={showModal} />
            </div>
          </div> :
          <button onClick={() => { showModal() }} className={styles.qa_button}>
          Add a Question &nbsp; +
          </button>
          }
    </div>
  )
};

export default Buttons;