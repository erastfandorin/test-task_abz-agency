import React  from 'react';

import Header from './components/Header/Header';
import Poster from "./components/Poster/Poster"
import Users from "./components/Users/Users"


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Poster />
      <Users />
    </div>
  );
}

export default App;
