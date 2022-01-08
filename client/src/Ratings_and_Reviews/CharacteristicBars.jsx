import React from 'react';
import styles from './RR.module.css';

const CharacteristicBars = ({characteristic, value, color}) => {


  const getCharacteristicDescriptions = (characteristic) => {

    if(characteristic === 'Size') {
      return (
        <div className={styles.characteristicSpanDescriptions}>
          <span>Too small</span>
          {/* <span>½ too small</span> */}
          <span>Perfect</span>
          {/* <span>½ too big</span> */}
          <span> Too wide</span>
        </div>
      );
    }
    if(characteristic === 'Width') {
      return (
        <div className={styles.characteristicSpanDescriptions}>
          <span>Too narrow</span>
          {/* <span>Slightly narrow</span> */}
          <span>Perfect</span>
          {/* <span>Slightly wide</span> */}
          <span> Too wide</span>
        </div>
      );
    }
    if(characteristic === 'Comfort') {
      return (
        <div className={styles.characteristicSpanDescriptions}>
          <span>Irritating</span>
          {/* <span>Slightly Uncomfortable</span> */}
          <span>Ok</span>
          {/* <span>Comfortable</span> */}
          <span> Perfect</span>
        </div>
      );
    }
    if(characteristic === 'Quality') {
      return (
        <div className={styles.characteristicSpanDescriptions}>
          <span>Poor</span>
          {/* <span>Below Average</span> */}
          <span>Expected</span>
          {/* <span>Pretty great</span> */}
          <span> Perfect</span>
        </div>
      );
    }
    if(characteristic === 'Length') {
      return (
        <div className={styles.characteristicSpanDescriptions}>
          <span>Runs Short</span>
          {/* <span>Slightly short</span> */}
          <span>Perfect</span>
          {/* <span>Slightly long</span> */}
          <span> Runs long</span>
        </div>
      );
    }
    if(characteristic === 'Fit') {
      return (
        <div className={styles.characteristicSpanDescriptions}>
          <span>Runs Tight</span>
          {/* <span>Slightly tight</span> */}
          <span>Perfect</span>
          {/* <span>Slightly long</span> */}
          <span> Runs long</span>
        </div>
      );
    }
  }


  return (
    <div className={styles.characteristicBarContainer}>
      <div className={styles.characteristicBarSpanContainer}>
        <span className={styles.characteristicBarSpan}>{characteristic} : {value}</span>
      </div>
       <div>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="400" height="12" >
          <rect x={`${((value/5)*400)-50}`} width="50" height="12" fill={`${color}`} viewBox = "0 0 12 12" rx="5"/>
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="132" height="12" >
          <rect x="0" width="132" height="12" fill="none" stroke="black" viewBox = "0 0 12 12" rx="5"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="132" height="12" >
          <rect x="0" width="132" height="12" fill="none" stroke="black" viewBox = "0 0 12 12" rx="5"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="132" height="12" >
          <rect x="0" width="132" height="12" fill="none" stroke="black" viewBox = "0 0 12 12" rx="5"/>
        </svg>
      </div>
      <div className={styles.characteristicDescriptionContainer}>
        {getCharacteristicDescriptions(characteristic)}
      </div>
    </div>



  );

}


export default CharacteristicBars;