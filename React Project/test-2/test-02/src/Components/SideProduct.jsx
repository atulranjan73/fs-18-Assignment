import './sideProduct.css'

function SideProduct({src,title,content}){
 return(
  <div id="sideProduct">
    <img src={src}></img>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
 )
}
export default SideProduct;