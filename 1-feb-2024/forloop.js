
// for...in iterates over property names, for...of iterates over property values:

const arr = [3, 5, 7];
arr.foo = "hello";
//in vs of is keys vs values
for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"
console.log("......");
for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
console.log(arr);