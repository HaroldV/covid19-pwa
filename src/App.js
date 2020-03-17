import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import ListCovid19 from '../src/containers/ListCovid19';

function App() {
  return (
    <div className="App">      
      <Header />
      <ListCovid19 />
    </div>
  );
}

export default App;
