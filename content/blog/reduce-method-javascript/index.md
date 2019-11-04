---
title: Looking at reduce() in JavaScript
date: "2019-10-28T23:46:37.121Z"
description: "A closer look at the reduce() method in Javascript"
---

After spending some time functional programming, I had come across a few scenarios where the `reduce()` method was the best fit for the job. But when first applying this method in my code, I found it somewhat tricky to get the hang of.

Let's unravel this method...

The `reduce()` method takes a higher order function (that you provide) as an argument and executes it on each element of an array, resulting in a single output value.

```JavaScript
const itemsOnBill = [13.95, 12.65, 18.95, 2.80];

const total = itemsOnBill.reduce((acc, val) => acc + val);

console.log(total);
//> 48.35
```

The breakdown:

The higher order function passed to the `reduce()` method accepts two parameters, an accumulator and a value.

- _the accumulator_, persists a value between invocations of the higher order function. Effectively the method runs over each item in the array, after each iteration, the accumulator is the value returned from the previous iteration.

- _the value_ is the value in the array, the higher order function iterates over every value, much like a for loop.

These are the basic parts of the reduce function but there are other parameters that can be set for more complex functions, such at the starting value.

Let's look at some other working examples:

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

The higher order function has then iterated over all of our items in the array to give us the counted results.

##Calculating The Total Price

Reduce can also allow us to get the total price for a list of cake orders.

```JavaScript
const cakesOrders = [
  {name: 'Chocolate Muffin', quantity: 8, price: 2.95},
  {name: 'Raspberry Swirl', quantity: 2, price: 1.75},
  {name: 'Carrot Cake', quantity: 7, price: 2.45},
  {name: 'Brownie', quantity: 20, price: 1.90}
];

const cakeTotalPrices = cakeOrders.reduce((acc, cake) => {
  return [...acc, { ...cake, total: cake.price * cake.quantity }]
}, []);

console.log(cakeTotalPrices);
/*
[
  {"name":"Chocolate Muffin","quantity":8,"price":2.95,"total":23.6},
  {"name":"Raspberry Swirl","quantity":2,"price":1.75,"total":3.5},
  {"name":"Carrot Cake","quantity":7,"price":2.45,"total":17.15},
  {"name":"Brownie","quantity":20,"price":1.9,"total":38}
]
*/
```

In the example above, I have used an array of objects, this is something we are likely to see in real world data.

We are wanting to find out the total price per cake order.

The higher order function passed to reduce will copy the current accumulator. It will then add a new object which includes a copy of the cake order and a total price key which is the sum of the cake price \* the quantity of cakes requested.

There are many other ways in which the `reduce()` method can be used within Javascript, these are just some examples to get started. But if you would like more information you can visit the following:

- [Youtube - The Coding Train, 16.7: Array Functions: reduce() - Topics of JavaScript/ES6](https://www.youtube.com/watch?v=-LFjnY1PEDA)
- [Egghead - Reduce Data with Javascript Array#reduce ](https://egghead.io/courses/reduce-data-with-javascript-array-reduce)
- and obviously, the documentation: [MDN reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
