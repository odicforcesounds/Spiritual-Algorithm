# Personal Notes 

As described, all notes are personal, so some of the content can lead others or even myself to an error. Please be free to fix any typo or interpretation of this notes, to help each others. Open a issue and make a pull request. 

## Learning NodeJS

Lets Dive Into the World of JavaScript

1. Gettings Started
2. JavaScript Refresh
3. NodeJS Basics
4. Efficient Development
5. Using ExpressJS
6. Templating Engines
7. Model-View-Controller
8. Routes and Advanced Models
9. NodeJS + MongoDB (NoSQL)
10. Session and Cookies
11. Authentication
12. Sending E-mails
13. Using Input Validation
14. Error Handling 
15. File Uploads & Downloads
16. Pagination
17. Async Requests
18. Handling Payments
19. REST API 
20. Using Async await
21. Websockets
22. GraphQL
23. Deployment 
24. Next Steps

## Getting Started

Q: What is NodeJS ? 
- Short-Answer: JavaScript for Server Side or a Runtime for the computer. 
- Long-Answer: V8 is the buit-in, compiler and browser interpreter for Google-Chromium, which run JavaScript for the Web. Here we have no access to the hard-disk to manipulate files ( as an example ). With NodeJS, we are able to manipulate files in our Hard-Drive, and therefor  we can develop JavaScript as an external application that will run on computers (but outside the browser). NodeJS features are written in C++ Language that compile JavaScript. V8 is the application that compile JavaScript to Machine Code and vice-versa. In the Browser, JavaScript interacts with the DOM ( Document Object Model ) that is represented by all HTML tags to structure any webpage. 

    ```js
        console.log("Hello World from NodeJS");
        const fs = require('fs');
        fs.writeFileSync('hello.txt', 'Hello!');
    ```

- Full Picture: Client request page-content from Domain Server 

    1. Question: What Server can do: 
    - Database control.
    - Authentication control.
    - Input Validation control.
    - Send HTML / CSS / JavaScript content to client. 
    2. Answer:  What Client can do: 
    - Naturally NodeJS control everything from the Server.
    - Client cannot access server-side code. 
    - Remove Control and Power to the client (to prevent application hacking)
    - Database hacking become more dificult.

- Almost all actual JavaScript Frameworks like React, Angular, Ionic use NodeJS to execute their own processes. 

    1. Difference between Nodejs and PHP
    - With NodeJS we don't need Apache
    - We create our own server without extra applications. 

- Good News: We only need to learn JavaScript to deal with Client-side and Server-side features. 
- Ways of executing NodeJS 
    1. The REPL way (without files) - directly into node enviorment (node) - Execute code as we write 
        - R: Read User Inputs
        - E: Evaluate Users Inputs
        - P: Print Output (result)
        - L: Loop and wait for new Input 
    2. Execute Files. 

## JavaScript Refresh 

## JavaScript Refresh 

#### JavaScript Summary 

1. Weakly Typed Language: 
    - No Explicit Type Assignment
    - Data types can be switched dynamically
2. Object Oriented
    - Data can be organized in Logical Objects
    - Primitive and reference types 
3. Versatile Language
    - Can run in Browser 
    - Can run in Server

```js 
// JavaScript Example as Refresher

var name = 'Oscar'; // Variable assigned with strings
var age = 40; // Variable assigned with numbers
var haveHobbies = true; // Variable assigned as Boolean
function userDetails(userName, userAge, userHasHobby) { // Scoped local variables - Not global
    return (
    'Name is: ' 
    + userName 
    + 'Age is: ' 
    + 'Hobbies are: ' 
    + userHasHobby
    );
}

console.log(userDetails(name, age, haveHobbies));
```

Next Generation JavaScript features: 

1. Change 'var' to 'let'
2. Use 'const' to ensure variables will not change.
3. Functions: 

```js
// Converting Old JavaScript Functions into ES6
// Arrow Functions 
const userDetails =  (userName, userAge, userHasHobby) => {
    // this.userName = userName;
    // return ();
};
// Other Example 
const add = (a,b) => {
    return a+b;
}
console.log(add(20,20));

// Simplifying even more this last function example
const add = (a,b) => a + b;
console.log(add(10,10));

// Special Cases:
const addOne = a => a+1; // when function argument is unique, we don't need to use ()
console.log(addOne(2020));

// function without a name, with pre-defined value 
const addRandom = () => 2020 + 2;
console.log(addRandom());
```

4. Objects 

```js 
const person = {
    name: 'Oscar', // name is the KEY-VALUE-PAIR or called object-proprieties
    age: 40, 
    greet: () => { // Objects can have functions ()
        console.log('I am ' + this.name); // 'this' keyword is used to access the GLOBAL KEY-proprieties
    }
};

person.greet(); // this will print (I am undefined)

// To fix this problem we use can define a functions as: 

greet() { // inside person object, function become a method of person object
    console.log(this.name);
};

// Coping Objects using already created objects: 

const copiedPerson = {...person}; 
```

5. Arrays

```js

const todo = ['code', 'cook', 'sport'];
for (let hobby of hobbies){
    console.log(hobbies);
    console.log(hobbies.map(hobby => {
        return 'Hobby: ' + hobby;
    }));
}

// note about arrays
// if I add or remove content to the **array** which uses 'const' keyword, there is not error because we didn't change the type 
// example: 
hobbies.push('Book Reader'); // this will not print-out an error because we didn't change the type of hobbies. 

// About arrays declarations and recycling
const copiedArr = hobbies.slice(); // Copy Old Array into new
const coppiedAry = [hobbies]; // Create a new Array with a nasted copy of the old array. 
const coppiedArray = [...hobies]; // create new Array based on the old one. 
```

6. The Spread Operator ( ... )

```js
const toArray = (...args) => { // if we use the spread operator 
    // (...) we don't need to specify how many arguments we will use.
    return args; // without using spread operator we would need to say how many arguments to use [arg1, arg2, arg3]
};
console.log(toArray(1,2,3,4,5,5,6,6,6,6)) 
```

7. De-structing arrays: 

```js
    // to use values of arrys or objects without copying the content data with the defined type, but only data it self. 
    // if using the HOBBIES example 
    const [hobby1, hobby2] = hobbies;
    console.log(hobby1, hobby2); // print two elements separated from the array. (sport cook code)
    // in the declaration of this example, names are not important, since hobby1/2 are pointing to the number of elements. 
```

8. How to work with Asynchronized code 

```js
setTimeout( () => {
    console.log('Timer is Done!');
}, 2000 ); // 2 seconds delay 
console.log('hello');
console.log('hi!');
// Result: hello, hi, Time is Done!
// READ MORE ABOUT Promisses
```

