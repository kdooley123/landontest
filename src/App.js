import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className='App'>
      <Header />
        <Main />
      <Footer />
    </div>
  );
  };
}

export default App;
