import React from 'react';

const RatingBars = ({rating, totalRatings, color}) => {

const getWidth = (inputRating, inputTotalRatings) => {
  if(inputRating === 0 && inputTotalRatings === 0) {
    return 0;
  }
  return (inputRating/inputTotalRatings) * 300;
}

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="300" height="12" >
        <rect x="0" width={`${getWidth(rating, totalRatings)}`} height="12" fill={`${color}`} viewBox = "0 0 12 12" rx="5"/>
      </svg>
    </div>


  );

}


export default RatingBars;