const getTodos = (resource) => {

    return new Promise((resolve, reject) => 
    {
        const request = new XMLHttpRequest();

        // change eventListener to onload
        request.onload = () => 
        {
            if(request.status === 200)
            {
                const data = JSON.parse(request.responseText); // alt is stringify -> convert to string with '\n's
                resolve(data); // no error, give data.
            }
            else
            {
                reject('could not fetch data...');
            }
        }

    // getting data from local file
    request.open('GET', resource);

    request.send();
    });
};

getTodos('todos/mario.json').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

console.log("Test");


const promiseHelper = () => {

    let promise = new Promise((resolve, reject) => {
        // fetch something (usually)
        let flag = false; // change this flag as needed

        flag ? resolve("some data returned") : reject("some error");
    });
    return promise;
}


promiseHelper().then(data => {
    console.log(data);
}, error => {
    console.log(error);
});

console.log("Test 2");