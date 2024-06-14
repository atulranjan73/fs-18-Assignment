import Navbar from "./Navbar"
import './contact.css'

function Contact(){
   return(
    <div id="contact">
    <div id="nav">
        <h1>Side Projects</h1>
        <Navbar />
      </div>
   <div id="email">
      <h2>Email : </h2>
      <p>sheetalkumarilife@gmail.com <span>Copy</span></p>
   </div>

   <div id="video">
      <h2>Schedule Video Call With Me : </h2>
      <img src="https://oktayshakirov.com/assets/images/calendar.png"></img>
   </div>

   <div id="socials">
   <h2>Socials : </h2>
   <div id="images">
   <img src="https://oktayshakirov.com/assets/images/socials/github.png"></img>
     <img src="https://oktayshakirov.com/assets/images/socials/linkedin.png"></img>
     <img src="https://oktayshakirov.com/assets/images/socials/instagram.png"></img>
     <img src="https://oktayshakirov.com/assets/images/socials/twitter.png"></img>
   </div>
   
   </div>
    </div>
   )
}

export default Contact