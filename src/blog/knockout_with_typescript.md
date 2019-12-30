---
path: "/blog/knockout_with_typescript"
date: "2019-12-30"
title: "Knockout with TypeScript"
---

In this article I will gather all patterns which I come across when working with knockout components in TypeScript and how to make them more concise and easier to read.

## Use destructuring when importing knockout

Without destructuring
```ts
import * as ko from "knockout";

const myObservable = ko.observable(5);
const myObservableArray = ko.observableArray(["foo", "bar"]);
const myComputedFunction = ko.computed(() => { return myObservable() + 5; });
```
With destructuting
```ts
import {observable, observableArray, computed} from "knockout";

const myObservable = observable(5);
const myObservableArray = observableArray(["foo", "bar"]);
const myComputedFunction =computed(() => { return myObservable() + 5; });
```

## Use type inference when defining knockout components

```ts
import {observable, observableArray} from "knockout";

const myObservable: KnockoutObservable<number> = observable(5);
const myObservableArray: KnockoutObservableArray<string> = observableArray(["foo", "bar"]);
```

Types can be infered here so it is possible to skip them

```ts
import {observable, observableArray} from "knockout";

const myObservable = observable(5); // type is KnockoutObservable<number>
const myObservableArray = observableArray(["foo", "bar"]); // type is KnockoutObservableArray<string>
```

## Use generics when type cannot be infered

```ts
import {observable} from "knockout";
const randomNumber = require("legacyJsModule");

const myObservable: KnockoutObservable<number | string> = observable(5);
myObservable("foo");

const myObservableArray : KnockoutObservableArray<number> = observableArray([randomNumber(), randomNumber(), randomNumber()]);
```

Using generic code can be more concise

```ts
import {observable} from "knockout";
const randomNumber = require("legacyJsModule");

const myObservable = observable<string | number>(5);
myObservable("foo");

const myObservableArray = observableArray<number>([randomNumber(), randomNumber(), randomNumber()]);
```

## Merge declarations with definitions in classes

This one is can be applied not only to knockout, however I saw a lot of code written in this way.

```ts
class Configuration {
  public isActive: Observable<boolean>;
  public isLoaded: Observable<boolean>;
  
  constructor(params: any) {
    this.isActive = observable(true);
    this.isLoaded = observable(false);
    
    // ... rest of code
  }
}
```
Merging definitions with declarations and using type inference results in:

```ts
class Configuration {
  public isActive = observable(true);
  public isLoaded = observable(false);
  
  constructor(params: any) {
        // ... rest of code
  }
}
```
