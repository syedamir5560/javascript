/****************************************ARRAY**************************************************
 
  A rray in javascript is a datastructure that store an orderd list of values Each value is called an element specified by an index: . it can hold element of any data types  including Number,string and obj even other arrays 

A JavaScript array has the following characteristics:=>

First, an array can hold values of mixed types.For example, you can have an array that stores elements with the types number, string, boolean, and null.

Second, the size of an array is dynamic and auto - growing.In other words, you don’t need to specify the array size up front.


                  let Arr1=['history','hindi','marathi','physics'];
                  console.log(Arr1[2]);

                  to access whole array
                  console.log(Arr1);

                  OPERATIO ON ARRAY
                  add element on last of array
                  Arr1.push("push");

                  add element on first of array
                  Arr1.unshift("unshift");

                  remove element from last of array
                  Arr1.pop();

                  remove element from beginning
                  Arr1.shift();

                  remove from specific position
                  Arr1.splice(2,1); (index position , number of element you want to elemenate)

                  find position of specific element
                  let pos=Arr1.indexOf("hindi");

                  split array from specific position
                  let sp=Arr1.split('i');

                  join something in between of allay element
                  let joint=Arr1.join('-');

                  join two array=>

                  let arr2=[1,2,3,4,5];
                  let arr3=['java','cpp','physics'];
                  let con=arr2.concat(arr3);
                  console.log(con);

                  multi dimentional array=>

                    let multi=[
                      ['eng','hindi','marathi'],
                      ['phisics','chemestri','math'],
                      ['bio', 'zulo']
                  ];

                  let acc=multi[1][0];
                  console.log(acc);

                  access array by for loop=>

                  let forl=[
                      ['eng','hindi','marathi'],
                      ['phisics','chemestri','math'],
                      ['bio', 'zulo']
                  ];

                  for(let i=0 ; i<forl.length ; i++){
                      console.log(`elemet ${i} is ${forl[i]} \n `);
                  }

                  forl.forEach(function myFunction(element) {  
                    console.log(element);  
                  });  
                  */

/********************************** ARRAY METHODS ***************************************
 
Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function.

Map=>
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

Syntex=>
          var new_array = arr.map(function callback(element, index, array) {
            // Return value for new_array
        }[, thisArg])

        function(currentValue, index, arr): It is a required parameter and it runs on each element of the array. It contains three parameters which are listed below:

        1)currentValue:=> It is a required parameter and it holds the value of the current element.
        2)index:=> It is an optional parameter and it holds the index of the current element.
        3)arr:=> It is an optional parameter and it holds the array.

Example=>
                    let Arr=[1,2,3,4,5,6,7,8,9];
                    let arr= Arr.map(function(x,index){
                        return {key:index,value:x*x};
                      })

                      console.log(arr);

filter=>
        The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. 

Syntex=>
                        let comp=[20,30,40,50,60,2,8,4,1,3,5];

                        let even=comp.filter(function(item){
                        if(!(item % 2 ==0) ){
                          return item;
                          }
                          });
                          console.log(even);

reduce=>
        The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
       
      Syntax:=>
                      arr.reduce(callback[, initialValue])

                          const numbers = [1, 2, 3, 4];
                          const sum = numbers.reduce(function (result, item) {
                            return result + item;
                          }, 0);
                          console.log(sum); // 10

                          */

 //Graviton ****************
 
 //Arrays

// let a  = 'Jam'
// let b = 66
// let c = true

// let e = new Array('Jam',66,true)
// console.log(e);

// let d = ['Jam', 66 , true]
// console.log(d);
// console.log(d.length);

// // console.log( d[0] );
// // console.log( d[1] );
// // console.log( d[2] );

// for(let i = 0; i < d.length; i++){
//     console.log( ${d[i]} has index value = ${i} );
// }

//--------------------------------------------------

// console.log(arr.length);
//  console.log('*****************************');
//  let b = arr.toString() 
//  console.log(b);
//  console.log( typeof b );
//  console.log('*****************************');

// // // to check an array
// console.log( Array.isArray(arr) );
// console.log( arr instanceof Array );

// LOOPS in arrays

//for loop
// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log('Length of a ',a.length);

// //
// for (let i = 0; i < a.length; i++) {
//     console.log( a[i] );
// }

// console.log('*****************************');

// //for of
// for(const result  of a) {
//     console.log(result);
// }

// console.log('*****************************');

// //for in 
// for(const result  in a) {
//     console.log(result);
// }

// console.log('*****************************');
// //foreach = looping arrays , it never return , if so it shows undefined
// // x= element    y = index of element   z = origin OF each element
// let b =  a.forEach( (x,y,z)=>{
// // console.log(x);
// // console.log(y);
// // console.log(z);
// // return x 
// } )
// console.log(b);

// ex 

// function one(para){
// console.log(para); 
// let a = para.split(' ')
// console.log(a);
// let b = []
// for(let result of a){
// console.log( result  );
//  b.push(result[0].toUpperCase() + result.slice(1)) 
// }
// console.log(b);
// return b.join(' ')
// }
// console.log( one( 'sky is heaven' ) );


// console.log('********************************');
// // spread operator = ... (on RHS)

// let g = ['PEn',...a,987654321,...b,'ORANGE',...c]
// console.log(g);

//ARRAY DESTRUCTURING

// let a = [11,22,33,'Kite',true]
// console.log(a);

// let a1 = a[0] 
// console.log(a1 * 10 );

// let a2 = a[1] 
// console.log(a2 * 10 );

// let a3 = a[2] 
// console.log(a3 * 10 );

// let [a1,a2,a3,a4,a5] = a
// console.log(a1,a2,a3,a4,a5);

//REST OPERATOR ...(LHS), it binds the element into an array

// let [a1,a2,...a3] =  a
// console.log(a1, a2, a3);

// //SPREAD = acts as a liberator
// let b = [ ...a ]
// console.log(b);

//indexOF

// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log( a.indexOf(true) );
// console.log( a.indexOf('TRUE') );

//foreach  pop push shift unshift

//find

// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.find((ele)=>{
// //    return ele===49
// return ele > 50
// })
// console.log(b);

//filter = returns filtered array
// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.filter((ele)=>{
// //    return ele===49
// return ele > 50
// })
// console.log(b);

//map = return new array 
// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.map((ele,index)=>{
//    return ele * index
// // return ele+' '+'JIMMY 🚫 SHERGILL'
// // return ele > 50
// })
// console.log(b);


// // console.log( 76 > 50 );

// console.log('********************************');

// let c = a.filter((ele,index)=>{
//     //    return ele * index
//     // return ele+' '+'JIMMY 🚫 SHERGILL'
//     return ele > 50
//     })
//     console.log(c);

// console.log('********************************');

// //foreach never returns
// a.forEach(ele=>console.log(ele))

//flat

// The flat() method concatenates sub-array elements.
// let a = [1,[2,[3,[4,[5,6]]]]]
// console.log(a);
// console.log( a.flat( 1 ) );
// console.log( a.flat( 2 ) );
// console.log( a.flat( 3 ) );
// console.log( a.flat( 4 ) );

// console.log(a.flat(Infinity));


//reduce
// let a = [1,2,3,4]
// console.log(a);
//w = accumulator
//x = element
//y = index
//z= elem's origin

// let b = a.reduce((w,x,y,z)=>{
//     // return w
// return w + x
// })
// console.log(b);

// w  x   return
// 0  1    1
// 1  2    3
// 3  3    6
// 6  4    10


//CHAIN METHOD
// let a =  [1,[2,3,[4,[5,[6,7]]]]]
// console.log(a);

// // let b = a.filter(ele=> ele >40 )
// // console.log(b);

// let b = a
// .flat(Infinity)
// .filter(ele=>ele>3)
// .map(ele=>ele*10)
// .reduce((a,b)=>a+b)

                          
// console.log(b);

//sort

//sorted on basis of thier Encoded Byte (UTF8)
// let a = ['r','S','y','W','a','R','C']
// console.log(a);
// console.log( a.sort() );

// let a = [45,34,84,93,10]
// console.log(a);

//  console.log(a.sort());

//  let a = [10045,34,284,193,90]
//  console.log(a);

//  console.log(a.sort());

// --------------------------------------------------

// x-y  -ve   return x then y 
//x-y   +ve   return y then x
//x-y    0    return  no change

// let c = a.sort((x,y)=>{
// // return x-y  //ascending
// return y-x // descending
// })
// console.log(c);

//ascending
// x   y   x-y   return
// 45  34   +     34,45
// 34  84   -     34,84
// 84  93   -     84,93
//

//ascending
// x   y   y-x   return
// 45  34   -     45,34  
//  34  84   +    84,34  



//some and every

// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.

// let a = [1,2,3,4,5]
// console.log(a);

// let b = a.some((ele)=>{
//     return ele > 4
// })
// console.log(b);

// console.log('*************************');

// let c = a.every((ele)=>{
//     return ele > 4
// })
// console.log(c);

//fill =  arr.fill(value,start,end)

// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.

// let a = ['air','rice','toy','ICE']
// console.log(a);

// let b = a.fill('nest')
// console.log(b);

// let c = a.fill('Fish',0,2)(0=statr 2 end-1)
// console.log(c);

// to Locale String = arr.LocaleString(locales,options)


// let a  = [22,33,44,55]
// console.log(a);

// console.log('*************************');

// let b = a.toString()
// console.log(b);
// console.log( typeof b );

// console.log('*************************');

// let c = a.toLocaleString()
// console.log(c);
// console.log(typeof c);

// console.log('*************************');

// let d = a.toLocaleString('en-US',{style:'currency',currency:'USD'})
// console.log(d);

// console.log('*************************');

// let e = a.toLocaleString('ja-JP-u-ca-japanese',{style:'currency',currency:'YEN'})
// console.log(e);


// Sub Arrays

//slice = does not mutates

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.

// let a = [1,2,3,4,5,6,7,8,9,10]
// console.log(a);

// // console.log(a.slice(5));
// console.log( a.slice(3,7) );// start  end-1

// console.log(a);

// console.log('*************************');

// //splice

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements, remove 1: 
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

// // console.log( a.splice(5) );

// // console.log( a.splice( 4,3 ) );// start  length
// // console.log( a.splice(1,4,'SEVEN') );
// // console.log( a.splice(1,4,[45,67,89]) );  

// console.log('********************************');

// let a = [1,2,3,4]
// console.log(a);
// let b = a.reduce(  (acc,cv)=> {
//     return acc+cv
// },999)
// console.log( b );

// // acc  cv  return
// // 999  1    1000
// // 1000  2    1002
// // 1002  3    1005
// // 1005  4    1009

// let a = [1,2,3,4]
// console.log(a);

// let b = a.reduce(  (acc,cv)=> {
//     return acc+cv
// })
// console.log( b );

console.log('********************************');

// let a = [199,445,'GRASS','Leo']
// console.log( a );
// console.log( a.indexOf( 'Leo' ) );
// console.log( a.indexOf( 'messi' ) );

