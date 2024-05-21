var loader=document.querySelector(".preloader")
window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.style.display="none";
    },1000)
    
})




const container = document.getElementById('container');
const text = document.getElementById('text');


const totaltime = 7500;
const breathTime = (totaltime / 5) * 2;
const holdTime = totaltime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime)
}

setInterval(breathAnimation, totaltime);