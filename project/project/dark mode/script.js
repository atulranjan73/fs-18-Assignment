const togglebtn = document.querySelector("#checkbox");
const heading =document.querySelector(".heading");

togglebtn.addEventListener('click' , ()=>{
   if(togglebtn.checked){
    document.body.style.backgroundColor="black";
    document.getElementById("toggle").style.backgroundColor="grey";
    heading.style.color = " white"
   }
   else{
    document.body.style.backgroundColor="white";
    document.getElementById("toggle").style.backgroundColor="black";
    heading.style.color = "black"


   }
 
})