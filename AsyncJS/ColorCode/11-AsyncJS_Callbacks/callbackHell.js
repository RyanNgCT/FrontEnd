let pizza;
function orderPizza(callsh, preppizza){
    console.log("Order Pizza...");

    setTimeout(() => {
        callsh();
        setTimeout(() => {
            preppizza(pizza);
        }, 2000);
    }, 3000);
    
    console.log(`The pizza was ordered`);
}

function preparePizza(pizza){
    pizza = `🍕`;
    console.log(`${pizza} is ready`);
    console.log(`Eat ${pizza}`); 
}

function callShop(){
    order = `💬`;
    console.log(`Calling shop with order ${order}`);
}


orderPizza(callShop, preparePizza);
console.log("Call friend");