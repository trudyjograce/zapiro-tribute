//Slideshow Function

//Buttons

var wordElement = ["pizza","teddy","milk","cocoa"]
function clicked(){
    console.log("I got this")
}

//Applying functions to specific HTML elements

let wordP = document.getElementById("wordElement")
console.log(wordP)

let displayWords = wordP.innerHTML
console.log(displayWords)

//Indexing
function clicked(){
   wordP.innerHTML= wordElement[3] //"Keep trying" 
}

let wordCounter = 0
wordP.innerHTML = wordElement[wordCounter]

function clicked(){
    if (wordCounter>wordElement.length){
        wordcounter=0
    }
    {wordCounter++
    wordP.innerHTML = wordElement[wordCounter]}
}
console.log(wordCounter)

//Buttons for PICs

var pics =[""]