const loadtext = document.querySelector(".loading-text");
const backgroundimage = document.querySelector(".bg");

let loadingPercentage = 0;
let interval = 30;

setInterval(()=>{
    loadingPercentage++;
    if(loadingPercentage>100){
        return;
    }
    loadtext.innerHTML = loadingPercentage + "%";
    loadtext.style.opacity = scale(loadingPercentage, 1,100,1,0);
    backgroundimage.style.filter = `blur(${scale(loadingPercentage,1,100,30,0)}px)` 
}, interval);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}