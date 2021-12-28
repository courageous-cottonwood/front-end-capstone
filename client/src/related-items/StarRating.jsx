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

import React, { Component } from "react";
import Star from './Star.jsx';
import StarCSS from './cssModules/StarCSS.module.css';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  renderStars = () => {
    let stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          setRating={() => this.handleSetRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  };

  handleSetRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating });
    }
  };

  render() {
    return (
      <ul className={StarCSS.item_stars}>
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;