const a = 10;
console.log(a, typeof a);
localStorage.setItem("variable", a);
console.log(localStorage.variable, typeof localStorage.variable);
const b = localStorage.getItem("variable");
console.log(b, typeof b);
