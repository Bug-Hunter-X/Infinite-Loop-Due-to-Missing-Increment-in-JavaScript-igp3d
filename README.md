# Infinite Loop Bug in JavaScript

This repository demonstrates a common error in JavaScript: an infinite loop caused by forgetting to increment the loop counter.  The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version.

## Bug Description

The original code attempts to iterate through numbers 0-9 using a `while` loop. However, the `i++` statement is missing, which leads to an infinite loop because the condition `i < 10` will always be true.  This results in a stack overflow error in most JavaScript environments.

## Solution

The solution in `bugSolution.js` simply adds the missing `i++` statement to properly increment the counter and exit the loop.