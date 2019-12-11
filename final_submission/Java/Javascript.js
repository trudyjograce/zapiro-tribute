
//cookies
alert("This site uses cookies. By clicking OK you accept")

//slideshow

var img = 0; var path = ["cartoon1.jpeg","cartoon2.jpeg","cartoon3.jpeg"]; 

// LIST OF IMAGES 
path[0] = "cartoon1.jpeg"; 
path[1] = "cartoon2.jpeg"; 
path[2] = "cartoon3.jpeg"; 

function next(){
document.getElementsByClassName()




document.slide.src = path[img]; 

if(img < path.length - 1) img++; 
else img = 0; 
setTimeout("swapImage()",3000); 
} 
window.onload=swapImage; 









//Contact Page Comment

//ref: <body>  
//   <div class="info">
// <label for="example">Enter Text
//    </label>
//    <input id="example" type="text"
//           name="Ntext" size="20">
//    <input id="sent" type="submit"  
//           value="Send"> 
//</div>
//  <p id="para">      
//  </p>

    window.onclick = function(e){
                var id =  e.target.id;   
                if (id === 'sent'){
                var txt = document.getElementById('commentBox').value    
                 $( "#para" ).empty().append( txt );
                }
             }

            
