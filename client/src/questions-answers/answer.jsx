import moment from 'moment';
import React from 'react';
import styles from './qa.module.css';
import Image from './Image.jsx';

const Answer = (props) => {

  if (props.data.photos.length > 0) {
    return (
      <div className={styles.answer_textDetail}>
      <p style={{ margin: 0 }}>{props.data.body}</p>
      <ul className={styles.answer_images}>
      {props.data.photos.map((photo, i) => {
        return <li key={i} ><Image photo={photo} /></li>
      })}
      </ul>
      <div className={styles.subdetail_small}>
        <p>by {props.data.answerer_name}, {moment(props.data.date).format("MMMM Do YYYY")} </p>
        <p>Helpful? <a href="#">Yes</a> ({props.data.helpfulness})</p>
        <p><a href="#">Report</a></p>
      </div>
    </div>
    );
  } else {

    return (
      <div className={styles.answer_textDetail}>
      <p style={{ margin: 0 }}>{props.data.body}</p>
      <div className={styles.subdetail_small}>
        <p>by {props.data.answerer_name}, {moment(props.data.date).format("MMMM Do YYYY")} </p>
        <p>Helpful? <a href="#">Yes</a> ({props.data.helpfulness})</p>
        <p><a href="#">Report</a></p>
      </div>
    </div>
    );

  }

};

export default Answer;