// Oh no, we've been shipwrecked and stranded on an island! The ship's log was destroyed so we'll need to make a new one to keep track of everyone so the rescue team leaves no one behind.
// Write a function that takes in two arguments: a name, which must be a string, their age, which must be a number. 
// Store each person in an object, and story objects in the shipsLog array.  
// Have the array display all entries when the function is called.  
// Include at least 3 entries and print to the console to ensure it works.
var shipsLog = [];
function roleCall(name, age) {
    var entry = {
        name: name,
        age: age
    };
    shipsLog.push(entry);
}
roleCall("First Mate Emily", 25);
roleCall("Captain Kevin", 30);
roleCall("Butternut Cabbagepatch", 40);
console.log(shipsLog);
//Bonus: Some of the people didn't want to share their age.  Update the function so that age isn't a required argument.
