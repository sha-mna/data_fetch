// create an example for promise

fetch("https://jsonplaceholder.typicode.com/posts")
.then((data) => data.json())
.then((object) => console.log(object))

// fetch("https://jsonplaceeeeeholder.typicode.com/posts")
// .then((data) => data.json())
// .then((object) => console.log(object))
// .catch((error) => {
//     console.log(error.message);
// })

