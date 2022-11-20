import React from 'react';
import HomePage from './components/homepage/HomePage';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {


  return (
    <Provider store={store}>
      <div>
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
