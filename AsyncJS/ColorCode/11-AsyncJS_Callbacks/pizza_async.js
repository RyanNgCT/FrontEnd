let pizza;
function orderPizza(cb){
    console.log("Order Pizza...");

    // timeout for 2 secs
    setTimeout(() => {
        cb(pizza);
    }, 2000);
    
    console.log(`The pizza was ordered`);
}

function preparePizza(pizza){
    pizza = `🍕`;
    console.log(`${pizza} is ready`);
    console.log(`Eat ${pizza}`); 
}

orderPizza(preparePizza);
console.log("Call friend");