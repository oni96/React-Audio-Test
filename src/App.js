import React from 'react';
import logo from './logo.svg';
import FileUpload from './Components/FileUpload'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Upload Audio File</h1>
      <FileUpload></FileUpload>
    </div>
  );
}

export default App;
