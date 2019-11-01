---
title: Handling Dates with Javascript
date: "2019-10-25T19:12:03.284Z"
description: "A closer look at using date and time in Javascript"
---

## introduction

## The Date Object

To use dates within Javascript we can utilise the `Date` object which is built into Javascript. To initialise it we can write:

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

In the above code, you will notice that the date is returned as a Unix timestamp. This is the number of milliseconds elapsed since 1 January 1970. This may be useful if you are wanting to store the current time in a database in this format.

You can also use the `parse()` method to change a string date into a unix date. For more methods that can be used with a date object, check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

## Code Examples

### Example 1

### Example 2

## Moment.js
