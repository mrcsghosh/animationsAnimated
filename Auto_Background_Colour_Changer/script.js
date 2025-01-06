console.log("Mr CS Ghosh");

function chnageBgColor() {
  let hexCode = "0123456789ABCDEF";
  //console.log(hexCode(( + 1)));
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  //console.log(color);
 return color;
}
let bgChnaged;
//chnageBgColor();
const start = function(){
   if (!bgChnaged) {
    bgChnaged = setInterval(changged, 1000);

   }
    function changged(){
      //  const body = document.querySelector("body");
       document.body.style.backgroundColor = chnageBgColor();
    };
};
function stop(){
     clearInterval(bgChnaged);
     bgChnaged = null;
};
document.querySelector("#start").addEventListener("click", start);
document.querySelector("#stop").addEventListener("click", stop);