# jquery-localstorage

this is a jQuery wrapper over localStorage.

## methods

`$.store(obj)`: takes an `object` or `array`, serializes it in JSON, and puts it into localStorage under a randomly generated 15-character string.

`return` values: returns the random 15-character string.

`$.store(obj, key)`: takes an `object` or `array`, serializes it in JSON, and puts it into localStorage under the key.

`return` values: returns an array whose index 0 is the object, and whose index 1 is the key.

`$.get(string)`: takes a string and gets the value from localStorage and parses it as JSON.

`return` values: the rehydrated object from localStorage.

## tests

open up `/test/index.html` to run tests. tests themselves are located at `/test/js/test.js`.
