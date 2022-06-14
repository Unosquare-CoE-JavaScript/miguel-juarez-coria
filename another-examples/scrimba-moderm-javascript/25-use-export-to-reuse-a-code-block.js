/**
 * Example of how export functions and const's
 *
 */

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };  //Exporting la function

export const foo = "bar"; //Also exporting the const "foo"
export const bar = "foo"; //Also exporting the const "bar"