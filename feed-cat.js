// Define a starting variable with 0 value

let timesFed = 0; 

// Define variable for the cat food can image

let feedCat = document.querySelector('#cat-food-can')

// Define variable for the counter

let counter = document.querySelector('.fed-cat-counter')

// Define a variable for the image that displays when the cat is not fed

let unfedImage = document.querySelector('#hasnt-been-fed-cat')

// Define a variable for the image that displays when the cat is fed 1-3 times

let fedImage = document.querySelector('#has-been-fed-cat')

// Define a variable for the content that displays when the cat is fed 4 times

let fullCat = document.querySelector('#full-cat')

// Variable for the cat meow that plays when user clicks the can

const catMeow = new Audio("Meow-cat-sound-effect.mp3")

// Set up an event listener for clicks of cat food can image
// Add incremental counter
// Make the text on screen increment by one each time user clicks cat food can

feedCat.addEventListener('click', function() {
    timesFed +=1
    catMeow.play()
    if (timesFed >= 1) {
        counter.innerText = timesFed
        unfedImage.style.display = "none";
        fedImage.style.display = "block";
    }
    if (timesFed >= 4) {
        fullCat.style.display = "block";
        fedImage.style.display = "none";
        document.getElementById('cat-not-fed-content').style.display = "none";
    }
});



// // Define variable for the cat that hasn't been fed

// let needsFood = document.querySelector('#cat-not-fed-content')

// // Variable for the counter text

// let counterContent = document.querySelector("#cat-being-fed-content")

// // Variable for the content if cat has been fed 1 - 3 times

// let catFed = document.querySelector("#cat-was-fed")

// // Variable for content if cat has been fed 4 or more times.

// let fullCat = document.querySelector("#full-cat")