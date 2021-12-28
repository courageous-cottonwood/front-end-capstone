import React, {useState} from 'react';


const Image = (props) => {

  const [modalShow, setModalShow] = useState(false);

  let showModal = () => {

  };

  if (showModal) {
    return (
    <div className={styles.modal}>
      <div className={}
      <img src={props.img.src} />
    </div>
    );
  }

  return (<img src={props.img.src} />);


};