import React from 'react';
import styles from './App.module.css'; 
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
  </div>;
}

export default App;
