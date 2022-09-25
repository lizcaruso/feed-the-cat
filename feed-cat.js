console.log('hello world')

// Define a starting variable with 0 value

let timesFed = 0; 

// Define variable for the cat food can image

let feedCat = document.querySelector('#cat-food-can')

// Define variable for the cat that hasn't been fed

let needsFood = document.querySelector('#hasnt-been-fed-cat')

// Define variable for the cat that has been fed

let fedCat = document.querySelector('#fed-cat')

// Set up an event listener for clicks of cat food can image

feedCat.addEventListener('click', function() {
    timesFed +=1
    console.log(timesFed)
    if (timesFed >= 1) {
        fedCat.style.opacity=1
        needsFood.style.opacity=-1
    }
    else {
        fedCat.style.opacity=-1
        needsFood.style.opacity=1
    }
});