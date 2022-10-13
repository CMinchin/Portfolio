import React from 'react';
import "../additional/css/Footer.css"

function Footer() {
    const text = 'some text';
    return <footer> 
        <a href='https://github.com/CMinchin'>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo" title="Github Logo"></img>
        </a>
        <a href='www.linkedin.com/in/cameron-minchin'>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png-600x600.png" alt="Linkedin Logo" title="Linkedin Logo"></img>
        </a>
        <a href='https://twitter.com/elonmusk/'>
            <img src="https://cdn-icons-png.flaticon.com/512/49/49351.png?w=826&t=st=1665470601~exp=1665471201~hmac=24dcba86de7d8f8bea9d8ede0a66aa05cd9581fb29de891757275adc582280d5" alt="Twitter Logo" title="The only intellegent being on twitter"></img>
        </a>
    </footer>;
}

export default Footer;
