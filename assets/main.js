// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const table = {
  shade: `white`,
  people: `4`,
  hasWheels: `true`,
  chairs: `4`,
  isFlat: `true`,

}

// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(`Table color is ${table.shade}`);
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const otherTable = {
  shade: `brown`,
  people: `1`,
  hasWheels: `false`,
  chairs: '1',
  isFlat: `false`,
}
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function bothTables(eitherTable) {
  console.log(`The Table is ${eitherTable.shade} and the number of chairs is ${eitherTable.chairs}`);
  return bothTables;
}

bothTables(otherTable);
bothTables(table);
// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.
function modify (changeColor) {
  changeColor.shade = newColor
  console.log(`The new color of the table is ${changeColor.shade}.`)
  return modify;
}

modify(otherTable,"yellow");
modify(table, "orange");
// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const myTables = [table, otherTable]

myTables.map((x) => {
  talkAboutMyCourses (x)
}

)

function talkAboutMyCourses(x) {
  console.log(
    `${anyCourse.title} is a table with ${myTables.chairs}. The table also has, ${myTables.people}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.
