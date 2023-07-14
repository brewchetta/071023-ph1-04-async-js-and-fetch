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

// 1. Make an initial fetch request to the Dad Jokes API and add a new paragraph tag to the `dad-jokes-container` with the new joke.

//   - HINT: Be sure to look at the data you get back so you know how to get the joke inside the response...
const dadJokesContainer = document.querySelector("#dad-jokes-container")

const OPTIONS = {
    headers: {
        'Accept': 'application/json'
    }
}

fetch("https://icanhazdadjoke.com/", OPTIONS)
.then( response => response.json() )
.then( data => {
    // console.log(data)
    const newPWithTheDadJoke = document.createElement("p")
    newPWithTheDadJoke.textContent = data.joke
    dadJokesContainer.append(newPWithTheDadJoke)
})

// 3. Start up json-server with `json-sever --watch db.json`. If you aren't able then attempt to install the json-server (installation depends on your OS). You can now fetch jokes from `http://localhost:3000/jokes`. Fetch the array of jokes, iterate through the array, and create a new paragraph tag for each joke just like above.

//   - HINT: Once again make sure you look at the data you get back, it WILL be different from the dad jokes API

function addJoke(jokeObject) {
    const newPTagThatHasTheJoke = document.createElement('p')
    newPTagThatHasTheJoke.textContent = jokeObject.content
    dadJokesContainer.append(newPTagThatHasTheJoke)
}

fetch('http://localhost:3000/jokes')
.then( response => response.json() )
.then( jokesArray => {
    console.log(jokesArray) 
    jokesArray.forEach(addJoke)
})