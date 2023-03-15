import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UnregisteredPage } from './pages/unregistered-page';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UnregisteredPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
      
    
  );
}

export default App;
