import React from 'react';
//import AppOutfit from './your-outfit/outfit-app.jsx';
import AppRelated from './related-items/related-items-app.jsx';
//import dummyData from './related-items/dummy_data.js';

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
