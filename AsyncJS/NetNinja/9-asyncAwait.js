/* Using async and await allows:
    - section of code to an asynchronous function
    - use await keyword to chain promises
*/

// async function always returns a Promise (non-blocking function)
const getTodos = async() => {

    /* Previous format: 
    ===================
        fetch( ... )
            .then( ... )
            .then( ... )
            .catch( ... );
    */

    // Cleaner Method than tacking on .then() at the end of the fetch API

    // only store resource only after the promise is resolved (response object returned)
    const lresponse = await fetch('todos/luigi.json');
    
    const ldata = await lresponse.json();

    // console.log(data);

    const mresponse = await fetch('todos/mario.json');
    const mdata = await mresponse.json();

    // return two or more promises in an array (for one can just return single variable)
    return [ldata, mdata];
}

// Promise in the pending state
// const test = getTodos();
// console.log(test);

console.log("Test 1");
getTodos()
    .then(data => {
        console.log(data[0], data[1]);
    });

console.log("Test 2");
