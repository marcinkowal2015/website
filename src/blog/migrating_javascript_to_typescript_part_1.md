---
path: "/blog/migrating_javascript_to_typescript_part_1"
date: "2019-12-30"
title: "Migrating JavaScript to TypeScript part 1"
---

In this serie of articles I will show how to rewrite JavaScript code, written in ES5 to TypeScript.

Before classes were available in JavaScript, people used constructor functions to achieve similar behavior as was possible with classes in languages like C# and Java. An example of such 'JavaScript class' could look like:

``` js
function Logger(name) {
  var self = this;
  self.name = name;
  self.changeName = function(newName) {
    self.name = newName;
  };
}

Logger.prototype = {
  logWithName: function(message) {
    var self = this;
    console.log(self.name + ": " + message);
  },

  logWithoutName: function(message) {
    console.log(message);
  }
};

var myLogger = new Logger("testing logger");

myLogger.logWithName("foo"); //console output -> testing logger: foo 
myLogger.logWithoutName("bar"); //console output -> bar 
```

In this example we have a constructor function(class) which takes one argument, and have 3 properties. One string property, which is name and 3 functions, one defined inside constructor function and two of them defined on prototype.

As a first step, lets focus on just constructor function, we will get back to prototype later. Our constructor function in TypeScript can be defined as a class, so let's write class definition for a Logger:

``` ts 
class Logger {}
```

Our logger takes one argument in constructor: name. Assuming that we don't know what is a type of name, we can just write it with _any_ type:

```ts
class Logger {
  constructor(name: any) {}
}
```

However in this case, we know and want name to be only a string, so we will define name as a string:

```ts
class Logger {
  constructor(name: string) {}
}
```

Now let's take a look what is happening inside of constructor body. Two properties are initialized, _name_ which is just an argument from constructor, and simple function to change _name_ value. Important thing to note is that we are capturing _this_ value to variable name called _self_ which then is used across all constructor, however in TypeScript we don't need to do that, but we need to be aware how to change syntax to have same behavior. Let's start with name property, in TypeScript we need to define all properties which are on class:

```ts
class Logger {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

Next property is function changeName, so following pattern from name property we could write:

```ts
class Logger {
  public name: string;
  public changeName: (newName: string) => void;
  constructor(name: string) {
    this.name = name;
    this.changeName = function(newName: string) {
      this.name = newName;
    }
  }
}
```

But remember when in JavaScript we used _self_ value to bind _this_? Here we do not do that, so this won't be correct and behavior will be different for this example.

#### JavaScript:
```js
var myLogger = new Logger("Working logger");
var changeNameOfMyLogger = myLogger.changeName;

changeNameOfMyLogger("Working logger with changed name");

console.log(myLogger.name); //console output -> Working logger with changed name
```

#### TypeScript:
```ts 
const myLogger = new Logger("Not working logger");
const changeNameOfMyLogger = myLogger.changeName;

changeNameOfMyLogger("This name will not work :(");

console.log(myLogger.name); //console output -> TypeError: Cannot set property 'name' of undefined
```

To fix that we have to either bound _this_ value to some variable and then use it in _changeName_ function, or use syntax for arrow function which is just doing that.

```ts
class Logger {
  public name: string;
  public changeName: (newName: string) => void;
  constructor(name: string) {
    this.name = name;
    this.changeName = (newName: string) => {
      this.name = newName;
    }
  }
}
```

Now the class is working as in JavaScript, but still we do some improvements to make code more concise. We can marge definition and initialization of changeName function as it does not rely on anything passed in constructor:

``` ts
class Logger {
  public name: string;
  public changeName = (newName: string) => {
      this.name = newName;
  };
  constructor(name: string) {
    this.name = name;
  }
}
```

And for the name property we can use _parameter property_ and write it like that:

```ts
class Logger {
  public changeName = (newName: string) => {
      this.name = newName;
  };
  constructor(public name: string) {}
}
```

Now the only thing which is left is to rewritte methods which were defined in prototype. To do so, we will define them outside of constructor, and as we are using TypeScript we will use access modifiers and types.

```ts
class Logger {
  public changeName = (newName: string) => {
      this.name = newName;
  };
  constructor(public name: string) {}
  
  public logWithName(message: string) {
    console.log(this.name + ": " + message);
  }
  
  public logWithoutName(message: string) {
    console.log(message);
  }
}
```