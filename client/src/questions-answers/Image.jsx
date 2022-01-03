import React, {useState} from 'react';
import styles from './qa.module.css';

const Image = (props) => {

  const [modalShow, setModalShow] = useState(false);

  let showModal = () => {
    setModalShow(!modalShow);
  };

  if (modalShow) {
    return (
    <div onClick={() => {showModal()}} className={styles.modal_background}>
      <div className={styles.model_content}>
        <img src={props.photo} className={styles.image_large} />
      </div>
    </div>
    );
  } else {
    return (
      <img onClick={() => {showModal()}} className={styles.image_small} src={props.photo} />
    );
  }

};

export default Image;