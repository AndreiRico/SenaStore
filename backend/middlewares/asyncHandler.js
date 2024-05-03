// This is an asynchronous handler function that takes in another function as a parameter.
// It returns a new function that accepts request, response, and next parameters.
// The returned function will execute the provided function (fn) with the request, response, and next parameters.
// If there's a promise rejection during the execution, it will catch the error and send a JSON response
// with a 500 status code and the error message.

const asyncHandler = (fn) => (req, res, next) => {
    // Use Promise.resolve to convert the output of fn(req, res, next) into a promise
    // if it's not already a promise.
    Promise.resolve(fn(req, res, next))
     .catch((error) => {
        // If there's a promise rejection, send a JSON response with a 500 status code
        // and the error message.
        res.status(500).json({ message: error.message });
      });
  };
  
  // Export the asyncHandler function as the default export.
  export default asyncHandler;
  