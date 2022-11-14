import React from 'react';
import "../../additional/css/Portfolio.css";
import Project from '../Project';

function Portfolio() {
  const projects = [
    {
      title:'Portfolio',
      desc:'Clearly this is just this website but hear me out, I think it is a great example of not only my ability to use react but also my ability to not use react. A lot of developers tend to use JS in its many forms to compensate for a lack of skill in css and this is definitely felt.',
      imgsrc:'Portfolio.png',
      github:'https://github.com/CMinchin/Portfolio',
      link:'/'
    },
    {
      title:'Social Media API',
      desc:'This is a social media api designed to be used internally after security and verification have been done on inputs abstracting away the complex and ever evolving nature of cyber security to allow easier management of a social media database.',
      imgsrc:'SocialMediaAPI.png',
      github:'https://github.com/CMinchin/Social-Media-API'
    },
    {
      title:'Tech Blog',
      desc:'A social media alternative allowing users to create and comment on other peoples posts.',
      imgsrc:'TechBlog.png',
      github:'https://the-tech-blog778.herokuapp.com/'
    },
    {
      title:'Weather App',
      desc:'This is a basic app designed to hook into public APIs and display accurate and real time updated data and weather predictions for all around the world. This includes Temperature, humidity and a range of other stats.',
      imgsrc:'WeatherApp.png',
      github:'https://github.com/CMinchin/Weather-Dashboard',
      link:'https://cminchin.github.io/Weather-Dashboard/'
    },
    {
      title:'Note Taking App',
      desc:'Clearly this is just this website but hear me out, I think it is a great example of not only my ability to use react but also my ability to not use react. A lot of developers tend to use JS in its many forms to compensate for a lack of skill in css and this is definitely felt.',
      imgsrc:'NotetakingApp.png',
      github:'https://github.com/CMinchin/Portfolio',
      link:'https://notetakingapp778.herokuapp.com/'
    },
  ] 
  return <div className='flex'>
    {projects.map(project =>(<Project
    title={project.title}
    desc={project.desc}
    imgsrc={project.imgsrc}
    github={project.github}
    />))}
  </div>;
}

export default Portfolio;
