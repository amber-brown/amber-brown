---
title: "Debouncing in Javascript"
date: "2020-06-16T19:12:03.284Z"
description: "Stop excessively invoking functions with debouncing, to help the performance of your application"
---

Invoking functions excessively is costly to performance and can massively slow things down within your application. This is where the programming practise debouncing can help. In plain english what debouncing says is 'Perform this function, but only after x amount of time has passed and the event hasn't been fired since the start of the timer'.

Common scenarios that debouncing are good for include:

- resize events
- scroll events
- typing in a search bar

Even if the functions that you want to perform on these events don't seem costly, calling them continuously can add up and as a result the user will start seeing slowness.

Example:

```javascript
const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

debounce(() => {
  /* insert code */
}, 200)
```

More complex debouncing can be dealt with using [Lodash .\_debounce](https://lodash.com/docs/4.17.15#debounce). Lodash gives us more options including a flush method that will invoke the function immediately and a cancel method that can cancel the delayed function. More can be read in the documentation.
