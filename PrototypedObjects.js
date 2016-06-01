/*
* Constructors:
* In Javascript we can create objects through constructors.  Constructors are similar to classes in that multiple instances of the object
* can be instantiated.
*/

// We indicate a constructor by giving the function name a capital first letter
function NewObject() {
	// returns an object
}

// We instantiate a new instance of the object by using the "new" keyword.  
// The function will automatically return an object which contains everything on the "this" object of the function called
var aNewObjectInstance = new NewObject();

// A constructor can return an object containing any data type as a normal JSON object.
function DataObject() {
	this.string = 'string';
	this.number = 1234;
	this.bool = false;
	this.undef = undefined;
	this.nul = null;
	this.nan = NaN;
	this.array = [1, 2, 3, 4];
	this.func = function() {};
	this.obj = {};
}

var aNewDataObject = new DataObject();
aNewDataObject.string;  // 'string'
// etc.

// As with any normal function, we can pass in arguments.  This allows us to make different instances of an object behave differently.

function Welcomer(phrase) {
	this.sayWelcome = function() {
		console.log(phrase);
	}
}

var welcomer1 = new Welcomer('Hello!');
var welcomer2 = new Welcomer('Holla!');

welcomer1.sayWelcome();  // 'Hello!'
welcomer2.sayWelcome();  // 'Holla!'

// Properties can be added to different instances of an object on an individual basis.
welcomer1.newProperty = 'a new prop';
welcomer1.newProperty; // 'a new prop'
welcomer2.newProperty; // undefined

/*
*  Using Prototypes:  
*	Sometimes it is necessary to modify the original constructor in order to add new functionality to all instances of that
*	object.  We can do this by utilizing the prototype attribute of an object.
*/

welcomer1.newMethod();  // method is undefined
welcomer2.newMethod();  // method is undefined

welcomer1.prototype.newMethod = function() { return 'Nice to meet you!'; };

welcomer1.newMethod();  // 'Nice to meet you!'
welcomer2.newMethod();  // 'Nice to meet you!'
