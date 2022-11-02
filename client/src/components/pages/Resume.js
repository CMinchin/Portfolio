import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../../additional/css/Resume.css"

function Resume() {
  return <>
    <div className='resume'>
    <a href='https://docs.google.com/document/d/1851zwpuYAddDzil5pu6tmAQlZ7P9O4dA/edit?usp=sharing&ouid=115736976141016910196&rtpof=true&sd=true'>
      <h1>Cameron</h1>
    </a>
      <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vQLh_vg2m8W2ecjrXMW-Wz6DQNn4LqCOjlhPzAqKOBcqtxsy_2GnukRE1WcFmUGhA/pub?embedded=true"/>
    </div>
  </>;
}

export default Resume;
