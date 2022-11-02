import React from 'react';
import "../../additional/css/AboutMe.css"

function AboutMe() {
    return <>
        <h2>
            Cameron
        </h2>
        <img className='avatar' src='/Avatar.jpg' alt='My Avatar' title='My Avatar'/>
        <p>
            My name is Cameron Minchin and I'm {new Date(Date.now()-Date.parse("11/12/2003")).getFullYear()-1970} years old and I've always hated talking about myself so I'll make this quick.
        </p>
        <br/>
        <h3>
            ME
        </h3>
        <p>
            I like to do things, to quote JFK, not because they are easy but because they are hard, its one of the reasons that the age above is not written as 18 or whatever it might end up being by the time you read this but is infact written {`{new Date(Date.now()-Date.parse("11/12/2003")).getFullYear()-1970}`} although the solution to the problem is definitely not 'better' than the problem it is easier that changing it every year.
            This is also co-evidenced by the fact that this section was originally called `#include icebreaker.h` and that I looked up whether co-evidenced was a word and then after finding out it wasn't, I proceded to not change it.
        </p>
        <br/>
        <h3>
            Experience
        </h3>
        <p>
            Depending on how you define programming I started programming between 2014 and 2016. I don't remember writing code with characters until 2016 but I remember writing "code" for <a href='https://www.lego.com/en-au/themes/mindstorms/about'>mindstorms</a>, its lego technic with programable sensors and motors.
            To be honest I think that this is by far the best way of introducing people to the concept of programming because of the ease of use and the tangibility of its output. Obviously it's a special feeling watch you cause "Hello World!" print to the screen but nothing quite beats the tactile nature of a motor moving when you tell it to.
            in 2016 I learnt python, as well as a number of other 'languages' like html, css and js, and the sky was the limit. I have probably built thousands of programs out of python, most of them were one offs but I have also completed all of groklearning's python programs at least twice, once to learn and the second to see if I could do it all in one line of code each; I have always considered trying to complete everything in one program but I no longer have access to that account because it was linked to my school email
            Throughout the rest of my schooling I learnt a number of languages frameworks and techniques including but not limited to C#, SQL, C, node.js, .net framework, binary searches, breadth first searches and implementations of linked lists.
            These allow me not only to addapt to a new language relatively quickly but prototype and produce a product that not only works but works well.
        </p>
        <br/>
        <h3>
            Formal Education and Job Experience
        </h3>
        <p>
            I studied accellerated ATAR computer science duing high school and as well as computer science before this but as a prerequisite to participating in accellerated computer science I completed the UNSW HS1511 course as part of HS1917 which is a university level course.
            Post-high school I completed UWA's full stack flex course, and as a part of that I designed, created and deployed this website. As part of this course I reinforced my knowledge of HTML, CSS, JS, SQL, NODE.JS and OOP, and learnt about API design using Express, testing using Jest, the MVC stack, various computer science techniques including search algorithms and their optimisation and O notation, PWAs, React.JS and the MERN stack.
            Since the end of that course I have been employed a number of times to do a range of developement including WPF developement using C# and .net framework for an internal app to better interact with pre-existing hardware.
            I have also worked on developing user documentation for a windows app that allows user to create and manage certificates as well as helping develop various parts of a system to build hardware and software that uses machine learning to identify grain and it's various properties such as health and type quickly and efficiently.
        </p>
    </>;
}

export default AboutMe;
