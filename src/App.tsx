import React from 'react';
import styles from './App.module.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Section_one from './components/Section_one';
import Section_two from './components/Section_two';

function App() {
  return (
    <div className={styles.app}>
      <Hero/>
      <Section_one/>
      <Section_two/>
      <Footer/>
    </div>
  );
}

export default App;
