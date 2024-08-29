import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/products';

function App() {
  return (
    <div className='bg-white'>
      <Header />
      <Hero />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
