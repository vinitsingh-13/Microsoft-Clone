 let cross = document.getElementById("menu");
let menu = document.getElementById("menu");
let list  = document.getElementById("list");
let rightarr= document.getElementById("rightarr")
let leftarr = document.getElementById("leftarr");
let imge = document.querySelector(".content-img").children
let content = document.querySelector(".img-content").children
let counter =0;
let utube = document.getElementById("youtube");
let insta = document.getElementById("instagram");
let twitter = document.getElementById("twitter");
let github = document.getElementById("github");

menu.addEventListener('click', function(){
  list.classList.toggle("hidden");
  list.classList.contains("hidden")?cross.setAttribute("src","image/menu.svg"):cross.setAttribute("src","image/x.svg")
  
})
rightarr.addEventListener('click',function(){
   if(counter<1){
      imge[counter].classList.toggle("hidden");
      content[counter].classList.toggle("hidden")
   }
   
      counter++;
      imge[counter].classList.toggle("hidden");
      content[counter].classList.toggle("hidden")

      counter--;

      
});
leftarr.addEventListener('click',function(){
   if(counter<=1){
      imge[counter].classList.toggle("hidden")
      content[counter].classList.toggle("hidden")
   }
      counter++;
      imge[counter].classList.toggle("hidden")
      content[counter].classList.toggle("hidden")
      counter--

   })
utube.addEventListener('click', function(){
   window.location.href = "https://www.youtube.com/MICROSOFT"
})
twitter.addEventListener('click', function(){
   window.location.href ="https://twitter.com/Microsoft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
})
insta.addEventListener('click', function(){
   window.location.href = "https://www.instagram.com/microsoft/?hl=en"
})
github.addEventListener('click', function(){
   window.location.href = "https://github.com/Microsoft"
})