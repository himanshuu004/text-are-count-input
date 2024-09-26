var txt = document.querySelector(".txt");
var num = 0;
var count = document.querySelector(".count");


txt.addEventListener("input",function(){
  count.textContent=txt.value.length; 
});



