import './App.css';
import React from 'react';

import Main from "./component/Main/Main.js";
import Footer from './component/Footer/Footer';
import Top from "./component/Top/Top";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Top/>
        <Main> </Main>
        <Footer/>
      </div>
    );
  }
}

export default App;
