/*
Regular Expression:=>

A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text to replace operations. A regular expression can be a single character or a more complicated pattern. Regular expressions can be used to perform all types of text search and text replacement operations.
In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. For example,

Syntax:=>

/pattern/modifiers;


*******************Graviton***********************
// console.log( new RegExp('') );

// console.log(/ /);

// let a = 'The dog chased the cat'
// console.log(a);
// // let b = /The/
// // let b = /the/
// // let b = / cheese /
// let b = new RegExp('Cat')
// console.log( b.test(a)) ;

// let a = 'Somwhere the sheeps are hiding from the fox'
// console.log(a);
// //  let b = /sheep | fox/
// // let b = /sheep | foxes/
// let b = /sheeps | foxes/
// console.log( b.test(a)) ;

// let a = 'Somwhere the Sheeps are hiding from the fox. We get wool from the Sheeps'
// console.log(a);
// let b = /sheeps/i; // i = case sensitive
// console.log( b.test(a)) ;

// let a = 'Somwhere the sheeps are hiding from the fox. We get wool from the sheeps'
// console.log(a);
// let b = /sheeps/g; // g = global , more than one match
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'Repeat Repeat Repeat'
// console.log(a);
// let b = /repeat/ig; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'Twinkle twinkle little star'
// console.log(a);
// let b = /twinkle/ig; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'Pooh the bear give me a hug'
// console.log(a);
// let b = /hu./g; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'Let us eat some bun and have some fun'
// console.log(a);
// // let b = /.un/g; 
// let b = /.un/g; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'This bread cost $8.00 . I also bought a thread '
// console.log(a);
// let b = /..read/g; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'Let us eat some bun and have some fun under the sun'
// console.log(a);
// // let b = /.un/g; 
// let b = /[abcdef]un/g; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'Let us eat some bun and have some fun under the sun and i am pointing a gun'
// console.log(a);
// // let b = /.un/g; 
// let b = /[a-fp-s]un/g; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = 'Let us eat some bun and have some fun under the sun and i am pointing a gun'
// console.log(a.length);
// console.log(a);

// let b = a.split(' ')
// console.log(b);

// let c = b.join('')
// console.log(c);
// console.log(c.length);

// let d = c.match( /[aeiou]/g )
// console.log(d);

// console.log( consonent are ${c.length-d.length} );

///-------------------

// let a = 'This bread cost $8.00 . I also bought a thread'
// console.log(a);
// let b = /.un/g; 
// let b = /[0-7a-e]/g; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

// let a = '9 of 13 are Brave musketeers'
// console.log(a);
// // let b = /Brave/g; 
// let b = /[^0-9aeiou]/ig; 
// console.log( b.test(a)) ;
// console.log( a.match(b) );

//asuignment = get all consonent letters only 
// let a = 'Let us eat some bun and have some fun under the sun and i am pointing a gun'
// console.log(a);

// let b = a.match(/[^aeiou]/ig)
// console.log(b);

///------------------------------------------

// + = match characters that occur one or more times

// let a = 'Mississippi'
// console.log(a);
// let b = /s+/g
// console.log( a.match(b) );

// let a = 'goooooooal'
// console.log(a);
// let b = /go+/g
// console.log( a.match(b) );

// let a = 'gut feeling'
// console.log(a);
// let b = /g+/g
// console.log( a.match(b) );

// let a = 'over the moon'
// console.log(a);
// let b = /o+/g
// console.log( a.match(b) );

// let a = 'Aaaaaaaaaargh'
// console.log(a);
// let b = /Aa+/g
// console.log( a.match(b) );

// * = match characters that occur zero or more times
// lazy match (?) = finds smallest possible part of string and returns that regex pattern

// greedy match = by default


// let a = 'titanic'
// console.log(a);
// // let b = /t[a-z]*i/g // greedy match = happens by default
// let b = /t[a-z]*?i/g // lazy match 
// console.log( a.match(b) );

// let a = '<h1>Winter is Coming</h1>'
// console.log(a);
// // let b = /<.*>/g // greedy match
// let b = /<.*?>/g

// console.log( a.match(b) );

// ex2
// let a = 'UUUUUUTTTTTUUUUUUUUU'
// console.log(a);
// console.log( a.match( /T*/g ) );
// console.log( a.match( /T+/g ) );

// let a = 'Ivar the boneless'
// console.log(a);
// // let b = /[^bone]/g// skip some  part
// let b = /^[I]/g // begining of the string
// console.log(a.match(b));

// let a = 'Peter and Rony like Swimming'
// // let b = /^Peter/g
// let b = /^Rony/g
// console.log(a.match(b));

// let a = 'The last bus just left depot the '
// console.log(a);
// let b = /depot$/g
// console.log( a.match(b) );

// match all letter and numbers only with no white space and special characters

// let a = 'THE 5343 boxing wizards jump quickly @#$@#$@#$'
// console.log(a);
// // let b = /[0-9a-zA-z]/g
// let b = /\w/g
// console.log( a.match(b) );

// match everything but letters and numbers

// let a = 'THE 5343 boxing wizards jump quickly @#$@#$@#$'
// console.log(a);
// let b = /\W/g
// console.log( a.match(b) );

//only numbers
// let a = 'THE 5343 boxing wizards jump quickly @#$@#$@#$'
// console.log(a);
// let b = /\d/g
// console.log( a.match(b) );

//exclude all numbers
// let a = 'THE 5343 boxing wizards jump quickly @#$@#$@#$'
// console.log(a);
// let b = /\D/g
// console.log( a.match(b) );

// ex3
// lowecase and uppercase letter should be in starting  and num at last
// let user = 'PhilipRalphson789'
// let user = 'Dr789'
// console.log(user);
// // ^[A-Za-z]* = from starting only letters allowed more than once 
// // \d*$ = number ony allowed at last

// let userCheck = /^[A-Za-z]{3,6}\d*$/g
// // console.log( user.match(userCheck) );

// if(userCheck.test(user)){
//     console.log('Username Allowed');
// }else{
//     console.log('Username not Allowed');
// }


// range 
// let a = 'THEJERJTJERTJREJTRETI 534565656 boxing wizards jump quickly @#$@#$@#$'
// console.log(a);
// // let b = /[A-Z]{3,5}/g
// // let b = /[A-Z]{3,}/g  /// 3 to infinity
// // let b = /\d{3,5}/g
// let b = /\d{3,}/g
// console.log( a.match(b) );

// let a = 'WhiteSpace is important in separting words'
// console.log(a);
// let b = /\s/g // only white space allowed
// console.log(a.match(b));

// let a = 'WhiteSpace is important in separting words #$%#%#$ 42425345'
// console.log(a);
// let b = /\S/g // no white space allowed
// console.log(a.match(b));
// let a = '100000000000000000000000'

