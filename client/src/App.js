// import logo from './additional/logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './additional/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  return (
    <Router>
      <Header/>
      {/* <Routes>
        <Route path="/" element={
          <h1>hello world</h1>
        }/>
      </Routes> */}
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      </div> */}
      <main>
        <Routes>
          <Route path='/' element={
            <AboutMe/>
          }/>
          <Route path='/portfolio' element={
            <Portfolio/>
          }/>
          <Route path='/contact' element={
            <Contact/>
          }/>
          <Route path='/resume' element={
            <Resume/>
          }/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
