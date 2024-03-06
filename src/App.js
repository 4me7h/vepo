import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Hero from './components/Hero';
import Team from './components/Team';
import Micro from './components/Micro';

import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="micro">
        <Micro />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="products">
        <Products />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
