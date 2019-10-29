import React from 'react';
import './styles/App.scss';
import Banner from './components/Banner.js'
import Navbar from './components/Navbar.js'
import Section1 from './components/Section-one'
import Section2 from './components/Section-two'
import Section3 from './components/Section-three'
import Section4 from './components/Section-four'
import Section5 from './components/Section-five'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Section1/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
