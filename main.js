 
 

 
new TypeIt("#hero-text", {
    strings: "Hello I'm Ufuk, Web Developer from Turkey!"
  }).go();



  const nodeToGet = document.querySelector("#about-me")
  const btnDown = document.querySelector(".scrollDownBtn")
  const backtoTop = document.querySelector(".backtoTop");
  btnDown.addEventListener("click", function(){
    Jump(nodeToGet);
  })

  backtoTop.addEventListener("click", function(){
    Jump(document.querySelector("#header"));
  })



  
 
let açık= false
document.querySelector(".hamburger").addEventListener("click",() => {
if(!açık){
  document.querySelector(".nav-open").style.display="flex";
  document.querySelector(".nav-open").style.right=0;
  document.querySelector("body").style.overflow="hidden";
  document.querySelector(".backtoTop").style.display="none";
  açık=true;
  return;
}else{
  document.querySelector(".nav-open").style.display="none";
   
  document.querySelector("body").style.overflowY="visible";
  document.querySelector("body").style.overflowX="hidden";
  document.querySelector(".backtoTop").style.display="block";
  açık=false;
  return;
}

 
 
})
 
 

 

 


 