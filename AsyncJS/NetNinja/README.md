# Async JS (The Net Ninja)

## Notes
Steps in interacting with API endpoint:
1. create a request object
2. Use it to send request to get some data / perform other operations
3. Track the readystatechange by using an event listener
    - check readystatechange status and status codes (as needed)
4. create a callback function


### Fetch API (w Promises)

- Synchronous
```js
fetch('<resource_uri>')
    .then(responseData => {
        if (responseData.status == '200'){
            return responseData.json();
        }
        else
            console.log(`Resource not found - ${responseData.status}`);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Rejected: ", error);
});
```

- Asynchronous
```js
const getTodos = async() => {
    const response = await fetch('<resource_uri>');

    if (response.status !== 200){
       throw new Error("Fetch API Call unsuccessful!");
    }
    const mdata = await mresponse.json();
    return mdata;
};

getTodos()
    .then(data => {
        console.log('resolved: ', data);
    })
    .catch(error => {
        console.log('rejected: ', error.message);
    });
```