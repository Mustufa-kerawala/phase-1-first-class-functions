// Creating a function with a parameter of a callback function that will be called when the function is done
function receivesAFunction(callback) {
  // Calling the callback function
  callback();
}

// Creating a function called returnsANamedFunction that returns a named function
function returnsANamedFunction() {
  // Returning a named function
  return function namedFunction() {};
}

// Creating a function called returnsAnAnonymousFunction that returns an anonymous function
function returnsAnAnonymousFunction() {
  // Returning an anonymous function
  return function() {};
}
