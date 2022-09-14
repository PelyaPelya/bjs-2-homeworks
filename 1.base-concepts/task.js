"use strict";
function solveEquation(a, b, c) {
  let arr;

  let d = b ** 2 - 4 * a * c;
  let newArr;
  let firstRoot;
  let secondRoot;

if (d < 0) {
  arr = [];
} else if (d == 0) {
  newArr = -b / (2 * a);
  arr = [newArr];
} else if (d > 0) {
  firstRoot = (-b + Math.sqrt(d)) / (2 * a);
  secondRoot = (-b - Math.sqrt(d)) / (2 * a);
  arr = [firstRoot, secondRoot];
}   
  return arr; // array
}
