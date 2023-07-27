import { useState } from 'react'
import reactLogo from './assets/react.svg'
import exz from '/exz.png'
import './App.css'

function App() {


  return (
    <>
     

<div class="w3-content w3-margin-top" style={{maxWidth: 1400}}>

  
  <div class="w3-row-padding">
  
   
    <div class="w3-third">
    
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
          <img src={exz} style={{width:350}} alt="Avatar"/>
          <div class="w3-display-bottomleft w3-container w3-text-white">
            <h2 className='w3 w3-text-teal'>Artur Bulai</h2>
          </div>
        </div>
        <div class="w3-container">
          <h2 className='w3 w3-text-teal'><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal">
            </i>Junior Programmer</h2>
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>ST-Voda, MD</p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal">artb8427@gmail.com
            </i></p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+3736097233</p>
         <hr/>

          <p class="w3-large"><b>
            <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <h2 className='w3 w3-text-teal'>Frontend</h2>
          
          <p>React</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:80}}>
              <div class="w3-center w3-text-white">80%</div>
            </div>
          </div>
    
          <p>Angular</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:45}}>40%</div>
          </div>
         <br/>

         <h2 className='w3 w3-text-teal' >Beckend</h2>
          

          <p>Node.js</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:75}}>75%</div>
          </div>

          <p>Graphql</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:45}}>45%</div>
          </div>
          <h2 className='w3 w3-text-teal'>Data Base</h2>
          

          <p>MongoDB</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:75}}>75%</div>
          </div>

          <p>Mysql</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:25}}>25%</div>
          </div>

          <p class="w3-large w3-text-theme"><h2 className='w3 w3-text-teal'>Languages</h2>
            </p>
          <p>English</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style={{height: 24 , width: 60}}>60%</div>
          </div>
          <p>Romanian</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style={{height: 24 , width: 100}}></div>
          </div>
          <p>Ucrain</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style={{height: 24 , width: 70}}></div>
          </div>
          <p>Russian</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style={{height: 24 , width: 90}}></div>
          </div>
          <br/>
        </div>
      </div>
      </div>
    
   


    <div class="w3-twothird">
    
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16">
          <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2019 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
          <p>Lorem ipsum dolor sit amet. 
            Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic.
             Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
         <hr/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Web Developer / site in develop</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2021</h6>
          <p></p>
          <hr/>
        </div>
        

        <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16">
          <i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
          <p>Web Development! All I need to know in one place</p>
          <hr/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>Life  School</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>1990 - 2023</h6>
          <p>Master Degree</p>
          <hr/>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>School of Coding</b></h5>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2019 - 2023</h6>
          <p>self-taught person</p><br/>
        </div>
      </div>

  

  </div>
  </div>

  </div>
  <footer class="w3-container w3-teal w3-center w3-margin-top">
  <p>Find me on social media.</p>
  <i class="fa fa-facebook-official w3-hover-opacity"><a href="https://www.w3schools.com/w3css/default.asp" target="_blank"/></i>
 <br/>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</footer>

  </>
 
 
  )
}

export default App
