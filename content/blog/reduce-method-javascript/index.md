---
title: Looking at reduce() in JavaScript
date: "2019-10-28T23:46:37.121Z"
description: "A closer look at the reduce() method in Javascript"
---

After spending some time functional programming, I had come across a few scenarios were the `reduce()` method was the best fit for the job. But when first applying this method in my code, I found it somewhat tricky to get the hang of.

Lets unravel this method...

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```JavaScript
const itemsOnBill = [13.95, 12.65, 18.95, 2.80];

const total = itemsOnBill.reduce((acc, val) => acc + val);

return total;
//> 48.35
```

The breakdown:

The `reduce()` method accepts two parameters, an accumulator and a value.

- _the accumulator_, accumulates the callbacks return values. Effectively the method runs over each item in the array, after each iteration, the accumulator is the value returned from the previous iteration.

- _the value_ is the value in the array, the reducer function runs over every value, much like a for loop.

These are the basic parts of the reduce function but there are other parameters that can be set for more complex functions, such at the starting value.

Lets look at some other working examples:

##Tallying an Array Using reduce()

Use this when you have repeated items in an array that you will like to count up. This will return an object.

```JavaScript
const milkshakes = ['banana', 'vanilla', 'vanilla', 'chocolate', 'strawberry', 'vanilla', 'banana', 'banana', 'chocolate', 'strawberry'];

const milkshakeOrder = milkshakes.reduce((tally, milkshake) => {
  tally[milkshake] = (tally[milkshake] || 0) + 1 ;
  return tally;
} , {});

console.log(milkshakeOrder);
//> {banana: 3, vanilla: 3, chocolate: 2, strawberry: 2}
```

In the example above we have an array of milkshake orders. In the milkshake order, we have reduced the list into an empty object.

In the `reduce()` method, we have set the start value to be an empty object.

`tally[milkshake]` then sets the key in our object. If it doesn't exist it will create it and if it does then it will overwrite it.

`(tally[milkshake] || 0) + 1` checks if `tally[milkshake]` exists and gets the value. If it doesn't it returns 0. We then add one to the value.

The reducer function has then iterated over all of our items in the array to give us the counted results.

##Getting The Average

Reduce can also allow us to get the average number from an array of numbers.

```JavaScript
const cakes = [
  {name: 'Chocolate Muffin', quantity: 8, price: 2.95},
  {name: 'Raspberry Swirl', quantity: 2, price: 1.75},
  {name: 'Carrot Cake', quantity: 7, price: 2.45},
  {name: 'Brownie', quantity: 20, price: 1.90}
];

const averageCakePrice = cakes.reduce((acc, cake, index, array) => {
  acc += cake.price;
  return index === array.length - 1 ? (acc / array.length).toFixed(2) : acc;
}, 0);

console.log(averageCakePrice);
//> 2.62
```

In the example above, I have used an array of objects, in the real world, data structures could be far more complex than just a simple array.

We are wanting to find out the average price of a cake.

Firstly, you will notice that I have added two extra parameters to my reduce function.

- _index_ returns the index of the array item.
- _array_ returns the array itself.

The initial value starts at 0. In the first line of the function we are adding the price of the cake to the accumulator and reassigning it to the acc.

In the second line of the function we are checking whether the current index is the same as the length of the array -1. When this is false, we know that the function needs to go through another iteration, so we need to return the accumulator. But when we are on the last iteration, we need to return the average, so when `index === array.length - 1` is true, we need to run `(acc / array.length).toFixed(2)` - this is dividing the total of all of the items in the array and dividing them by however may items there are. All of this is then be rounded to 2 decimal places.

There are many other ways in which the `reduce()` method can be used within Javascript, these are just some examples to get started. But if you would like more information you can visit the following:

- [Youtube - The Coding Train, 16.7: Array Functions: reduce() - Topics of JavaScript/ES6](https://www.youtube.com/watch?v=-LFjnY1PEDA)
- [Egghead - Reduce Data with Javascript Array#reduce ](https://egghead.io/courses/reduce-data-with-javascript-array-reduce)
- and obviously, the documentation: [MDN reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
