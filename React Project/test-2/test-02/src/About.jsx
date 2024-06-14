import Card from './Components/Card'
import Navbar from './Navbar'
import './about.css'

function About(){
    return(
     <div id="about">
        <div id="nav">
        <h1>About Me</h1>
       <Navbar/>
        </div>
       <div id="me">
           <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolorem reiciendis maxime animi similique. Accusantium earum reiciendis quaerat aliquid cumque?
           </p>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugiat laudantium, officia repellat perferendis soluta itaque, ratione minima consectetur quidem, ut dolorem sunt eum vero perspiciatis sit? Ipsam maxime reiciendis nostrum quos voluptatum placeat omnis ipsa repudiandae. Reprehenderit, excepturi rerum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero atque cumque illo fugiat aliquid ad quaerat illum unde ipsam reprehenderit.</p>
       </div>

       <h2>Primary Focus</h2>
       <div id="focus">
         <Card src={"https://oktayshakirov.com/assets/images/icon-dev.svg"} title={"Web Design & Development"} content={"Creating attractive, easy-to-use websites that work well for businesses and individuals online."}/>
         <Card src={"https://oktayshakirov.com/assets/images/icon-frameworks.svg"} title={"Full-Stack Solutions"} content={"Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python."}/>
         <Card src={"https://oktayshakirov.com/assets/images/icon-app.svg"} title={"Mobile Apps & Games"} content={"Creating and developing engaging mobile apps and games for iOS and Android devices."}/>
         <Card src={"https://oktayshakirov.com/assets/images/icon-multimedia.svg"} title={"Digital Content Creation"} content={"Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content."}/>

       </div>
         <h2>Languages</h2>

       <div id="languages">
          <h3>
            Javascript <span>85%</span><progress id="file" value="85" max="100" >  </progress>
          </h3>
          <h3>
            CSS <span>100%</span> <progress id="file" value="100" max="100" > </progress>
          </h3>
          <h3>
            Java <span>75%</span> <progress id="file" value="75" max="100" >  </progress>
          </h3>
          <h3>
            Python <span>70%</span><progress id="file" value="70" max="100" >  </progress>
          </h3>

        </div>
     </div>
    )
 }
 
 export default About