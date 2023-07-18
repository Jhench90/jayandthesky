import React, { useEFfect, useState } from 'react';

export default function AboutMe() {
  return (
    <div className="flexContainer">
    <div className="topMargin aboutMeContainer">
      <div className="flexContainer">
        <img src='/DronePhoto/AboutMe.webp' className="aboutMeProfilePic"></img>
        <div className="aboutMeContent">
          <h1>About Me</h1>
          <div className='aboutMeParagraph1'>Im Jay. Im a California native currently living near San Francisco. I built this website with React.js as a passion project to show some of the things I am interested in. Its using ArangoDB on the back end and I'm hosting it on an old laptop just for fun. As a web developer, I have experience building full stack applications. I am currently working as a UI developer with United Software Corporation. I'm a Tottenham Hotspurs fan, Go Coys! Drop me a message if you'd like to connect. Let's get some coffee.</div>

        </div>
      </div>
      <div className="flexContainer">
        <h1>Connect</h1>
      </div>
      <div className="flexContainer">
        <img onClick={(e) => {
          window.open('https://www.linkedin.com/in/joel-hench/')
        }} className="connectIcon" src="https://lofrev.net/wp-content/photos/2017/04/linkedin_logo-1007x1007.jpg" />
        <img onClick={(e) => {
          window.open('https://github.com/jhench90')
        }} className="connectIcon" src="http://pngimg.com/uploads/github/github_PNG80.png" />
        <img onClick={(e) => {
          window.open('https://www.instagram.com/jay.andthesky/')
        }} className="connectIcon" src="https://tse4.mm.bing.net/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&pid=Api&P=0" />
      </div>
      <div className="flexContainer">
        <span className="softwareEngineering">
          <h1>Software Engineering</h1>
          <p className='aboutMeParagraph2'>   Prior to becoming a software engineer, I spent several years taking pre-requisite work for a
            Clinical Laboratory Science program, and after a 14 month hospital internship and 1 year in the field, I
            realized that I had chosen the wrong path. Like many people before me, I decided to
            make a career change and pursue software engineering. It was hard to say goodbye to my old career since it had been my dream
            , but I knew if I stayed there I wouldn't be happy. Software engineering gave me a chance to regularly be introduced
            to new and challenging concepts, and more growth opportunities for personal development and advancement.
          </p>
          <p className='aboutMeParagraph2'>
            I spent 1 month self studying JavaScript while continuing to work full time, then quit my job and began self studying JavaScript. I went to Hack Reactor Software Engineering
            Immersive 12 week program from February to May 2022, and after many months of LeetCode problems and job searching, found a position as Software Dev Engineer with Amazon Web Services.
          </p>
          <p className='aboutMeParagraph2'>
            On the front-end, I use JavaScript, TypeScript, GraphQL, React, React Router, HTML5, and CSS3. I also
            MaterialUI and Bootstrap. On the back-end, I used Node.js, Express.js, and several databases such as MySQL2.0, PostgreSQL, MongoDB,
            and ArangoDB. I have used Socket.io once. I have deployed both to cloud computing services
            such as AWS and maintain my personal website (this one) on my home server. I have worked with NGINX for load-
            balancing, and k6 and Loader.io for stress testing.
          </p>
          <p className='aboutMeParagraph2'>
            Thats it from me! This website is modular, so maybe I'll build a section on this website as a place to learn Ukelele next.:D
          </p>
        </span>
      </div>
      </div>
      </div>
  )
}