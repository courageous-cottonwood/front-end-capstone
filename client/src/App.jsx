/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import AppOutfit from './your-outfit/outfit-app.jsx';
import AppRelated from './related-items/related-items-app';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AppRelated product_id={63630} />
      </div>

    );
  }
}

export default App;
