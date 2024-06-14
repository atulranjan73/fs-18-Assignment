import Product from "./Components/Product"
import Navbar from "./Navbar"
import './project.css'
function Project(){
    return(
     <div id="project">
      <div id="nav">
        <h1>My Projects</h1>
       <Navbar/>
     </div>
       <div id="products">
       <Product src={"https://img.lemde.fr/2022/12/22/5/0/1730/865/1440/720/60/0/e968e4d_1671703423578-b5e.jpeg"} topic={"Pokedex"} language={"HTML,CSS,JS"}/>
       <Product src={"https://media.geeksforgeeks.org/wp-content/uploads/20200608054448/final468.png"} topic={"Age Calculator"} language={"HTML,CSS,JS"}/>
        <Product src={"https://blog.zegocloud.com/wp-content/uploads/2024/02/temperature-converter-frontent-project.png"} topic={"Temperature converter"} language={"HTML,CSS,JS"}/>
        <Product src={"https://blog.zegocloud.com/wp-content/uploads/2024/02/calculator-frontend-project-ideas-1024x768.jpg"} topic={"Calculator"} language={"HTML,CSS,JS"}/>
        <Product src={"https://blog.zegocloud.com/wp-content/uploads/2024/02/landing-page-frontend-project-1024x576.jpg"} topic={"Landing Page"} language={"HTML,CSS"}/>
        <Product src={"https://blog.zegocloud.com/wp-content/uploads/2024/02/to-do-app-frontend-project.png"} topic={"To Do List"} language={"HTML,CSS,JS"}/>
        <Product src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/640px-Barbieri_-_ViaSophia25668.jpg"} topic={"Resturant Website"} language={"HTML,CSS,JS"}/>
        <Product src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy28Ab2KdNzhjIMeRGTqSokNuhD5zkBv795LFllk5lPrxuS1ffzcpAHdwQjfN65Kogc2c&usqp=CAU"} topic={"Family Wellness"} language={"HTML,CSS,JS"}/>
        <Product src={"https://www.joydeepdeb.com/images/password-generator.jpg"} topic={"Password Generator"} language={"HTML,CSS,JS"}/>
       </div>
     </div>
    )
 }
 
 export default Project