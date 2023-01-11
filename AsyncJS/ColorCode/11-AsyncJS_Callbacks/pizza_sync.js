let pizza;
function orderPizza(){
    console.log("Order Pizza...");

    // timeout for 2 secs
    setTimeout(() => {
        pizza = `🍕`;
        console.log(`${pizza} is ready`)
    }, 2000);

    console.log(`The pizza was ordered`);
}

orderPizza();
console.log("Call friend");

// eat is undefined (since console log doesn't wait for the setTimeout to complete)
console.log(`Eat ${pizza}`); 