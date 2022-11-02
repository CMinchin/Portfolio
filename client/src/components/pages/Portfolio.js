import React from 'react';
import "../../additional/css/Portfolio.css";
import Project from '../Project';

function Portfolio() {
  return <div className='flex'>
    <Project
    title='Portfolio'
    desc='Clearly this is just this website but hear me out, I think it is a great example of not only my ability to use react but also my ability to not use react. A lot of developers tend to use JS in its many forms to compensate for a lack of skill in css and this is definitely felt.'
    imgsrc='Portfolio.png'
    />
    <Project/>
    <Project/>
    <Project/>
    <Project/>
    <Project/>
  </div>;
}

export default Portfolio;
