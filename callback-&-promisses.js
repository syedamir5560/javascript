
/*
callback =>
    In JavaScript, functions are first-class citizens. Therefore, you can pass a function to another function as an argument.

By definition, a callback is a function that you pass into another function as an argument for executing later.



Ex=>
function fun(a, b, callback) {
    console.log(a + b);
    callback();
}
//callback function

function callme() {
    console.log("addtion sucsesss and i am call back");
}

fun(3, 4, callme);

The following example will help us better understand this concept.

function notifyAll(fnSms, fnEmail) {
    console.log('starting notification process');
    fnSms();
    fnEmail();
}
notifyAll(function () {
    console.log("Sms send ..");
}, function () {
    console.log("email send ..");
});
console.log("End of script"); //executes last or blocked by other methods 

In the code mentioned above, the function calls are synchronous.It means the UI thread would be waiting to complete the entire notification process.Synchronous calls become blocking calls.
A synchronous callback is executed during the execution of the high-order function that uses the callback.


To execute an asynchronous or a non - blocking call We shall use the setTimeout() method of JavaScript.This method is async by default.

An asynchronous callback is executed after the execution of the high-order function that uses the callback.

Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.



function notifyAll(fnSms, fnEmail) {
    setTimeout(function () {
        console.log('starting notification process');
        fnSms();
        fnEmail();
    }, 2000);
}
notifyAll(function () {
    console.log("Sms send ..");
},
    function () {
        console.log("email send ..");
    });
console.log("End of script");

PROMISSES =>
    Promise is an Object represent eventual compeletion or falure of an asynchronous operation 
    Promises are used to handle asynchronous operations in a more structured and reliable way than traditional callbacks.
            JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.Multiple callback functions would create callback hell that leads to unmanageable code.Promises are used to handle asynchronous operations in JavaScript.

Syntax:=>

let promise = new Promise(function (resolve, reject) {
    //do something
});

parameter =>
    promises constructor takes only argument which is call back function
    callback function takes tow argument resove, reject

1) resolve =>
    Perform operations inside the callback function and if everything went well then call resolve.

2) reject =>
    If desired operations do not go well then call reject.

promise has four state =>

1) fulfilled:=> Action related to the promise succeeded
2) rejected:=> Action related to the promise failed
3) pending:=> Promise is still pending i.e.not fulfilled or rejected yet
4) settled:=> Promise has been fulfilled or rejected

Promises can be consumed by registering functions using.then and.catch methods.

1. Promise then() Method:=> It is invoked when a promise is either resolved or rejected.It may also be defined as a carrier that takes data from promise and further executes it successfully.

2. Promise catch () Method:=> It is invoked when a promise is either rejected or some error has occurred in execution.It is used as an Error Handler whenever at any step there is a chance of getting an error.

    Parameters: It takes one function as a parameter.

example=>
const promise = new Promise((resolve, reject) => {
    let value = true
    if (value) {
        resolve('hey value is true')
    } else {
        reject('there was an error, value is false')
    }
})

promise
    .then((x) => {
        console.log(x)
    })
    .catch((err) => console.log(err))
  
Asynchronous example =>
                var user = false;
    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user) {
                    resolve([
                        { name: "aamir", pass: "amir@123" },
                        { name2: "ali", pass2: "ali" }
                    ]);
                }
                else {
                    reject("user is rejected")
                }
            }, 2000);
        });
    }
    let prom = getUsers();
    prom.then((data) => {
        console.log(data);

    }).catch((data) => {
        console.log(data);
    })

promiesse method =>
        Let’s say we want many promises to execute in parallel and wait until all of them are ready.
            For instance, download several URLs in parallel and process the content once they are all done.The Promise.all() static method takes an iterable of promises:
    That’s what Promise.all is for.

The syntax is:

        let promise = Promise.all(iterable);

The Promise.all() method returns a single promise that resolves when all the input promises have been resolved.

        Example1=> (Resolve)
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("first promis resolve");
            resolve(10);
        }, 1 * 1000);
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("seceond promise resolve");
            resolve(20);
        });
    });

    Promise.all([p1, p2]).then((result) => {
        const add = result.reduce((p, c) => {
            return p + c;
        });
        console.log("result is" + result);
        console.log(add);
    })


    Example2(rejected)=>
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The first promise has resolved');
            resolve(10);
        }, 1 * 1000);

    });
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The second promise has rejected');
            reject('Failed');
        }, 2 * 1000);
    });
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The third promise has resolved');
            resolve(30);
        }, 3 * 1000);
    });

    Promise.all([p1, p2, p3]).then((result) => {
        console.log(result);
    }).catch((Error) => {
        console.error(Error);
    })


    promise.race()=>
    Similar to Promise.all, but waits only for the first settled promise and gets its result(or error).

The syntax is:

    let promise = Promise.race(iterable);

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('The first promise has resolved');
            resolve(10);
        }, 1000);

    });
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('The second promise has rejected');
            reject('Failed');
        }, 1000);
    });
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('The third promise has resolved');
            resolve(30);
        }, 1000);
    });

    Promise.race([p1, p2, p3]).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

promise.any()=>
The Promise.any() method accepts a list of Promise objects as an iterable object:

Promise.any(iterable);
Code language: JavaScript (javascript)

If one of the promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise:

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 rejected');
      reject('error');
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 fulfilled');
      resolve(2);
    }, 2000);
  });
  
  const p = Promise.any([p1, p2]);
  p.then((value) => {
    console.log('Returned Promise');
    console.log(value);
  });

Introduction to the Promise.allSettled() method=>

ES2020 introduced the Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.

The following shows the syntax of the Promise.allSettled() method:

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});

Promise.allSettled([p1, p2])
    .then((result) => {
        console.log(result);
    });

Async and Await keyword=>

ES2017 introduced the async/await keywords that build on top of promises, allowing you to write asynchronous code that looks more like synchronous code and is more readable. Technically speaking, the async / await is syntactic sugar for promises.

If a function returns a Promise, you can place the await keyword in front of the function call, like this:

let result = await f();
Code language: JavaScript (javascript)

The await will wait for the Promise returned from the f() to settle. The await keyword can be used only inside the async functions.

Example=>   function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

async function showServiceCost() {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}

showServiceCost();

The async keyword=>

The async keyword allows you to define a function that handles asynchronous operations.

To define an async function, you place the async keyword in front of the function keyword as follows:

async function sayHi() {
    return 'Hi';
}

Asynchronous functions execute asynchronously via the event loop. It always returns a Promise. 

The await keyword=>

You use the await keyword to wait for a Promise to settle either in resolved or rejected state. And you can use the await keyword only inside an async function:

async function display() {
    let result = await sayHi();
    console.log(result);
}   

*********************Graviton web********************

//----------------- Intro--------------------

      // let a = new Promise((resolve,reject)=>{
      //     console.log('Pending');
      //     setTimeout(() => {
      //         console.log('Promise Filfilled');
      //         resolve('Success');
      //         // console.log('Promise Rejected');
      //         // reject('Data not found')
      //     }, 3000);
      // })
      // console.log(a);

      // a.then((para)=>{alert(para)})
      // a.catch((err)=>{alert(err)})

      //--------------------------

      //   let a = new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       console.log("Resolved");
      //       resolve(50);
      //     }, 2000);
      //   });
      //   a.then((value) => {
      //     console.log(value);
      //     let a2 = new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         console.log("a2 Resolved");
      //         resolve("Promise 2 " + value * 2);
      //       }, 2000);
      //     }).then((val) => {
      //         console.log(val);
      //       let a3 = new Promise((resolve, reject) => {
      //         setTimeout(() => {
      //             console.log("a3 Resolved");
      //         resolve(Promise 3   ${val});
      //         //   console.log("a3 says error");
      //         //   reject("a3 promise rejected");
      //         }, 2000);
      //       }).then(val2=>console.log(val2))
      //       .catch((err)=>{console.log(err);})

      //     });
      //   });

      //-------////multiple handler

      // let a = new Promise((resolve,reject)=>{
      //     setTimeout(() => {
      //         resolve('Promise 1 resolved')
      //     }, 2000);
      // })
      // console.log(a);

      // a.then((val)=>{
      //     console.log(val);
      //     return new Promise((resolve,reject)=>{
      //         setTimeout(() => {
      //             resolve(val+' by Promise 2')
      //         }, 2000);
      //     })
      // }).then(data=>console.log(data))

      // a.then((val)=>{
      //     console.log(val+' Returns second time');
      // })

      // let a = new Promise((resolve,reject)=>{
      //     setTimeout(() => {
      //         // resolve('Promise 1')
      //         reject('a not found')
      //     }, 1000);
      // })

      // let b = new Promise((resolve,reject)=>{
      //     setTimeout(() => {
      //         resolve('Promise 2')
      //         // reject('b not Found')
      //     }, 2000);
      // })

      // let c = new Promise((resolve,reject)=>{
      //     setTimeout(() => {
      //         resolve('Promise 3')
      //     }, 3000);
      // })

      // // let pall = Promise.all([a,b,c])
      // // let pallsettle = Promise.allSettled([a,b,c])
      // // let prace = Promise.race([a,b,c])
      // let pany = Promise.any([a,b,c])

      // pany.then(data=>{
      //     console.log(data);
      // })

      //--------------------

      // let a = new Promise((resolve,reject)=>{
      //     let num = 53
      //     if(num%2 === 0){
      //         resolve('EVEN Resolved')
      //     }else{
      //         reject('Odd Resolved')
      //     }
      // }
      // )
      // console.log(a);    
      // a
      // .then(data=>console.log(data))
      // .catch(err=>console.log(err))
      // .finally(()=>console.log('Response Fetched'))

      //---------------------------

      function one() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let a = "cycle";
            console.log("Func One says " + a);
            resolve(a);
          }, 2000);
        });
      }

      function two(para) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let b = para + " Bike";
            console.log("Func Two says " + b);
            resolve(b);
          }, 2000);
        });
      }

      function three(para1) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let c = para1 + " Car";
            console.log("Func Three says " + c);
            resolve(c);
          }, 2000);
        });
      }

      one()
        .then((x) => {
          // console.log(x);
          return two(x);
        })
        .then((y) => {
          return three(y);
        })
        .then((z) => {
          console.log(z);
        });


*/















