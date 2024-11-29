import React from 'react';
import navbar from './components/navbar';
import footer from './components/footer';
import MovieGallery from './components/MovieGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <navbar />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main className="container my-5">
        <h1 className="text-center">Benvenuto nel Netflix Clone</h1>
        <p className="text-center">Inizia a esplorare le tue saghe preferite!</p>
        </main>
        <footer />
    </div>
    

  );
}

export default App;
