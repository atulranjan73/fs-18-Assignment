import Navbar from "./Navbar"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import './certificate.css'

function Certificate(){
    return(
     <div id="certificates">
     <div id="nav">
        <h1>My Certificates</h1>
       <Navbar/>
        </div>

        <div id="main">
           <div class="certi">
            <DoubleArrowIcon class="arrow"/><img src="https://i0.wp.com/www.fcsuper.com/swblog/wp-content/uploads/2023/08/2023-08-09_21-39-28.png?fit=775%2C597">
            </img>
            </div>

            <div class="certi">
            <DoubleArrowIcon class="arrow"/><img src="https://i0.wp.com/www.fcsuper.com/swblog/wp-content/uploads/2023/08/2023-08-09_21-39-28.png?fit=775%2C597">
            </img>
            </div>

            <div class="certi">
            <DoubleArrowIcon class="arrow"/><img src="https://i0.wp.com/www.fcsuper.com/swblog/wp-content/uploads/2023/08/2023-08-09_21-39-28.png?fit=775%2C597">
            </img>
            </div>
            
            <div class="certi">
            <DoubleArrowIcon class="arrow"/><img src="https://i0.wp.com/www.fcsuper.com/swblog/wp-content/uploads/2023/08/2023-08-09_21-39-28.png?fit=775%2C597">
            </img>
            </div>    
        </div>
     </div>
    )
 }
 
 export default Certificate