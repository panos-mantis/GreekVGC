document.getElementsByTagName("li")[0].addEventListener("mouseover",function(){
    document.getElementsByTagName("li")[0].style.backgroundColor= "red";
})
document.getElementsByTagName("li")[0].addEventListener("mouseout",function(){
    document.getElementsByTagName("li")[0].style.backgroundColor= "rgb(47, 141, 162)";
})


document.getElementsByTagName("li")[1].addEventListener("mouseover",function(){
    document.getElementsByTagName("li")[1].style.backgroundColor= "red";
})
document.getElementsByTagName("li")[1].addEventListener("mouseout",function(){
    document.getElementsByTagName("li")[1].style.backgroundColor= "rgb(47, 141, 162)";
})



document.getElementsByTagName("li")[2].addEventListener("mouseover",function(){
    document.getElementsByTagName("li")[2].style.backgroundColor= "red";
})
document.getElementsByTagName("li")[2].addEventListener("mouseout",function(){
    document.getElementsByTagName("li")[2].style.backgroundColor= "rgb(47, 141, 162)";
})



document.getElementsByTagName("li")[3].addEventListener("mouseover",function(){
    document.getElementsByTagName("li")[3].style.backgroundColor= "red";
})
document.getElementsByTagName("li")[3].addEventListener("mouseout",function(){
    document.getElementsByTagName("li")[3].style.backgroundColor= "rgb(47, 141, 162)";
})








let slideIndex = 0;
let slides = document.getElementsByClassName("carouselImage");
let circles = document.getElementsByClassName("circle")
showSlides();


function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    circles[i].style.backgroundColor="grey";
  }
  slides[slideIndex].style.display = "block";
  circles[slideIndex].style.backgroundColor="red";

  slideIndex++;
  if (slideIndex === slides.length) {slideIndex = 0}
  setTimeout(showSlides,5000); // Change image every 2 seconds
}


document.querySelector(".previous").addEventListener("click",function(){
    if(slideIndex === 0){
        slideIndex = 2
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            circles[i].style.backgroundColor="grey";
          }
        slides[slideIndex].style.display= "block" ;
        circles[slideIndex].style.backgroundColor="red";
    }else {
        slideIndex--
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            circles[i].style.backgroundColor="grey";
          }
        slides[slideIndex].style.display= "block" ;
        circles[slideIndex].style.backgroundColor="red";
    }
})


document.querySelector(".next").addEventListener("click",function(){
    if(slideIndex === 2){
        slideIndex = 0
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
        slides[slideIndex].style.display= "block" ;
    }else {
        slideIndex--
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
        slides[slideIndex].style.display= "block" ;
    }
})
