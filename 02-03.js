//1
//Make a function that returns the value multiplied by 50 and increased by 6. 
//If the value entered is a string it should return "Error".
function problem(x) {
    return x = Number() ? (x * 50 + 6) : "Error"
}

console.log(problem(1)) //56
console.log(problem('hei')) // "Error"