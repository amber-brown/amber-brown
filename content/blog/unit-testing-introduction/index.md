---
title: Looking at reduce() in JavaScript
date: "2021-01-01T09:00:00.000Z"
description: "Introduction to Unit Testing"
---

##What is a unit test?

A unit test is a software testing method that tests small units or components in isolation. Their purpose is to validate the code under test.

##Why unit test?

1. Regression

When adding a new feature, failing unit tests can alert the programmer to any code that has regressed, allowing them to rectify the issue and prevent new bugs from going into production.

2. Acts as documentation

Unit tests contain descriptions that are 'human-readable.' Programmers coming to an existing codebase are able to get a better understanding of existing code by looking at the unit tests.

3. Code quality

When writing a new feature with unit tests, the programmer is encouraged to think about writing code that is easy to test.

Some developers write unit tests first, using a method called TDD (Test Driven Development). In TDD a programmer writes a failing test, then writes implementation code as quickly as possible to make the test pass. With passable code, the programmer can then look at refactoring the code, using the passing test as confirmation that the edited code still works as intended.

Of course, this is not the only method for writing code. Many programmers write the implementation code first. When they are satisfied their code works as intended, they can write a unit test to validate it.

##Conclusion

Unit testing should be a fundamental part of any software developer's job. It helps prevent bugs and can make code more robust. The whys of unit testing should be reflected upon while writing a unit test. Some questions to ask yourself when writing unit tests:

- Is my unit test descriptive? Does it accurately reflect what my new feature does?
- Are the tests covering the new feature? If any code was removed would the test fail?
- Have I broken the feature down in a way that makes it easy to unit test?
