# Questions:
1) What is the difference between null and undefined?
2) What is the use of the map() function in JavaScript? How is it different from forEach()?
3) What is the difference between == and ===?
4) What is the significance of async/await in fetching API data?
5) Explain the concept of Scope in JavaScript (Global, Function, Block).


# Answers:

### 1st Answer:

`null` = Null is an Object. A value that we intentionally use as Null. <br>

`undefined` = Undefined's type of is `undefined`. When a variable declared but value not assign will give us "undefined" as result. <br>

<hr>

### 2nd Answer:

`map()` = map() will loop through every values/elements and give us an array in return. <br>

`forEach()` = forEach() will loop through every values/elements and execute it(not returned anything). <br>

<hr>

### 3rd Answer:

`==` = Double Equal only checks the values are same or not and also converts a boolean value to number and string value to number for match them. <br>
`===` = Triple Equal 1st check both values "Types" are same or not and then check values are same or not. <br>

<hr>

### 4th Answer:
`Async/Await` = Fetching API data with Async/Await will increase code/site workflow. It will give us data Synchronous way. <br>

<hr>

### 5th Answer:
`Global Scope` = When we right some variable like var a = 10 in code editor without any fn/{} and can access from anywhere is called `Global Scope`. <br>

`Function Scope` = Whatever values we are writing into a function can be access only inside the function is called `Function Scope`. <br>

`Block Scope` = Inside {} `Curly Braces` with if/else conditions or whatever we are writing there is called `Block Scope`.