---
title: Immutability with Javascript Arrays
date: "2019-10-15T19:12:03.284Z"
description: "An introduction to immutability within Javascript"
---

## What is immutability?

Immutability is an important principle of functional programming.

> Mutable - liable or subject to change or alteration.

Immutable variables are the opposite of this. They are unchangeable. This means that after they are created their state should not be updated or modified.

## Why should we use it?

Immutability helps us to write cleaner and safer code. If we cannot edit the state of variables or objects in our code, this lessens our chances of getting unexpected results. For this reason, our code also becomes easier to debug. This is because the input if always known, making our workflow more efficient.

Our code also becomes simpler to test. We have a known input and an expected output.

## Immutability in Arrays

Lets say we have a pizza ordering system. Every pizza has the same base made up of bread, tomato and cheese. We can store this is an array. We will need to add the unique ingredients to the order.

So, we could do this in the following way:

```javascript
const pizzaBase = [🥖, 🍅, 🧀];

pizzaBase.push(🍗, 🌽);

console.log(pizzaBase);
//> (4) [🥖, 🍅, 🧀, 🍗, 🌽];
```

However, this has changed the pizzaBase variable. This means, that when the next order comes in, we are starting with the last ingredients. This is going to quickly become confusing!

But writing the code in an Immutable way means that we can use the base. An example of how we can do this is:

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

By using [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) syntax, we are effectively rewriting the array with the extra ingredients added on the end. This means that we are always going to have the same base.

Lets look at another example.

We have a new order coming in, but we firstly will need to edit the base of the pizza as the new customer is lactose in tolerant!

So we could do this by:

```javascript

const pizzaBase = [🥖, 🍅, 🧀];

pizzaBase.splice(2, 1);

console.log(pizzaBase);
//> (2) [🥖, 🍅];

```

However, this means that the next customer will not have cheese on the base of their Pizza.

But we could do this is in a immutable way by:

```javascript

const pizzaBase = [🥖, 🍅, 🧀];

const pizzaOrder3 = pizzaBase.filter(ingredient => ingredient !== 🧀);

console.log(pizzaBase);
//> (3) [🥖, 🍅, 🧀];

console.log(pizzaOrder3);
//> (2) [🥖, 🍅];

```
