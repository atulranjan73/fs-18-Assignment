const togglebtn = document.querySelector("#checkbox");

togglebtn.addEventListener('click' , ()=>{
   if(togglebtn.checked){
    document.body.style.backgroundColor="black";
    document.getElementById("toggle").style.backgroundColor="grey";
   }
   else{
    document.body.style.backgroundColor="white";
    document.getElementById("toggle").style.backgroundColor="black";


   }
 
})