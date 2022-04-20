import React  from 'react';

import Header from './components/Header/Header';
import Poster from "./components/Poster/Poster";
import Users from "./components/Users/Users";
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Poster />
      <Users />
      <SignUp />
    </div>
  );
}

export default App;
