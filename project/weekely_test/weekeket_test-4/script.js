const resultDiv = document.querySelector("#results");
const search = document.querySelector("#phoneName");
const searchClick = document.querySelector("#search");
const showAll = document.querySelector("#All");

const modalDiv = document.querySelector("modal");

let flag = false;

window.addEventListener("load",()=>{
    getData("iphone"); 
})

async function getData(text){
    if(text==''){
        text= "iphone";
    }
   const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`);
   const result =  await response.json();
   propogatePhone(result.data);
}

function showData(data){
    console.log(data);
    let phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone");
    
    let img = document.createElement("img");
    img.src=data.image;
    phoneDiv.append(img);

    let name = document.createElement("h4");
    name.innerHTML = data.phone_name;
    phoneDiv.append(name);

    let desc = document.createElement("p");
    desc.innerHTML = "There are many variations of passages of available, but the majority have suffered";
    phoneDiv.append(desc);


    let button = document.createElement("button");
    button.innerHTML="SHOW DETAILS";
    button.addEventListener("click",async()=>{
        console.log(data.slug);  
        showDetailsHandler(data.slug);
      })

    phoneDiv.append(button);

    resultDiv.append(phoneDiv);
}


function propogatePhone(data){
    if(data.length == 0){
        showAll.style.display="none"; 
        alert("No Data to show");
        return;
    }
    if(flag == false){
        showAll.style.display="block"; 
        data = data.slice(0,6);
        data.forEach(element => {
        showData(element);
    });
    }
    else{
        data = data.slice(0);
        data.forEach(element => {
            showData(element);
    });
}
}


searchClick.addEventListener("click",()=>{
    const phoneName = search.value;
    console.log(search.value);
    getData(phoneName);
    resultDiv.innerHTML='';
})

showAll.addEventListener("click",(e)=>{
    showAll.style.display = "none";
    flag = true;
    const phoneName = search.value;
    console.log(search.value);
    getData(phoneName);
    resultDiv.innerHTML='';
}) 


const detail = document.querySelector("#butt");
console.log(detail);




const showDetailsHandler = async (id)=>{
    //console.log(id);
    // load data
    const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await res.json();
    
    const phone=data.data;
    showPhoneDetails(phone);
    //console.log(phone);
}

const showPhoneDetails=(details)=>{
    my_modal.showModal();
    const modelName= document.getElementById('detailsPhoneName');
    const brandName= document.getElementById('detailsBrand');
    const detailsSpec= document.getElementById('detailsSpec');
    const releaseDate= document.getElementById('releaseDate');
    const imageDiv= document.getElementById('imgContainer');

    imageDiv.innerHTML=`<img src="${details.image}" alt="">`;
    modelName.innerText=details.name;
    brandName.innerText=`Brand: ${details.brand}`;
    const features=details.mainFeatures;
    console.log(details.image);
    let string="";
    for (const key in features) {
        string=string+`${key}: ${features[key]} \n`;

    }
    detailsSpec.innerText=string;
    releaseDate.innerText=`${details.releaseDate}`;
    
}