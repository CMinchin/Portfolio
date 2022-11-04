import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../additional/css/Header.css"

function Header() {
  const text = 'some text';
  return <header>
    <h1>Cameron</h1>
    <Routes>
      <Route path ="/" element={
        <h2 className='highlight'>About me</h2>
      }/>
      <Route path ="*" element={
        <a href='/'>
          <h2>About me</h2>
        </a>
      }/>
    </Routes>
    <Routes>
      <Route path ="/portfolio" element={
        <h2 className='highlight'>Portfolio</h2>
      }/>
      <Route path ="*" element={
        <a href='/portfolio'>
          <h2>Portfolio</h2>
        </a>
      }/>
    </Routes>
    <Routes>
      <Route path ="/contact" element={
        <h2 className='highlight'>Get in Touch</h2>
      }/>
      <Route path ="*" element={
        <a href='/contact'>
          <h2>Get in Touch</h2>
        </a>
      }/>
    </Routes>
    <Routes>
      <Route path ="/resume" element={
        <h2 className='highlight'>Resume</h2>
      }/>
      <Route path ="*" element={
        <a href='/resume'>
          <h2>Resume</h2>
        </a>
      }/>
    </Routes>
  </header>;
}

export default Header;
