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
        {/* <a href='https://www.desmos.com/calculator/'>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu_yzHqSzZS6VVAPMhHQc-4f8hORNOZybaD87eHsxA=s88-c-k-c0x00ffffff-no-rj" alt="Desmos Logo" title="My crowning achievement"></img>
        </a> */}
    </footer>;
}

export default Footer;
