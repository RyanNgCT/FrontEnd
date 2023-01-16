// instances of callbackHell (triangle of doom)
// -> Use data returned from 1st API request (response of first API) to retrieve data from 2nd API

const getTodos = (resource, callback) => {
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
    // request.open('GET', "https://jsonplaceholder.typicode.com/posts/")

    // getting data from local file
    request.open('GET', resource)

    request.send();
};


console.log("Test");


// populate with a callback function
// getTodos(path, (error, data) => {
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(data)
//     }
// });


// callback within callback
getTodos('todos/luigi.json', (error, data) => {
    console.log(data);
    getTodos('todos/mario.json', (error, data) => {
        console.log(data);
    });
});


console.log("Test 2");