import './card.css'
function Card({src,title,content}){
 return(
  <div id="card">
      <img src={src}></img>
      <div id="data">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
  </div>
 );
}
export default Card;