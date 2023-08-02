import exx from '/exx.jpg'
import './App.css'
import { beckend, database, frontend, language } from './data'

function App() {


  return (
    <>
     

<div className="w3-content w3-margin-top" style={{maxWidth: 1400}}>

<div className="w3-row-padding">
  
   
  <div className="w3-third">
  
    <div className="w3-white w3-text-grey w3-card-4">
      <div className="w3-display-container">
        <img src={exx} style={{width:350}} alt="Avatar"/>
        <div className="w3-display-bottomleft w3-container w3-text-white">
          <h2 className='w3 w3-text-teal'>Artur Bulai</h2>
        </div>
      </div>
      <div className="w3-container">
        <h2 className='w3 w3-text-teal'><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal">
          </i>Frontend Programmer</h2>
        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>ST-Voda, MD</p>
        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal">artb8427@gmail.com
          </i></p>
        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+3736097233</p>
       <hr/>

        <p className="w3-large"><b>
          <i classNme="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
        <h2 className='w3 w3-text-teal'>Frontend</h2>
        {  frontend.map((f, index)=>
        <div key={index}>
        <p>{f.name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: f.width}}>{f.width}%</div>
        </div>
        </div>
        )}

       <h2 className='w3 w3-text-teal' >Beckend</h2>
        {  beckend.map((b, index)=>
        <div key={index}>
        <p>{b.name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: b.width}}>{b.width}%</div>
        </div>
        </div>
        )}

        
        <h2 className='w3 w3-text-teal'>Data Base</h2>
        {  database.map((db, index)=>
        <div key={index}>
        <p>{db.name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: db.width}}>{db.width}%</div>
        </div>
        </div>
        )}


        <p className="w3-large w3-text-theme"><h2 className='w3 w3-text-teal'>Languages</h2>
          </p>
          {  language.map((l, index)=>
        <div key={index}>
        <p>{l.name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: l.width}}>{l.width}%</div>
        </div>
        </div>
        )}
        <br/>
      </div>
    </div>
  </div>

  <div className="w3-twothird">
    
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right">
            </i>Jan 2019 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
        <p>ceva text</p>
       <hr/>
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>Web Developer / site in develop</b></h5>
        <h6 className="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2021</h6>
        <p></p>
        <hr/>
      </div>
      

      <div className="w3-container w3-card w3-white">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
        <p>Web Development! All I need to know in one place</p>
        <hr/>
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>Life  School</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>1990 - 2023</h6>
        <p>Master Degree</p>
        <hr/>
      </div>
      <div className="w3-container">
        <h5 className="w3-opacity"><b>School of Coding</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2019 - 2023</h6>
        <p>self-taught person</p><br/>
      </div>
    </div>



</div>
</div>
  
    </div>
  </div>
  <footer className="w3-container w3-teal w3-center w3-margin-top">
  <p>Find me on social media.</p>
  <a href="https://www.facebook.com/profile.php?id=100069895590526" target="_blank">
    <i  className="fa fa-facebook-official w3-hover-opacity"></i></a>
 <br/>
  <i classNames="fa fa-linkedin w3-hover-opacity"></i>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</footer>

  </>
 
 
  )
}

export default App
