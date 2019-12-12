
//cookies
alert("This site uses cookies. By clicking OK you accept")

//slideshow
//code with coaching
var images =["Images/cartoon1.jpg",
            "Images/cartoon2.jpg",
            "Images/cartoon3.jpg"]

// Getting image tag from the DOM
let imgElement = document.getElementById("imagetest");
let imgCounter = 0;

//Attributes can be manipulated on JS for the elements

imgElement.src = images[imgCounter];

function prev(){
      if(imgCounter > images.length){
      imgCounter = 0;
      } else {
        imgCounter++;
      if (imgCounter < images.length){
          imgElement.src = images[imgCounter];
    }
  }
}

function next(){
          if(imgCounter < images.length){
            imgCounter = 0;} 
            else {
          imgCounter++;
        if (imgCounter < images.length){
            imgElement.src = images[imgCounter];
          }
        }
      }
 

//Contact Page Comment

//Get the url for where the data will come from
//var comdata = document.getElementById("commentBox").innerHTML
//let userComments ={}

//function submit(){
//  comdata.push(userComments)
//}
//console.log(comdata);
//console.log(userComments)

            
