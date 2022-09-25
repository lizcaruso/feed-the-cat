console.log('hello world')

// Define a starting variable with 0 value

let timesFed = 0; 

// Define variable for the cat food can image

let feedCat = document.querySelector('#cat-food-can')

// Set up an event listener for clicks of cat food can image

feedCat.addEventListener('click', function() {
    timesFed +=1
    console.log(timesFed)
});