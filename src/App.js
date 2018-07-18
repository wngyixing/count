import React, { Component } from 'react';
import './App.css';
import Head from "./components/lib/header.jsx"
import Sections from "./components/lib/section.jsx"
import Footers from "./components/lib/footer.jsx"
class App extends Component {
  render() {
    return (
      <div className="wrap">
          <Head></Head>
          <Sections></Sections>
          <Footers></Footers>
      </div>
    );
  }
}

export default App;
