import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import MigrationProgressBar from './components/migrationProgressBar/migrationProgressBar'

function App() {

  return (
    <div className="App">
        <h1>Tracking our progress!</h1>
        <MigrationProgressBar />
    </div>
  );
}

export default App;
