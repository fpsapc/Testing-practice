function stringLength(string) {
    // check if the string is at least 1 character long
    if (string.length < 1) {
      throw new Error("String must be at least 1 character long");
    }
  
    // check if the string is not longer than 10 characters
    if (string.length > 10) {
      throw new Error("String must not be longer than 10 characters");
    }
  
    // initialize a counter variable to 0
    let counter = 0;
  
    // loop through each character in the string and increment the counter
    for (let i = 0; i < string.length; i++) {
      counter++;
    }
  
    // return the counter value
    return counter;
  }
  
  module.exports = stringLength;
  