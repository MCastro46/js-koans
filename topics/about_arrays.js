module("About Arrays (topics/about_arrays.js)");

test("array literal syntax and indexing", function() {
    var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal("cellar door", favouriteThings[0], 'what is in the first position of the array?');
    equal(42, favouriteThings[1], 'what is in the second position of the array?');
    equal(true, favouriteThings[2], 'what is in the third position of the array?');
});

test("array type", function() {
    equal("object", typeof([]), 'what is the type of an array?');
});

test("length", function() {
    var collection = ['a','b','c'];
    equal(3, collection.length, 'what is the length of the collection array?');
});

test("stack methods", function() {
    var stack = [];
    stack.push("first");
    stack.push("second");

    equal("first", stack.pop(), 'what will be the first value popped off the stack?');
    equal("second", stack.pop(), 'what will be the second value popped off the stack?');
});

test("queue methods", function() {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal("first", queue.shift(), 'what will be shifted out first?');
    equal("second", queue.shift(), 'what will be shifted out second?');
});
