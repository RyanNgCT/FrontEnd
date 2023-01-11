/* Steps in interacting with API endpoint 
    1. create a request object
    2. Use it to send request to get some data / perform other operations
    3. Track the readystatechange by using an event listener
        3a. check readystatechange status and status codes (as needed)
    4. create a callback function
*/

/* JSON Rules
    - Keys and values have to be surrounded in double quotes (for string values)
    - For numbers/integers, then it does not need to be wrapped in double quotes
*/

// callback is taken in as a parameter
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    // change eventListener to onload
    request.onload = () => {
        if(request.status === 200){
            const data = JSON.parse(request.responseText) // alt is stringify -> convert to string with '\n's
            callback(undefined, data); // no error, give data.
        }
        else{
            callback('could not fetch data...', undefined);
        }
    }

    // getting data from remote file (remote json data)
    //request.open('GET', "https://jsonplaceholder.typicode.com/posts/")

    // getting data from local file
    request.open('GET', './todos/todos.json')

    request.send();
};


console.log("Test");

// populate with a callback function
getTodos((error, data) => {
    if (error){
        console.log(error);
    }
    else{
        console.log(data)
    }
});

console.log("Test 2");

/*
Returns an array of objects
*/