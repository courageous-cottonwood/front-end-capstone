/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import AppOutfit from './your-outfit/outfit-app.jsx';
import AppRelated from './related-items/related-items-app.jsx';
import dummyData from './related-items/dummy_data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <AppRelated items = {dummyData} />
        <AppOutfit />
      </div>

    );
  }
}

export default App;
