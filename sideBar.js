//  slide show function   
var slideIndex =0;
let dot = document.querySelectorAll(".dot");
let slides = document.querySelectorAll(".mySlides");
showSlides(slideIndex);

function showSlides(n){
    var i;
    

    if(n >=slides.length){
        slideIndex = 0;
    }
    if(n < 0){
        slideIndex = slides.length-1;
    }
    for( i=0 ; i<slides.length ; i++){
        slides[i].style.display = "none";
        dot[i].classList.remove("active");
    }
    slides[slideIndex].style.display = "block";
    dot[slideIndex].classList.add("active");
}
document.querySelector(".arrow-prev").addEventListener("click",()=>{
    showSlides(slideIndex -=1);
});
document.querySelector(".arrow-next").addEventListener("click",()=>{
    showSlides(slideIndex+=1);
});
function currentSlide(n){
    showSlides(slideIndex =n);
}




document.getElementById("button").addEventListener('click',changeBoard);

        function changeBoard(e){
        e.preventDefault();
        let boardGame = document.querySelector('.board-b72b1');


        // let num = document.getElementById("number");
        // let boardColor = document.getElementById("board-color");
         let border = document.getElementById("border-color");
         let border_Color = border.options[border.selectedIndex].value;
        // let dotColor = document.getElementById("dot-color");
            
       
        let image = slides[slideIndex].children[1];
        console.log(image.getAttribute("src"));
        document.body.style.background = "url("+image.getAttribute("src")+")";
        document.body.style.backgroundBlendMode ="multiply";
        document.body.style.backgroundColor = "rgb(189, 179, 179)";
        document.body.style.backgroundAttachment = "fixed"; 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        boardGame.style.border = `4px solid ${border_Color}`;
        }


let setting = document.querySelector(".setting");
let sideBar = document.getElementById("sidebar");

document.getElementById("menu-btn").addEventListener("click", ()=>{
  
   sideBar.style.transform = "translateX(1000px)";
   setting.style.display = "block";
});

document.querySelector(".setting").addEventListener("click",()=>{
    
    
    setting.style.display = "none";
    sideBar.style.transform = "translateX(0px)";
})
function newGame() {
    window.location = "index.html";
}




let icon = document.getElementById("setting");
function Animation(){
   icon.classList.add("fa-spin");
   icon.style.color = "#fcc603";
   icon.style.fontSize = "100px";
}
function RemoveAnimation(){
    icon.classList.remove("fa-spin");
    icon.style.color = "white";
    icon.style.fontSize = "50px";
}