/* While JavaScript acts primarily as a functional language, with most functions operating on a input/output pattern,
 * nearly everything in JavaScript is considered an object.
*/ 

// Basic JS Object Notation (JSON)
var object1 = {
	"propertyName": 'value'
};

// Properties on an object can be accessed using dot notation
object1.propertyName // "value"

// An alternative method for accesing properties is via keys
object1["propertyName"] // "value"

// Keys can be helpful when testing for the existance of a property or when accessing a property containing spaces or special characters
object1["property name with spaces"]  // Not that it is recommended to use such naming conventions.  Camel case is preferred.

// Objects are capable of holding any type of data
var object2 = {
	"string": 'string',
	"number": 1234,
	"boolean": false,
	"undefined": undefined,
	"null": null,
	"NaN": NaN,
	"array": [1, 2, 3, 4],
	"function": myfunc,
	"object": {}
};

// Object property names do not require quotes unless using special characters, though it is important to note that official JSON
// format will utilize the double quotes
var object3 = {
	propertyName = 'value'
};

// While JSON is the primary form of objects in JavaScript, both arrays and functions are also objects, albeit with special designations

var array1 = []; // New empty array
var array2 = [1, 2, 3]; // Initialize array with values

// Arrays have a number of properties and methods to provide built-in ease of use
// A few examples
array1.push('value') // add a value to the end of the array
array1.pop(); // remove a value from the end of the array
array1.length; // how many entries are in the array

// Arrays can hold all of the same types as objects can but are accessed by a 0 based index instead of by property name
var array3 = [
	'string',
	1000,
	true,
	[],
	{},
	myfunc
];
array3[0] // 'string'
array3[1] // 1000
array3[2] // true
array3[3] // []
array3[4] // {}
array3[5] // myfunc

// Functions are a specialized object which contain code blocks that can be initiated on command
function myFunction() {
	// do something
}
myFunction(); // something is done

// Since functions are objects, they can be assigned to a variable like anything else
var myFunctionVar = myFunction;  // Note that to assign the function we don't use (), doing so would assigne the return value to the function

// Function do not need to be declared with a name
// This is called an anonymous function and must be assigned to a variable in order to be reused.
var anonymousFunction = function() {

};

// Functions can be passed arguments of any type
function argumentFunction(argument1, argument2) {
	console.log(argument1);
	console.log(argument2);
}
argumentFunction('hello', 1); // Will log 'hello' and 1

// Functions can return values
function returnValueFunction() {
	return 'hello world';
}
var returnValue = returnValueFunction(); // We call the function here
console.log(returnValue); // Will log 'hello world'
