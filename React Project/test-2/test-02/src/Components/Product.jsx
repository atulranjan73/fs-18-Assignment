import './product.css'
function Product({src,topic,language}){
  return(
     <div id="product">
       <img src={src}></img>
       <h3>{topic}</h3>
       <h4>FRONTEND</h4>
       <p>{language}</p>
    </div>
  );
}
export default Product;