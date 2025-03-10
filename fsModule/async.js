const fs = require("fs");

const fileName = "asyncText.txt";
const createFile = fs.writeFile(
  fileName,
  "Making the FS Module Async file.",
  "utf-8",
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File Created Successfully");
    }
  }
);
console.log(createFile);

// // // Here, we are getting the Output on Terminal as :-
// // // undefined
// // // File Created Successfully
// // // Therefore, the new file named as asyncText.txt file created and having the content i.e., (Making the FS Module Async file.).



/**
 *
 * fs.writeFile() :- Writes data to a file, replacing the file if it already exists.
 *
 * // ! syntax :- fs.writeFile(path, data, options, callback);
 *
 * // ? path : File path to write to.
 *
 * // ? data : Content to write.
 *
 * // ? options : Optional. Specifies encoding ('utf-8'), mode, or flag.
 *
 * // ? callback : A function with an err parameter.
 *
 */

/////////************************************************************************************** */
////----------------------------------------------------------------------------------------------
/////////************************************************************************************** */
