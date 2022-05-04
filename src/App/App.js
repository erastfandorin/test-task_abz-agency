import React, { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from './components/Header/Header';
import Poster from './components/Poster/Poster';
import Users from './components/Users/Users';
import SignUp from './components/SignUp/SignUp';
import FormSended from './components/FormSended/FormSended';

function App() {
  const [isFormSended, setIsFormSended] = useState(false);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Poster />
        <Users isFormSended={isFormSended} />
        {!isFormSended ? (
          <SignUp setIsFormSended={setIsFormSended} />
        ) : (
          <FormSended />
        )}
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
