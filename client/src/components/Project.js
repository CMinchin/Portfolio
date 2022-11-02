import React from 'react';
import "../additional/css/Project.css"


const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function Project({github="https://www.github.com/cminchin/", link="https://www.github.com/cminchin/", title="Project name", desc = Lorem, imgsrc="https://cdn.shortpixel.ai/spai/w_788+q_lossy+ret_img+to_webp/https://upmostly.com/wp-content/uploads/react-on-hover-event-handling.jpg"}) {
  return <div className='project'>
    <img src={imgsrc}/>
    <p className='hover'>
      <h2>
        <a href={github} className="github">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo" title="Github link for project"></img>
        </a>
        <a href={link}>
          {title}
        </a>
      </h2>
      {desc}
    </p>
    <h2 className='regular'>
      {title}
    </h2>
  </div>;
}

export default Project;
