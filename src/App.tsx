import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { CouncilMemberPage } from './pages/council-member-page';
import { ReportComplaintPage } from './pages/report-complaint-page';
import { UnregisteredPage } from './pages/unregistered-page';
import SouthParkReducer from './reducers/south-park-reducer';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(SouthParkReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
function App() {
  return (
    <Provider store ={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UnregisteredPage/>}/>
          <Route path='/reportComplaint' element={<ReportComplaintPage/>}></Route>
          <Route path='/council' element={<CouncilMemberPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
      
    
  );
}

export default App;
