console.log('hello world')

// Define a starting variable with 0 value

let timesFed = 0; 

// Define variable for the cat food can image

let feedCat = document.querySelector('#cat-food-can')

// Define variable for the counter

let counter = document.querySelector('.fed-cat-counter')

// Define variable for the cat that hasn't been fed

let needsFood = document.querySelector('#cat-not-fed-content')

// Variable for the counter text

let counterContent = document.querySelector("#cat-being-fed-content")

// Set up an event listener for clicks of cat food can image
// Add incremental counter
// Make the text on screen increment by one each time user clicks cat food can

feedCat.addEventListener('click', function() {
    timesFed +=1
    if (timesFed >= 1) {
        counter.innerText = timesFed
    }
});