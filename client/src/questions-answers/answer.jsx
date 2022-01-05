import React, { useState } from 'react';
import dayjs from 'dayjs';
import styles from './qa.module.css';
import Image from './Image.jsx';
import axios from 'axios';

const Answer = (props) => {

  const [helpful, setHelpful] = useState(props.data.helpfulness);
  const [reportIsLink, setReportIsLink] = useState(true);
  const [helpfulIsLink, setHelpfulIsLink] = useState(true);

  let report = () => {
    axios.put('/qa/answers/report', { answer_id: props.data.id })
    .then((res) => {
      setReportIsLink(false);
    });
  };

  let markHelpful = () => {
    axios.put('/qa/answers/helpful', { answer_id: props.data.id })
    .then((res) => {
      setHelpful(helpful + 1);
      setHelpfulIsLink(false);
    });
  };

  if (props.data.photos.length > 0) {
    return (
      <div className={styles.answer_textDetail}>
        <div style={{ width: '100%' }}>
        <p style={{ margin: 0 }}><strong>A: &nbsp;</strong>{props.data.body}</p>
        <p className={styles.subdetail_small}> by {props.data.answerer_name}, {dayjs(props.data.date).format("MMMM D YYYY")} </p>
          <ul className={styles.answer_images}>
          {props.data.photos.map((photo, i) => {
            return <li key={i} ><Image photo={photo} /></li>
          })}
          </ul>
        </div>


        <div>
          {helpfulIsLink ?
          <a className={styles.square_button} onClick={ () => {markHelpful()} }>
          <h2 style={{ marginTop: 0 }}>{helpful}</h2>
          <p>Found This Helpful</p>
          </a> :
          <a className={styles.square_button}>
          <h2 style={{ marginTop: 0 }}>{helpful}</h2>
          <p>Found This Helpful</p>
          </a>
        }

          { reportIsLink ? <a className={styles.square_button} onClick={() => { report() }}><p>
          <strong>Report</strong><br />This Answer</p></a> : <div className={styles.square_button}>Reported</div> }
      </div>
    </div>
    );
  } else {

    return (
      <div className={styles.answer_textDetail}>
        <div style={{ width: '100%' }}>
        <p style={{ margin: 0 }}><strong>A: &nbsp;</strong>{props.data.body}</p>
        <p className={styles.subdetail_small}> by {props.data.answerer_name}, {dayjs(props.data.date).format("MMMM D YYYY")} </p>
        </div>
      <div>
      {helpfulIsLink ?
          <a className={styles.square_button} onClick={ () => {markHelpful()} }>
          <h2 style={{ marginTop: 0 }}>{helpful}</h2>
          <p>Found This Helpful</p>
          </a> :
          <a className={styles.square_button}>
          <h2 style={{ marginTop: 0 }}>{helpful}</h2>
          <p>Found This Helpful</p>
          </a>
        }
          { reportIsLink ? <a className={styles.square_button} onClick={() => { report() }}><p>
          <strong>Report</strong><br />This Answer</p></a> : <div className={styles.square_button}><p>Reported</p></div> }
      </div>
    </div>
    );

  }

};

export default Answer;