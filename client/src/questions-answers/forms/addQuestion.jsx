import React, { useState } from "react";
import axios from "axios";
import styles from '../qa.module.css';

const AddQuestionForm = (props) => {

  const [newQuestion, setNewQuestion] = useState({
    body: '',
    name: '',
    email: '',
    product_id: props.product_id
  });

  const [allowSubmit, setAllowSubmit] = useState(false);

  let updateForm = (e) => {
    let newObject = { ...newQuestion };
    newObject[e.target.name] = e.target.value;
    setNewQuestion(newObject);
    setAllowSubmit(validateForm(newQuestion));
  };

  let validateForm = (object) => {
    for (let item in object) {
      if (object[item].length < 1 && !Array.isArray(object[item])) {
        return false;
      }
    }
    return true;
  };

  let submitForm = () => {
    axios.post('/qa/questions', newQuestion)
      .then((res) => {
        if (res.data === 'Created') {
          props.showModal();
          props.reload()
        }
      })
  }

  return (
    <div onChange={(e) => { updateForm(e) }} className={styles.addForm_question}>
      <div className={styles.form_header}>
        <h3>Add Question</h3>
        <span className={styles.close_button} onClick={() => { props.showModal() }}>X</span>
      </div>
      <input name="body" required/>
      <label>Your Question</label>
      <input name="email" type="email" required/>
      <label>Email</label>
      <input name="name" required/>
      <label>Name</label>
      {allowSubmit ? <button onClick={() => { submitForm() }}>Submit Question</button> : <button disabled>Submit Question</button>}

    </div>
  )
};

export default AddQuestionForm;