/*

What is Api in javascript===>>

    An API is simply a medium to fetch or send data between interfaces. Let’s say you want to make an application that provides the user with some real-time data fetched from the server or maybe even allows you to modify or add data to some other endpoint. This is made possible by the API or the Application Programming Interface.

We will use a simple public API that requires no authentication and allows you to fetch some data by querying the API with GET requests.

All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data

for example=>fetch api , forms api , strorage api

Fetch apis=>
    The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

If you have worked with XMLHttpRequest (XHR) object, the Fetch API can perform all the tasks as the XHR object does.

In addition, the Fetch API is much simpler and cleaner. It uses the Promise to deliver more flexible features to make requests to servers from the web browsers.

Sending a Request=>

The fetch() requires only one parameter which is the URL of the resource that you want to fetch:

let response = fetch(url);

The fetch() method returns a Promise so you can use the then() and catch() methods to handle it:

fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });

    erxample=>(By using promise )
        function fun(){
    
const fetchPromise = fetch("https://fakestoreapi.com/users");
fetchPromise.then(response => {
    return response.json()
}).then((x) => {
    console.log(x)
    x.forEach((element, index) => {
        let newb = `<div class='card'>
                     <h2>Name : ${element.name.firstname}</h2>
                     <h3>Phone : ${element.phone}</h3>
                     <h4>Password : ${element.password}</h4>
                     <address>Email : ${element.email}</address>
                      </div>`

        cont.insertAdjacentHTML('beforeend', newb)
    
    });

})
}

example=>(By using Async / Await)

async function fun() {
    let p = await fetch('https://fakestoreapi.com/users')
    let x = await p.json()

    x.forEach((element, index) => {
        let newb = `<div class='card'>
                    <h2>Name : ${element.name.firstname}</h2>
                    <h3>Phone : ${element.phone}</h3>
                    <h4>Password : ${element.password}</h4>
                    <address>Email : ${element.email}</address>
                    <address>Email : ${element.email}</address>
                     </div>`

        cont.insertAdjacentHTML('beforeend', newb)

    })
}



















*/