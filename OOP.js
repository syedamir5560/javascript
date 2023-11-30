/*

Object Oreinted Programming=>
     Object Orientation is a software development paradigm that follows real-world 
    modelling. Object Orientation, considers a program as a collection of objects that 
    communicates with each other via mechanism called methods. ES6 supports these 
    object-oriented components too

Prototype=>
        In javascript object can inherite feature from one another via prototype .every object has
        its own property called prototype.Because a prototype itself is also another object, 
        the prototype has its own prototype. This creates a something called prototype chain. 
        The prototype chain ends when a prototype has null for its own prototype.

example=>       let person = {'name' : 'John'}

        when you console person object we will find person object has property called [[prototype]]
        prototype itself  is an object so prototype have its own property.When you access a property
        of an object, if the object has that property, it’ll return the property value.
        if property do not exist in object then javascript engine search  it in prototype of an object.
        If the JavaScript engine cannot find the property in the object’s prototype, it’ll search in 
        the prototype’s prototype until either it finds the property or reaches the end of the prototype chain.

Defining methods in the JavaScript prototype object=>
                function Person(name) {
                   this.name = name;
                }
        Person.prototype.greet = function() {
                     return "Hi, I'm " + this.name + "!";
                 }
                let p1=new Person ("aamir");
                consol.log(p1);
            console.log( p1.greet());

The combination of the constructor and prototype patterns is the most common way to define custom 
types in ES5. In this pattern:

    1)The constructor pattern defines the object properties.
    2)The prototype pattern defines the object methods.

            function Person(fname,lname){
                this.fname=fname;
                this.lname=lname;
                }

                Person.prototype.fullname=function(){
                return this.fname+" "+this.lname;
                }

                let p1=new Person("aamir","ali");
                console.log(p1);
                console.log(p1.fullname());

Prototype Inheritance=>
            In prototypal inheritance, an object “inherits” properties from another object via 
            the prototype linkage.  
                
                let person = {
                    name: "John Doe",
                    greet: function () {
                    return "Hi, I'm " + this.name;
                }
            };

            The person object has a link to the anonymous object referenced by the Object() function.
             The [[Prototype]] represents the linkage:

            let teacher =   {
            teach: function (subject) {
            return "I can teach " + subject;
        }
    };

            If you want the teacher object to access all methods and properties of the person object,
             you can set the prototype of teacher object to the person object like this:

            teacher.__proto__ = person;
            console.log(teacher.name); //access name properety from person object

            Suppose you have a person object:

                let person = {
                    name: "John Doe",
                    greet: function () {
                        return "Hi, I'm " + this.name;
                    }
                };
            
                The following creates an empty teacher object with the __proto__ of the person object:

                let teacher = Object.create(person);

                After that, you can define properties for the teacher object:

                teacher.name = 'Jane Doe';
                teacher.teach = function (subject) {
                        return "I can teach " + subject;
                }

                Or you can do all of these steps in one statement as follows:

                    let teacher = Object.create(person, {
                        name: { value: 'John Doe' } ,
                        teach: { value: function(subject) {
                            return "I can teach " + subject;
                        }}
                    });

Classes in ES6=>

ES6 introduces the class keyword that makes the constructor/prototype pattern easier to use.
 For example, the following uses the class keyword to define exactly the same Person type:

                class Person {
                    constructor(firstName, lastName) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                    }
                    getFullName() {
                        return this.firstName + " " + this.lastName;
                    }
                }

                let p1 = new Person('John', 'Doe');
                let p2 = new Person('Jane', 'Doe');

                console.log(p1.getFullName());
                console.log(p2.getFullName());


                
 Object:=> An object is a real-time representation of any entity. According to Grady 
    Brooch, every object is said to have 3 features:

o State:=> Described by the attributes of an object.
o Behavior:=> Describes how the object will act.
o Identity:=>    A unique value that distinguishes an object from a set of similar 
such objects.

Classes=>
    A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions 
    that manipulate data. ES6 classes are just special functions.
    Prior to ES6, JavaScript had no concepts of classes. To mimic a class, you often use the 
    constructor/prototype pattern.es6 classes just spacial function.

     Method: Methods facilitate communication between object

    Syntex:=>
                class MyClass {
                    // class methods
                    constructor() { ... }
                    method1() { ... }
                    method2() { ... }
                    method3() { ... }
                             ...
                    }

 A class definition can include the following:
 
 Constructors:=> Responsible for allocating memory for the objects of the class.
 Functions:=> Functions represent actions an object can take. They are also at times 
referred to as methods.

Exe=>
                    class User {

                    constructor(name,rollno) {
                        this.name = name;
                        this.rollno=rollno;
                    }

                    sayHi() {
                        console.log(`${this.name}and ${this.rollno}`);
                        }
                    }

                // Usage:
                let user = new User("John", 25);    
                user.sayHi();

Not just a syntactic sugar:=>

            Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make 
                things easier to read, but doesn’t introduce anything new), because we could actually
                 declare the same thing without using the class keyword at all:

            // rewriting class User in pure functions

            // 1. Create constructor function
            function User(name) {
            this.name = name;
            }
            // a function prototype has "constructor" property by default,
            // so we don't need to create it

            // 2. Add the method to prototype
            of User object

            User.prototype.sayHi = function() {
            alert(this.name);
            };

            // Usage:
            let user = new User("John");
            user.sayHi();

            =>ES6 Classes are not only syntactical sugar but also provide some other features

Getters/setters==>>  
        A setter function is invoked when there is an attempt to set the value of a property. 
        The set keyword is used to define a setter function.

        A getter function is invoked when there is an attempt to fetch the value of a property. 
        The get keyword is used to define a getter function.
        
        Just like literal objects, classes may include getters/setters, computed properties etc.
        Here’s an example for user.name implemented using get/set:

                        class User {

                        constructor(name) {
                            // invokes the setter
                            this.name = name;
                        }

                        get name() {
                            return this._name;
                        }

                        set name(value) {
                            if (value.length < 4) {
                            alert("Name is too short.");
                            return;
                            }
                            this._name = value;
                        }
                        }

                        let user = new User("John");
                        alert(user.name); // John

                        user = new User(""); // Name is too short.   

=>The Static Keyword=>
        The static keyword can be applied to functions in a class. Static members are referenced 
by the class name.The JavaScript provides static methods that belong to the class instead of an 
instance of that class. So, an instance is not required to call the static method. These methods
 are called directly on the class itself.

Example1=>    class Statickey{
                    static person(){
                        console.log("static person");
                    }
            }
            Statickey.person();//invoke static method

Ex2(sorting)=>(static methods)   
        class Users{
                constructor(name,age,income){
                    this.name=name;
                    this.age=age;
                    this.income=income;
                }
                static compareByAge(user1,user2){
                        return (user1.age - user2.age);
                }
                static compareByIncome(user1,user2){
                    return (user1.income - user2.income);
                }
                }

                let user1=new Users("aamir",45,45000);  
                let user2=new Users("ali",30,10000);
                let user3=new Users("aliza",48,50000);

                let user=[user1,user2,user3];
                user.sort(Users.compareByAge);
                user.sort(Users.compareByIncome);

                console.log(user);    

example3=> Static data member
                class Users{
                    static id=1;
                    constructor(name,age,income){
                        this.name=name;
                        this.age=age;
                        this.income=income;
                        this.id=Users.id++;
                    }
                    }

                    let user1=new Users("aamir",45,45000);  
                    let user2=new Users("ali",30,10000);
                    let user3=new Users("aliza",48,50000);
                    let user=[user1,user2,user3]
                    console.log(user);

: It is not mandatory to include a constructor definition. Every class by default has a 
constructor by default.

The Super Keyword=>
ES6 enables a child class to invoke its parent class data member. This is achieved by using 
the super keyword. The super keyword is used to refer to the immediate parent of a class.

Inheritance=>
        ES6 supports the concept of Inheritance. Inheritance is the ability of a program to create
        new entities from an existing entity - here a class. The class that is extended to create
        ES6 newer classes is called the parent class/super class. The newly created classes are 
        called the child/sub classes.A class inherits from another class using the ‘extends’ keyword.
        Child classes inherit all properties and methods except constructors from the parent class.

Inheritance can be classified as:=>
             Single: Every class can at the most extend from one parent class
             Multiple: A class can inherit from multiple classes. ES6 doesn’t support multiple 
            inheritance.
             Multi-level: Consider the following example.

            class BankAccount{
                custumerName;
                accountNumber;
                balance;

                constructor(custumerName, accountNumber , balance=0){
                    this.custumerName=custumerName;
                    this.accountNumber=Date.now();
                    this.balance=balance;
                }

                deposit(amount){
                    this.balance += amount;
                }

                widraw(amount){
                    this.balance -= amount;
                }
                }

                class CurrnetAcount extends BankAccount{
                    transactionLimit=20000;

                    constructor(custumerName,balance=0){
                        super(custumerName,balance)
                    }

                    takeBusnessLoan(amount){
                        console.log("taking buesness loan "+ amount);
                    }
                }

                class SavingAcount extends BankAccount{
                transactionLimit=10000;

                constructor(custumerName,balance=0){
                    super(custumerName,balance)
                }

                takePersonalLoan(amount){
                    console.log("taking personal  loan "+ amount);
                }
                }

                let aamir=new SavingAcount('aamir ali');
                aamir.deposit(5000);
                aamir.widraw(2000);
                aamir.takePersonalLoan(5000);
                console.log(aamir);

The instanceof operator=>
The instanceof operator returns true if the object belongs to the specified type.
Example=>
            'use strict'
            class Person{ }
            var obj=new Person()
            var isPerson=obj instanceof Person;
            console.log(" obj is an instance of Person " + isPerson);

************************************graviton web**********************************

    // inheritance between class using constructor function
      // class => 1

      //   let Person = function(firstname,birthyear){
      //       this.firstname = firstname;
      //       this.birthyear = birthyear
      //   }

      //   Person.prototype.calcage =function(){
      //       console.log( 2023 - this.birthyear );
      //   }

      //   // class => 2

      //   let Student = function(firstname,birthyear,course){
      //        this.firstname = firstname;
      //        this.birthyear = birthyear

      //       Person.call(this,firstname,birthyear)
      //       this.course = course
      //   }

      //   Student.prototype = Object.create(Person.prototype)

      // Student.prototype.introduce = function(){
      //     console.log(My namae is ${this.firstname} and i study ${this.course});
      // }

      // // instance of student

      // let raphael = new Student('Raphael Nadal',2001, 'Bsc Botany')
      // console.log(raphael);
      // raphael.introduce()
      // raphael.calcage()

      // console.log('******');
      // console.log( raphael instanceof Person );
      // console.log( raphael instanceof Student );

      console.log("**********");

      //Es6

      // class expression

      // let Person = class{}

      // class PersonCl {
      //     constructor(firstname,birtyear){
      //         this.firstname = firstname;
      //         this.birtyear = birtyear;
      //     }

      //     calcage(){
      //         console.log(2023-this.birtyear);
      //     }

      //     greet(){
      //         console.log(Good Morning from ${this.firstname});
      //     }
      // }

      // let jess = new PersonCl('Jessica',2002)
      // console.log(jess);
      // jess.calcage();
      // jess.greet()

      // console.log( jess instanceof PersonCl );

      //--------------------------------

      // class Fruit {
      //     constructor(name){
      //         this._name = name
      //     }

      //     sweet(){
      //         console.log(${this._name} is sweet);
      //     }

      //     get seed(){
      //         console.log(${this._name} has seed init);
      //     }

      //     set fruitsize(para){
      // this._name = para
      //     }

      // }

      // let a = new Fruit('Kiwi')
      // console.log(a);
      // a.sweet()
      // a.seed
      // a.fruitsize = 'Peach'
      // a.sweet()
      // a.seed

      //inheritance between clases

      class Person {
        constructor(firstname, lastname) {
          this.firstname = firstname;
          this.lastname = lastname;
        }

         greeting() {
          console.log(God MOrning ${this.firstname} ${this.lastname});
        }

       static getmembership() {
            console.log(${this.firstname} has bought ${this.membership} Membership for $500);
            return 567
        }

      }

      class Customer extends Person {
        constructor(firstname, lastname, phone, membership) {
          super(firstname, lastname);

          this.phone = phone;
          this.membership = membership;
        }

    

      }

let john = new Customer('John','Doe',6765756,'Premium')
console.log(john);
john.greeting()

console.log('****');

console.log(Person.prototype);
console.log(Customer.prototype);
// john.getmembership()









            */





