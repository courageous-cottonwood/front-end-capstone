import React from 'react';
import styles from './Stars.module.css';

const Stars = ({rating, size}) => {


    var activeStars = [];
    var inactiveStars = [];
    var partialStars = [];
    var roundedRatingToQuarters = (Math.round(rating * 4) / 4).toFixed(2);
    var decimal = roundedRatingToQuarters % 1;


    if(roundedRatingToQuarters % 1 === 0) {
      for( let i = 0; i < rating; i++) {
        activeStars.push(<svg className={styles.starActive} width={`${size}`} height={`${size}`}>
        <use href="#star" fill="yellow"></use>
        <use href="#star" fill="none" stroke="grey"></use>
      </svg>);
      }
      for(let i = 0; i < (5-rating); i++) {
        inactiveStars.push(<svg className={styles.star} width={`${size}`} height={`${size}`}>
        <use href="#star" fill="none" stroke="black"></use>
      </svg>);
      }
    } else {
      let percent = decimal * 100;
      let wholeNumber = roundedRatingToQuarters - decimal;
      let map = {
        25: "quarter",
        50: "half",
        75: "three-quarters",
      }
      console.log(roundedRatingToQuarters);
      console.log(decimal);
      console.log(wholeNumber);
      console.log(map[percent]);

      for( let i = 0; i < wholeNumber; i++) {
        activeStars.push(<svg className={styles.starActive} width={`${size}`} height={`${size}`}>
        <use href="#star" fill="yellow"></use>
        <use href="#star" fill="none" stroke="black"></use>
      </svg>);
      }
      partialStars.push(<svg className={styles.starActive} width={`${size}`} height={`${size}`}>
      <use href="#star" mask="url(#half)" fill="yellow"></use>
      <use href="#star" fill="none" stroke="black"></use>
      </svg>);

      for(let i = 0; i < (4-wholeNumber); i++) {
        inactiveStars.push(<svg className={styles.star} width={`${size}`} height={`${size}`}>
        <use href="#star" fill="none" stroke="black"></use>
        </svg>);
      }

    }


  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="0" height="0" >
      <defs>
        <mask id="half">
          <rect x="50%" y="0" width ="24" height="24" fill="white" />
          <rect x="50%" y="0" width ="24" height="24" fill="black" />
        </mask>


        <symbol xlmns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </symbol>
      </defs>
    </svg>
    <p>
      {activeStars}
      {partialStars}
      {inactiveStars}
    </p>
    </div>
  );

}

export default Stars;