import React from 'react';
import MyComponent from './components/MyComponent';
import MyDataComponent from './components/MyDataComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent name = "Koray Kara">this is my childrennnnn</MyComponent>
      <MyComponent name = "hasan">this is your childrennnnn</MyComponent>
      <MyDataComponent></MyDataComponent>

    </div>
  );
}

export default App;
