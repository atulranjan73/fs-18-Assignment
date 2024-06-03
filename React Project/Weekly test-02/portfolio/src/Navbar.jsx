import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
   return(
    <div id="navbar">
       <Link to ="/">About</Link>
       <Link to ="/certificates">Certificates</Link>
       <Link to ="/projects">Projects</Link>
       <Link to ="/more">More</Link>
       <Link to ="/contact">Contact</Link>
    </div>
   );
}
export default Navbar