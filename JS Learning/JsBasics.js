console.log("Hello World");

//JS data type
var a = 3; //Number
var b = 5.5;
console.log("sum",a+b);

var s = "Ketki"; //string
var t = 'Chavan';
console.log(s+" "+t);

//Object is reference data type
var details = {
    name: "Ketki",
    dob : 22092000,
    address: "Mulund East"
}
console.log(details)

//booleans
var c = true;
var d = false;
console.log(c,d);

var und;
console.log("und",und);

//MAP
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log("map:",map);
console.log( map.get(1)); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log(map.get('bool1'));// undefined
console.log( map.size ); // 3

// SET
//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

//Array is a Reference Data type
var arr = [1,2,3,4,5,"Ketki",0.2];
console.log("arr",arr);

let fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name
console.log("fruits array:",fruits);
for(let n in fruits){
    console.log("\t",n);
}

//Array methods 
/* arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.*/

//delete element in array
let arr4 = ["I", "go", "home"];
delete arr4[1]; // remove "go"
console.log( arr4[1] ); // undefined

// now arr = ["I",  , "home"];
console.log( arr4.length ); // 3

//splice method
let sp = ["I", "study", "JavaScript"];
sp.splice(1, 1); // from index 1 remove 1 element
console.log( sp ); // ["I", "JavaScript"]

// find()
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let userz = users.find(item => item.id == 1); //finds spcific item in the array with the given condition
  
  console.log("userz: ",userz.name); // John

// filter()
let userss = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = userss.filter(item => item.id < 3);
console.log(someUsers.length); // 2  

// map()
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

// reverse()
let arrz = [1, 2, 3, 4, 5];
arrz.reverse();
console.log( arrz ); // 5,4,3,2,1

//Comparison operators
console.log("true && false",true && false); // logical AND
console.log("true || false",true || false); // logical OR
console.log("!true",!true); // logical NOT

//string methods
let str = 'Widget with id';

console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

let str1 = "stringify";
console.log( str1.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str1.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

//functions
function avg(a,b){
    return (a+b)/2 ; 
}

console.log("Function avg returns",avg(3,5));

//Arrow Functions
let average = (a,b) => (a+b)/2
console.log("average by arrow funcion:",average(2,4));

//only one argument
let show = msg => console.log("this is the message:",msg);
show("Hello");

//No argument
let display = ()=>console.log("display function with no argument");
display();


// if-else ladder
age = 50
if(age<=2){
    console.log("baby");
}
else if(age>2 && age<= 12){
    console.log("Kid");
}
else if(age>12 && age<=19){
    console.log("Teen");
}
else if(age>19 && age<=21){
    console.log("young adult");
}
else {
    console.log("Adult");
}

// var vs let vs const
var tester = "hey hi";
    
function newFunction() {
    var hello = "hello";
}
//console.log(hello); // error: hello is not defined
//var variables can be re-declared and updated

//LET 
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
  // console.log(hello) // hello is not defined

//let can be updated but not re-declared.
//let gre = "say Hi";
//gre = "say Hello instead";

//let gre = "say Hi";
//let gre = "say Hello instead"; // error: Identifier 'greeting' has already been declared

//CONST
//Like let declarations, const declarations can only be accessed within the block they were declared.
//const cannot be updated or re-declared
//const greet = "say Hi";
//greet = "say Hello instead";// error: Assignment to constant variable. 
//const greet = "say Hi instead"; // error: Identifier 'greeting' has already been declared

//FOR Loop 
var arr2 = [23,45,67,89,54];
console.log("Printing arr2 using for loop");
for(var i=0; i<arr2.length;i++){
    console.log(arr2[i]);
}

//ForEach Loop
console.log("Printing arr2 using ForEach loop");
arr2.forEach(function(element){
    console.log(element);
}); 

//WHILE Loop
var arr3 = ["Ketki","Viraj","Saket","Shrey"];
console.log("Using While");
let j = 0 
while(j<arr3.length){
    console.log(arr3[j]);
    j++;
}

//DO WHILE Loop
console.log("Using Do While:");
let k = 0;
do{

    console.log(arr3[k]);
    k++;
}while(k<arr3.length)

// a function triggered when clicked on a button
function clicked(){
    console.log("Clicked invoked: Hello Everyone");
    document.querySelector("span").innerHTML = "<b>Hello everyone</b>";
}

// adding event listner using id of the element 
container1.addEventListener('click',function(){
    console.log("The container is clicked");
})

container2.addEventListener('click',function(){
    //changing html using class name 
    //here the second container's text is changes
    document.getElementsByClassName("container")[1].innerHTML = "<i>The text changed in container 2"; 
})

container1.addEventListener('mouseover',function(){
    console.log("Mouse hovered on container");
})

//Objects in detail
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};

let user1 = {
    name: "John",
    age: 30
  };
  
  //let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  //console.log( user1[key] ); // John (if enter "name")

//Function in object
let obj = {name:"Ketu",age:21};
obj.isGirl = () => {
    console.log("Is girl True");
}
obj.isGirl()
console.log("obj: ",obj);

// this keyword
let obj1 = {name:"k2",no:123}
    function sayHi(){
        console.log("Hi",this.name); //this can be used instead of the name of the object.
    }
obj1.f = sayHi()

// create a function and immediately call it with new
let user2 = new function() {
    this.name = "John";
    this.isAdmin = false;
    console.log("user2 called.",this.name);
    
  };

let p = {job:"yes",good:"yes"};
let q= {job:"yes",good:"no"};
let r = p+q;
console.log("adding objects",r);

//parseInt
console.log("int of 100hello:",parseInt("100hello"));
console.log("int of 16.7:",parseInt("16.7"));
console.log("int of 16.7.3:",parseInt("16.7.3"));

//parseFloat
console.log("float of 16.7.3:",parseFloat("16.7.3"));

let nos = [9,3,2,5];
let sum = 0;
nos.forEach((item,index,array)=>{
    sum = array[index] + sum;
})
console.log("sum of array elem",sum);

// try - catch block
try {
    unknownVariable; // error, variable is not defined!
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
  }


