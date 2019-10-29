import React from 'react';
import './styles/App.scss';
import Banner from './components/Banner.js'
import Navbar from './components/Navbar.js'
import Section1 from './components/Section-one'
import Section2 from './components/Section-two'
import Section3 from './components/Section-three'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Section1/>
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
