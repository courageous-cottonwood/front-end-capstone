import React from 'react';

const Review = ({review}) => {
  console.log(review);
  return (
    <div> Review
      <div>{review.rating}</div>
      <div>{review.date}</div>
      <div>{review.summary}</div>
      <div>{review.body}</div>
      <div>{review.reviewer_name}</div>

    </div>

  );
}

export default Review;