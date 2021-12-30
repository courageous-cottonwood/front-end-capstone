/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable eol-last */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable react/state-in-constructor */
/* eslint-disable comma-dangle */
/* eslint-disable react/destructuring-assignment */

import React from "react";
import { useEffect, useState, Component } from 'react';
import Star from './Star.jsx';
import StarCSS from './cssModules/StarCSS.module.css';


//tranform into hooks, pass down id to use get rating, do math avg

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  calculateRating = (ratingsObj) => {
    var totalScore = 0;
    var numOfReviews = 0;
    for (key in ratingsObj) {
      totalScore += ratingsObj[key] * key;
      numOfReviews += ratingsObj[key];
    }
    var average = totalScore / numOfReviews;
    return average;
  }

  renderStars = () => {
    //get rating from GET /reviews/meta param: product_id
    //send result obj to calculateRating, get average
    //assign that result to starts
    const average = 0;
    let stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          key={i}
        />
      );
    }
    return stars;
  };


  render() {
    return (
      <div>
        {/* <h4>Average rating</h4> */}
      <ul className={StarCSS.item_stars}>
        {this.renderStars()}
      </ul>
      </div>
    );
  }
}

export default StarRating;


// isSelected={this.state.rating > i}
          // setRating={() => this.handleSetRating(i + 1)}


  // handleSetRating = (rating) => {
  //   if (this.state.rating === rating) {
  //     this.setState({ rating: 0 });
  //   } else {
  //     this.setState({ rating });
  //   }
  // };