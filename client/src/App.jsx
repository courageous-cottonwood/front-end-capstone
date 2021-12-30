import React from 'react';
import ReactDOM from 'react-dom';
import Ratings_and_Reviews from './Ratings_and_Reviews/Ratings_and_Reviews.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <Ratings_and_Reviews/>
      </div>
    )
  }
}

export default App;
