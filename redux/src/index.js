import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import userReducer from './features/User'


const store = configureStore({
  reducer: {
    user: userReducer
  }
})



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);


