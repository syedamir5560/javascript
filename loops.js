/*
JavaScript Loops

The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops. It makes the code compact. It is mostly used in array.

There are four types of loops in JavaScript.

    for loop
    while loop
    do-while loop
    for-in loop


    1) JavaScript For loop

    The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The syntax of for loop is given below.

        for (initialization; condition; increment)  
        {  
            code to be executed  
        }  
        */

        for (var i = 0; i <= 10; i++) {
          document.write(i + "<br>");
        }


/*   JavaScript while loop

The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known. The syntax of while loop is given below.

    while (condition)  
    {  
        code to be executed  
    }      */

      var i = 1;
      while (i <= 15) {
        document.write(i + "<br>");
        i++;
      }

/* JavaScript do while loop

 The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. The syntax of do while loop is given below.

     do{  
         code to be executed  
     }
  while (condition);  */

      var i = 50;
      do {
        document.write(i + "<br>");
        i++;
      }
      while (i <= 52)

/* forEach loop 

its apply on array whenever you have array you can use foreach loop
for each loop by default not change your array but its change on copy of array so original array is same 

 */

let arr=[1,2,3,4,5,6,7,8,9,10];

arr.forEach((value)=>{
  if(value % 2 == 0){
    console.log(value)
  }
})


// Exmaples of for each loop

const staffsDetails = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

//using curreny element argument

//   staffsDetails.forEach((staffsDetails)=>{
//     let sentence=`name of stafe ${staffsDetails.name}`;
//     console.log(sentence);
//   })

// using  index Argument

// staffsDetails.forEach((staffsDetails , index)=>{
//     let sentence=`name is ${staffsDetails.name} and index is ${index}`;
//     console.log(sentence);
// })
 
//using array argument
// The array argument is the third argument which holds the original array 

// let scores = [12, 55, 70];

// scores.forEach((score, index, array) => {
//   console.log(array);
// });


