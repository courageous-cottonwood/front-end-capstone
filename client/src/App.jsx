import React from 'react';
import ReactDOM from 'react-dom';
import AppOutfit from './your-outfit/outfit-app.jsx';
import AppRelated from './related-items/related-items-app.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <h1>Hello World</h1>
          <AppRelated />
          <AppOutfit />
      </div>

    )
  }
}

export default App;
