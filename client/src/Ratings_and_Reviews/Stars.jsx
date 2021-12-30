import React from 'react';
import styles from './RR.module.css';

const Stars = ({rating}) => {


    var activeStars = [];
    var inactiveStars = [];
    for( let i = 0; i < rating; i++) {
      activeStars.push(<svg className={styles.starActive} width="24" height="24">
      <use href="#star"></use>
    </svg>);
    }
    let numberOfInactiveStars = 5-rating;
    for(let i = 0; i < numberOfInactiveStars; i++) {
      inactiveStars.push(<svg className={styles.star} width="24" height="24">
      <use href="#star"></use>
    </svg>);
    }

  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">

      <symbol xlmns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="star">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </symbol>
    </svg>
    <p>
      {activeStars}
      {inactiveStars}
    </p>
    </div>
  );

}

export default Stars;