// function doSomethingLater() {
//     console.log("I am gonna happen later")
// }

// NUMBER ONE
// console.log("Hello I am synchronous!")

// NUMBER FOUR (after 5000 milliseconds)
// setTimeout(() => console.log("I am 5000"), 5000) // <---- asynchronous code

// setTimeout(() => console.log("I am the second 100"), 100) // <---- asynchronous code

// NUMBER TWO
// console.log("Hello I am ALSO synchronous!")

// NUMBER THREE
// console.log("Hello also synchronous")

// for (let i = 0; i < 60000; i++) {
//     console.log(i)
// }

// FETCH //

// WE WANT JSON
// Java Script Object Notation

const OPTIONS = {
    headers: {
        'Accept': 'application/json'
    }
}

fetch("https://icanhazdadjoke.com/", OPTIONS)
.then( response => response.json() )
.then( data => {
    console.log(data)
    const newPWithTheDadJoke = document.createElement("p")
    newPWithTheDadJoke.textContent = data.joke
    const dadJokesContainer = document.querySelector("#dad-jokes-container")
    dadJokesContainer.append(newPWithTheDadJoke)
})

// 1. Make an initial fetch request to the Dad Jokes API and add a new paragraph tag to the `dad-jokes-container` with the new joke.

//   - HINT: Be sure to look at the data you get back so you know how to get the joke inside the response...

