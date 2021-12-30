import React, { useState } from 'react';
import dayjs from 'dayjs';
import styles from './qa.module.css';
import Image from './Image.jsx';
import axios from 'axios';

const Answer = (props) => {

  const [helpful, setHelpful] = useState(props.data.helpfulness);
  const [reportIsLink, setReportIsLink] = useState(true);

  let report = () => {
    console.log(props.data.id);
    axios.put('/qa/answers/report', { answer_id: props.data.id })
    .then((res) => {
      setReportIsLink(false);
      console.log(res.data);
    });
  };

  let markHelpful = () => {
    axios.put('/qa/answers/helpful', { answer_id: props.data.id })
    .then((res) => {
      setHelpful(helpful + 1);
    });
  };


  if (props.data.photos.length > 0) {
    return (
      <div className={styles.answer_textDetail}>
        <div style={{ width: '100%' }}>
        <p style={{ margin: 0 }}>{props.data.body}</p>
        <p className={styles.subdetail_small}> by {props.data.answerer_name}, {dayjs(props.data.date).format("MMMM D YYYY")} </p>
          <ul className={styles.answer_images}>
          {props.data.photos.map((photo, i) => {
            return <li key={i} ><Image photo={photo} /></li>
          })}
          </ul>
        </div>


      <div>
        <div className={styles.square_button}>
        <p>Helpful? <a href="#" onClick={ () => {markHelpful()} }>Yes</a> ({helpful})</p>
        </div>
        <div className={styles.square_button}>
        { reportIsLink ? <p><a href="#" onClick={() => { report() }}>Report</a></p> : <p>Reported</p> }
        </div>
      </div>
    </div>
    );
  } else {

    return (
      <div className={styles.answer_textDetail}>
        <div style={{ width: '100%' }}>
        <p style={{ margin: 0 }}>{props.data.body}</p>
        <p className={styles.subdetail_small}> by {props.data.answerer_name}, {dayjs(props.data.date).format("MMMM D YYYY")} </p>
        </div>
      <div >
        <div className={styles.square_button}>
        <p>Helpful? <a href="#" onClick={ () => {markHelpful()} }>Yes</a> ({helpful})</p>
        </div>
        <div className={styles.square_button}>
        { reportIsLink ? <p><a href="#" onClick={() => { report() }}>Report</a></p> : <p>Reported</p> }
        </div>
      </div>
    </div>
    );

  }

};

export default Answer;