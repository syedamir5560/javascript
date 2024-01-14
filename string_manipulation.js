// String=>

//  In JavaScript, a string is a sequence of zero or more characters.A string literal begins and ends with either a single 
// quote(') or a double quote (").

//  JavaScript strings are primitive values.Also, strings are immutable.It means that if you modify a string, you will always get 
//  a new string.The original string doesn’t change.

// A string that begins with a double quote must end with a double quote.Likewise, a string that begins with a single quote must 
// also end with a single quote:

//  let greeting = 'Hi';007 
//  let message = "Bye";

//  The template literals allow you to use the single quotes and double quotes inside a string without the need of escaping
//   them.For example:

// let mesage = `"I'm good". She said"`;
//  console.log(mesage);

//to find legth of string
let str='aamir';
console.log(str.length);

//to fetch perticular charecter from string
console.log(str[2]);

//to use double qoute in string
let str1="aamir ali \"cse\"\ ";
console.log(str1);

//to add two string concate() function used
let str3=str.concat(str1);
console.log(str3);

//getting sub string from string 
let substr=str1.substr(2 , 4);
let substr2=str1.substring(2,4);//<=(start , end - 1)
console.log(substr);
console.log(substr2);

//to find index of perticular word or charechter in string we use indexof fuction
let str4=" this is javascript tutorial";
let pos=str4.indexOf('is');
console.log(pos);

//removing white spaces trim() /trimStart()/trimEnd() function used
console.log(str4); 
console.log(str4.trim());

//convert into upper case use toUpperCase()
console.log(str4.toUpperCase());

//to replace string replace()
console.log(str4.replace('this','that'));

//includes

//it will check perticular substring is present in string and return true or false 
var a='pine apple';

console.log( a.includes('P') );
// console.log( a.includes('I') );
// console.log( a.includes('n') );
// console.log( a.includes('%') );

///eX1

// function checkIn(para){

// let x = para.toLowerCase()

// if( x.includes('gun') || x.includes('uranium') || x.includes('knife')|| x.includes('1000 kg gold') ) {
//     return ' Access Denied'
// }else return 'Allowed to Fly'

// }
// console.log( checkIn('I have a laptop and a 1000 kg gold') );
// console.log( checkIn('I have a lays and gun') );
// console.log( checkIn('I have my pet') );

//Ex2

// let db = 'rajnish12@gmail.com'

// function a(para){

// let x = para.toLowerCase();
// console.log(x);

// if(db.includes(x)) return ' LOGGED IN'
// else return 'LOGGED OUT'

// }
// console.log( a('raJNIsh12@GMAil.com') );
// console.log( a('rajnish@gmail.COM') );
// console.log(a('raju12@gMAIL.COM'));

// pad start and pad end

// The padStart() method pads a string in starting of the string with another string (multiple times) until it reaches a 
//      given length.

// let a = 'Peach'
// console.log(a);
// console.log(a.length);

// console.log( a.padStart(8,'*') );
//  console.log( a.padStart(3,'*') );
// console.log( a.padEnd(8,'@') );
// console.log(a.padEnd(9,'^'));


// slice=>

    // let a = 'PeachTREE'
// console.log(a);
// console.log( a.slice(1) );
// console.log( a.slice( 2, 6 ) );// start, end-1
// console.log( a.slice(7,4) );//Not Possible

// The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still 
// returned. The slice() method returns an empty string if this is the case.

// Splite=>
// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.

// let b='my sting';

// let arr=b.split(" ");
// console.log(arr);

// Join=>
// The join() method concatenates all of the elements in an array (or an array-like object), separated by commas or a specified 
//separator string, and returns a new string


// let a = 'RivernileinEgypt';

// let b=a.split('n');
// console.log(b.join(" "));

// 11 top of the world === Top Of The World

// function one(para){
// console.log(para);
// let a = para.split(' ')
// console.log(a);
// let b = ''
// for(let i=0;i<a.length;i++){
// console.log(i);
// console.log( a[i][0].toUpperCase()+a[i].slice(1));
// b+= a[i][0].toUpperCase()+a[i].slice(1)+' ' 
// }
// console.log(b.trim());
// return b.trim()
// }
// console.log( one('top of the world') );

//ex3 

// let timeNow = '2100 hours'
// let msg = 'Boarding Gates are OPEN'

// function one(timeNowPara,displayMSG){

//     let a = parseInt(timeNowPara)
//     console.log(a);
//     if( a<2000) return displayMSG+' ✈'
//     else return displayMSG.replace('OPEN','🚫 CLOSED')

// }
// console.log( one( timeNow,msg ) );
// console.log('**********************');
// console.log( one( '2000 hours',msg ) );
// console.log('**********************');
// console.log( one( '1900 hours',msg ) );


// ************** String in function***************

// //ex4 9876543210   =   ******3210 

// // function one(para){
// // console.log(para);
// // let a = para.slice(-4)
// // console.log(a);
// // let b = a.padStart('10','*')
// // return b
// // }
// // console.log(one('9876543210'));

// //ex5     kITe = Kite 

// // function one(para){
// //     console.log(para);

// // let a = para.toLowerCase();
// // console.log(a);
// // let  b = a[0].toUpperCase();
// // console.log(b);
// // let c = a.slice(1)
// // console.log(c);
// // return b+c
// // }
// // console.log( one('kITe') );
// // console.log('********************');
// // console.log( one('onION') );

// //ex6  car rac    rat  tar

// // function one(para){
// // console.log(para);
// // let a = para.split('')
// // console.log(a);
// // let b = a.reverse()
// // console.log(b);
// // return b.join('')
// // function one(para){
// //  console.log(para);
// //  let a = para.split('')
// //  console.log(a);
// // console.log(a.length,' A"s length');
   
// // let b = []
//      for(let i=a.length-1; i>=0;i--){
//          console.log(i);
//           console.log( a[i] );
//          b.push(a[i])
//      }
//      console.log(b);
//      return b.join('')
//         }
//     console.log( one('Well') );
//      console.log('********************');
//      console.log( one('onION') );


// // function one(para){
// // console.log(para);
// // let a = para.toLowerCase();
// // console.log(a);
// // if( a.includes(para) ) return para.toUpperCase()
// // else return para.toLowerCase()
// // }
// // console.log( one('piano') );
// // console.log('********************');
// // console.log(one('SURF'));






