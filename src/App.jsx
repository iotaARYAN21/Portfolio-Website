import "./App.css";
import Wordchange from "../components/Wordchange";
import image from "./assets/react.svg"
import rss from "./assets/rss.png"
import clock from "./assets/clockvideo.mp4"
import frm from "./assets/form.png"
import stopwatch from "./assets/stopwatch.mp4"
import reactjs from "./assets/react.png"
import html from "./assets/html.png"
import css from "./assets/css.png"
import express from "./assets/expressjs.png"
import js from "./assets/js2.png"
import nodejs from "./assets/nodejs.png"
import postgres from "./assets/postgres.png"
import sql from "./assets/sql.png"
import bootstrap from "./assets/bootstrap.png"
import materialUI from "./assets/materialUI.png"
import linkedin from "./assets/linkedin.png"
import mail from "./assets/mail.png"
import twitter from "./assets/twitter.png"
import { useState, useEffect } from "react";
import Contact from "../components/Contact.jsx"
import Dsa from "../components/Dsa.jsx"
// create a gradient background
// add intro section
function App(){
  const date = new Date().getFullYear();
  // console.log(date);
  const [val,setVal] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setVal((prev) => prev+1);   // dont use !prev as react will not able to detect the change of val properly
    },3000);
    return ()=>clearInterval(interval);
  },[]);
  return <div className="container">
    <div className="intro">
      <div id="brief">
        <h1>Hi! I am Aryan ,<br /> a React.JS Developer</h1>
        <Wordchange iter={val%2}></Wordchange>
      </div>
      {/* <div i></div> */}
      <img src={image} alt="" width={200} />
    </div>
    <Dsa></Dsa>
    {/* <Dsa></Dsa> */}
    <div className="projectslist">
      <h1 className="title">Projects</h1>
      <div className="grid">
        <div className="grid-item">
          <img src={rss} alt="" />
          <p>RSS-Feed for Tech Blog</p>  
        </div>
        <div className="grid-item">
          {/* <img src={clock} alt="" /> */}
          <a href="https://iotaaryan21.github.io/React-Clock/"><video src={clock} autoPlay loop muted height={200} ></video></a>
          <p style={{paddingLeft:5}}>Analoge Clock</p>
        </div>
        <div className="grid-item">
          <img src={frm} alt="" />
          <a href="https://iotaaryan21.github.io/React-Form/" ><p>React Form</p></a>
        </div>
        <div className="grid-item">
          <a href="https://iotaaryan21.github.io/stopwatch/"><video src={stopwatch}  autoPlay loop muted height={180} ></video></a>
          <p style={{paddingLeft:10}}>Stop Watch</p>
        </div>
      </div>
    </div>
    <h1 style={{textAlign:"center"}} className="title">TechStack</h1>
    <div className="techstack">
      <div className="frontend">
          <div className="image">
            <img src={reactjs} alt="" />
            <h4>React JS</h4>
          </div>
          <div className="image">
            <img src={html} alt="" />
            <h4>HTML</h4>
          </div>
          <div className="image">
            <img src={css} alt="" />
            <h4>CSS</h4>
          </div>
          <div className="image">
            <img src={js} alt="" />
            <h4>Javascript</h4>
          </div>
          <div className="image">
            <img src={bootstrap} alt="" />
            <h4>Bootstrap</h4>
          </div>
          <div className="image">
            <img src={materialUI} alt="" />
            <h4>MaterialUI</h4>
          </div>
      </div>
      <div className="backend">
          <div className="image">
            <img src={nodejs} alt="" />
            <h4>Node JS</h4>
          </div>
          <div className="image">
            <img className="exp" src={express} style={{paddingLeft:"5px"}} alt="" />
            <h4>Express JS</h4>
          </div>
          <div className="image">
            <img src={postgres} alt="" />
            <h4>Postgres SQL</h4>
          </div>
          <div className="image">
            <img src={sql} alt="" />
            <h4>SQL</h4>
          </div>
      </div>
    </div>
    <Contact></Contact>
    <div className="social-media">
      <a href="https://x.com/aryan0312g?t=RPu_YTsUvYxXw2XIa9sdsA&s=09"><img src={twitter} alt="" /></a>
      <a href="www.linkedin.com/in/aryan-b34639288"><img src={linkedin} alt="" /></a>
      <a href="mailto:aryan0312g@gmail.com"><img src={mail} alt="" /></a>
    </div>
    <footer>
      <h4 style={{textAlign:"center" , fontSize:"1.5rem"}}>Feel free to reach out to me via email, Twitter, LinkedIn, or Email!</h4>
      <h4><a href="mailto:aryan0312g@gmail.com" style={{textDecoration:"none"}}>aryan0312g@gmail.com</a></h4>
      <h4>© {date} Aryan . All rights reserved.</h4>
    </footer>
  </div>
}
export default App;