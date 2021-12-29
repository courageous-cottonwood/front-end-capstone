import React, { useState } from "react";
import styles from '../qa.module.css';
import axios from 'axios';

const AddAnswerForm = (props) => {

  const [newAnswer, setNewAnswer] = useState({
    body: '',
    name: '',
    email: '',
    photos: [],
    question_id: props.question_id
  });
  const [allowSubmit, setAllowSubmit] = useState(false);

  let updateForm = (e) => {
    let newObject = { ...newAnswer };
    if (e.target.name === 'photo') {
      newObject['photos'][e.target.id] = e.target.value;
    } else {
      newObject[e.target.name] = e.target.value;
    }
    setNewAnswer(newObject);
    setAllowSubmit(validateForm(newAnswer));
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
    axios.post('/qa/answers', newAnswer)
    .then((res) => {
      if (res.data === 'Created') {
        props.showModal();
      }
    })
  }

  return (
    <div onChange={(e) => { updateForm(e) }} className={styles.addForm_answer}>
      <div className={styles.form_header}>
        <h3>Add Answer</h3>
        <span className={styles.close_button} onClick={() => { props.showModal() }}>X</span>
      </div>
      <textarea name="body" />
      <label>Your Answer</label>
      <input name="email" />
      <label>Email</label>
      <input name="name" />
      <label>Name</label>

      <input name="photo" id="0" />
      <input name="photo" id="1" />
      <input name="photo" id="2" />

      <label>URLs of Photos</label>
      {allowSubmit ? <button onClick={() => {submitForm()}}>Submit Answer</button> : <button disabled>Submit Answer</button>}

    </div>
  )
};

export default AddAnswerForm;

