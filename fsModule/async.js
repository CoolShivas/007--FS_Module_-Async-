const fs = require("fs");

const fileName = "asyncText.txt";


// const createFile = fs.writeFile(
//   fileName,
//   "Making the FS Module Async file.",
//   "utf-8",
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("File Created Successfully");
//     }
//   }
// );
// console.log(createFile);

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


// const readingFile = fs.readFile(fileName, (err, data) => {
//     if(err)
//     {
//         console.error(err);
//     }
//     else
//     {
//         console.log(data);
//     }
// });
// console.log(readingFile);

// // // //  Here, we are getting the Output on Terminal as :- 
// // // //  undefined
// {/* <Buffer 54 68 69 73 20 66 69 6c 65 20 69 73 20 6d 61 64 65 20 66 6f 72 20 41 73 79 6e 63 20 66 73 20 6d 6f 64 75 6c 65> */}
// // // //  Here, we are getting the output as Buffer because we have not used the utf-8.


//////---------------------------------------------------------------------------------------------------------------------



// const readingFile = fs.readFile(fileName, "utf-8",(err, data) => {
//     if(err)
//     {
//         console.error(err);
//     }
//     else
//     {
//         console.log(data);
//     }
// });
// console.log(readingFile);

// // // Here, we are getting the Output on Terminal as :- 
// // // undefined
// // // Making the FS Module Async file.

// /**
//  *
//  * fs.readFile() :- Reads the contents of a file asynchronously and returns the data as a buffer or string.
//  *
//  * // ! syntax : fs.readFile(path, options, callback)
//  *
//  * // ? path : File path to read from.
//  *
//  * // ? options : Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//  *
//  * // ? callback : A function with parameters (err, data).
//  *
//  */


/////////************************************************************************************** */
////----------------------------------------------------------------------------------------------
/////////************************************************************************************** */




// const updateFile = fs.appendFile(
//     fileName,
//     "\nNew line is added with the help of appendFile.",
//     "utf-8",
//     (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("File Updated Successfully");
//       }
//     }
//   );
//   console.log(updateFile);

//  // // // Here, we are getting the Output on Terminal as :- 
//  // // // undefined
//  // // // File Updated Successfully
//  // // // Therefore, new line added on the file named as asyncText.txt i.e,(New line is added with the help of appendFile.).



//  /**
//  * 
//  * fs.appendFile() :- Appends data to a file. If the file doesn't exit, it is created.
//  * 
//  * // ! syntax : fs.appendFile(path, data, options, callback).
//  * 
//  * 
//  */


// /////////************************************************************************************** */
// ////----------------------------------------------------------------------------------------------
// /////////************************************************************************************** */



const deleteFile = fs.unlink(fileName, (err) => {
    if(err)
    {
        console.error(err);
    }
    else
    {
        console.log("File Deleted Successfully");
    }
})
console.log(deleteFile);

 // // // Here, we are getting the Output on Terminal as :- 
 // // // undefined
 // // // File Deleted Successfully
 // // // Therefore, file named as asyncText.txt is deleted now.


 /***
 * 
 * fs.unlink() :- Deletes a file asynchronoulsy.
 * 
 * // ! syntax : fs.unlink(path, callback).
 * 
 */

/////////************************************************************************************** */
////----------------------------------------------------------------------------------------------
/////////************************************************************************************** */
