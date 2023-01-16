/* Steps in interacting with API endpoint 
    1. create a request object
    2. Use it to send request to get some data / perform other operations
    3. Track the readystatechange by using an event listener
*/

// Step 1
const request = new XMLHttpRequest();

// Step 3
// use event listener to track progress
request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) // check done state
    {
        console.log("Request Completed.\n");
        console.log(request.responseText);
    }
    else if (request.readyState === 4){
        console.log("Could not fetch data...");
    }
});

// Step 2
// open() : sets up the request to be sent
// parameters: HTTP Method, uri
request.open('GET', "https://jsonplaceholder.typicode.com/posts/");

// send() : sends the request
request.send();


// can use onload in place of readyState of 4

// request.onload = () => {
//     if(request.status === 200) // check successful
//         console.log(request, request.responseText);
// }