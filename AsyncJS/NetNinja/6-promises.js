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

    // getting data from local file
    request.open('GET', resource)

    request.send();
};

console.log("Test");

// callback within callback
// getTodos('todos/luigi.json', (error, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (error, data) => {
//         console.log(data);
//     });
// });

const promiseHelper = () => {

    let promise = new Promise((resolve, reject) => {
        
    });
    return promise;
}


promiseHelper.then(data => {
    console.log(data);
}, error => {
    console.log(error);
});

console.log("Test 2");