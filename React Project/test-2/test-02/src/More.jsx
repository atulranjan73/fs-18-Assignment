import SideProduct from "./Components/SideProduct";
import Navbar from "./Navbar";
import "./more.css";
function More() {
  return (
    <div id="more">
      <div id="nav">
        <h1>Side Projects</h1>
        <Navbar />
      </div>
      <div id="sideProducts">
        <SideProduct
          src={
            "https://miro.medium.com/v2/resize:fit:1400/1*3Rv4KFuTU5IJxCvhY_-tsA.png"
          }
          title={"Tic-Tac-Toe"}
          content={
            "Tic Tac Toe is traditionally played on a 3 × 3 grid. Players take turns placing a mark in one of the cells of the grid. The goal of the game is for players to position their marks so that they make a continuous line of three cells vertically, horizontally, or diagonally."
          }
        />
        <SideProduct
          src={
            "https://shots.codepen.io/username/pen/yEWaOY-1280.jpg?version=1533405632"
          }
          title={"Movie Card"}
          content={
            "When we built the Movie card component the intention was to use it to display an individual movie node. The movie content type has the same data structure as the movie card and now we are going to integrate the two so each movie node is rendered as a card in the movie listing page."
          }
        />
      </div>
    </div>
  );
}

export default More;
