import React, {useState} from "react";
import './App.css';
import MyClosetPopUp  from './MyClosetPopUp';

function App() {
  return (
    <div className="App" style={{minWidth: 250, maxHeight: 400}}>
      <MyClosetPopUp />
    </div>
  );
}

export default App;
