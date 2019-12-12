
//cookies
alert("This site uses cookies. By clicking OK you accept")

//slideshow
//THIS IS NOT MY CODE :(

var slideIndex = 1;
showSlides(slideIndex);

Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);}

Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
 dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;}
 

//Contact Page Comment

//Get the url for where the data will come from
var comdata = document.getElementById("commentBox").innerHTML
let userComments ={}

function submit(){
  comdata.push(userComments)
}
console.log(comdata);
console.log(userComments)

            
