import React from 'react';

const Stars = ({rating, size, color}) => {

  // to set the same size and color
  // size = size || 40;
  // color = color || '#2f1c5b';

    var activeStars = [];
    var inactiveStars = [];
    var partialStars = [];
    var roundedRatingToQuarters = (Math.round(rating * 10) / 10).toFixed(2);
    var decimal = roundedRatingToQuarters % 1;


    if(roundedRatingToQuarters % 1 === 0) {
      for( let i = 0; i < rating; i++) {
        activeStars.push(<svg  width={`${size}`} height={`${size}`}>
        <use href="#star" fill={`${color}`}></use>
        <use href="#star" fill="none" stroke="black"></use>
      </svg>);
      }
      for(let i = 0; i < (5-rating); i++) {
        inactiveStars.push(<svg  width={`${size}`} height={`${size}`}>
        <use href="#star" fill="none" stroke="black"></use>
      </svg>);
      }
    } else {
      let percent = decimal * 100;
      let wholeNumber = roundedRatingToQuarters - decimal;


      for( let i = 0; i < wholeNumber; i++) {
        activeStars.push(<svg  width={`${size}`} height={`${size}`}>
        <use href="#star" fill={`${color}`}></use>
        <use href="#star" fill="none" stroke="black"></use>
      </svg>);
      }
      partialStars.push(<svg width={`${size}`} height={`${size}`}>
      <use href="#star" mask="url(#mask)" fill={`${color}`}></use>
      <use href="#star" fill="none" stroke="black"></use>
      </svg>);

      for(let i = 0; i < (4-wholeNumber); i++) {
        inactiveStars.push(<svg  width={`${size}`} height={`${size}`}>
        <use href="#star" fill="none" stroke="black"></use>
        </svg>);
      }

    }


  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="0" height="0" >
        <defs>
          <mask id="mask">
            <rect x="0" y="0" width ={`${size}`} height={`${size}`} fill="white" />
            <rect x={`${size * decimal}`} y="0" width ={`${size}`} height={`${size}`} fill="black" />
          </mask>


          <symbol xlmns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`} id="star">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </symbol>
        </defs>
      </svg>

      <div>
        {activeStars}
        {partialStars}
        {inactiveStars}
      </div>

    </div>
  );

}

export default Stars;