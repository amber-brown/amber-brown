---
title: Immutability with Javascript Arrays
date: "2019-10-15T19:12:03.284Z"
description: "An introduction to immutability within Javascript"
---

## What is immutability?

> Immutable - unchanging over time or unable to be changed.

Immutability is an important principle of functional programming. Once an object or variable has been created, it should never change. If something about the variable or object needs to change, a copy should be taken, leaving the original state unaltered.

## Why should we use it?

Immutability helps us to write cleaner and safer code. If we cannot edit the state of variables or objects in our code, this lessens our chances of getting unexpected results. For this reason, our code also becomes easier to debug, test and predict.

## Immutability in Arrays

Let's say we have a pizza ordering system. Every pizza has the same base made up of bread, tomato, and cheese. A customer will choose their unique toppings for their pizza order.

The base never changes so we can store this in an array, we could then add the ingredients in the following way:

```javascript
const pizzaBase = [🥖, 🍅, 🧀];

pizzaBase.push(🍗, 🌽);

console.log(pizzaBase);
//> (4) [🥖, 🍅, 🧀, 🍗, 🌽];
```

However, this has changed the `pizzaBase` variable. This means, that when the next order comes in, we are starting with the last ingredients. This is going to become confusing!

But writing the code in an immutable way means that we can use the base for all future orders. Look at the following example:

```javascript
const pizzaBase = [🥖, 🍅, 🧀];

const pizzaOrder1 = [...pizzaBase, 🍗, 🌽];
const pizzaOrder2 = [...pizzaBase, 🍤];

console.log(pizzaBase);
//> (3) [🥖, 🍅, 🧀];

console.log(pizzaOrder1);
//> (5) [🥖, 🍅, 🧀, 🍗, 🌽];

console.log(pizzaOrder2);
//> (4) [🥖, 🍅, 🧀, 🍤];
```

By using [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) we can take a copy of the array and add the extra ingredients without mutating the `pizzaBase` variable.

Let's look at another example.

We have a new order coming in, but the new customer is lactose intolerant! We need to remove the cheese from the pizza base.

We could do this by:

```javascript

const pizzaBase = [🥖, 🍅, 🧀];

pizzaBase.splice(2, 1);

console.log(pizzaBase);
//> (2) [🥖, 🍅];

```

However, this means that the next customer will not have cheese on the base of their Pizza. We can take away the pizza in an immutable way like this:

```javascript

const pizzaBase = [🥖, 🍅, 🧀];

const pizzaOrder3 = pizzaBase.filter(ingredient => ingredient !== 🧀);

console.log(pizzaBase);
//> (3) [🥖, 🍅, 🧀];

console.log(pizzaOrder3);
//> (2) [🥖, 🍅];

```

The above examples are ways to write Javascript in an immutable way. However, Javascript as a language is very flexible and does not adopt this technique by default. There are libraries that can help enforce immutability such as [immutable.js](https://immutable-js.github.io/immutable-js/docs/#/)
