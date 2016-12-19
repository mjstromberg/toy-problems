/*
 *
 * The Fibonacci sequence begins with 'fibonacci(0) = 0' and 'fibonacci(1) = 1' as its respective
 * first and second terms. After these first two elements, each subsequent element is equal to
 * the sum of the previous two elements.
 *
 * Here is the basic information you need to calculate 'fibonacci(n)':
 * 'fibonacci(0) = 0'
 * 'fibonacci(1) = 1'
 * 'fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)'
 *
 * Given 'n', complete the fibonacci function so it returns 'fibonacci(n)'.
 *
 * 'n' will be greater than 0 and less than 40.
 * 
 */

var fibonacciNumbers = function fibonacciNumbers(n) {
  if (n === 0) { return 0; }
  if (n === 1) { return 1; }
  return fibonacciNumbers(n - 1) + fibonacciNumbers(n - 2);
};
