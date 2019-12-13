
//cookies
alert("This site uses cookies. By clicking OK you accept")

//slideshow
//code with coaching



// Getting image tag from the DOM


//Attributes can be manipulated on JS for the elements
var images = ["images/cartoon1.jpg",
              "images/cartoon2.jpg",
              "images/cartoon3.jpg"];

//Getting images from DOM
let imgElement = document.getElementById("imagetest");
let imgCounter = 0;

imgElement.src = images[imgCounter];

//Next & Prev buttons

function click(){
      if(imgCounter > images.length){
      imgCounter = 0;
      } else {
        imgCounter++;
      if (imgCounter < images.length){
          imgElement.src = images[imgCounter];
    }
  }
}
 

//Contact Page Comment

//Get the url for where the data will come from
//var comdata = document.getElementById("commentBox").innerHTML
//let userComments =[]

//function submit(){
  //    comdata.push(userComments)}


            
