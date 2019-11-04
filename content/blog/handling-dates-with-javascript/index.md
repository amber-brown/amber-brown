---
title: Handling Dates with Javascript
date: "2019-10-25T19:12:03.284Z"
description: "An introduction into using date and time in Javascript and moment.js"
---

## The Date Object

To use dates within Javascript we can utilise the `Date` object. To initialise it we can write:

```javascript
const now = new Date()

console.log(now)
//> Sat Oct 26 2019 16:50:32 GMT+0100 (British Summer Time)
```

Initialising the `Date` object without any arguments will return an object with the current date and time. Note that to create a date object, the keyword `new` must be used, otherwise a string will be returned.

There are a number of methods that can be used on the `Date` object. For example, we can also get the current date using the `now()` method like in the example below:

```javascript
const now = Date.now()

console.log(now)
//> 1572105039416
```

In the above code, you will notice that the date is returned as a Unix timestamp. This is the number of milliseconds elapsed since the 1st January 1970. This may be useful if you are wanting to store the current time in a database in this format.

You can also use the `parse()` method to change a string date into a date object. For more methods that can be used with a date object, check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

## Moment.js

To help manage dates in the browser and in node.js, you can use the [moment.js](https://momentjs.com/) library. Moment.js builds on top of the Javascript Date functionality and includes many convenience functions.

For more information on the use of moment.js you can view this [cheatsheet](https://devhints.io/moment).
