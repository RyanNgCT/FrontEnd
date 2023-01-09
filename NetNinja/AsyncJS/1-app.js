console.log(1);
console.log(3);

setTimeout(() => {
    console.log("Callback function fired")
}, 2000);

console.log(5);
console.log(7);

// callback function is added to the "bottom" of the code block -> not seen