/* Steps in interacting with API endpoint 
    1. create a request object
    2. Use it to send request to get some data / perform other operations
    3. Track the readystatechange by using an event listener
        3a. check readystatechange status and status codes (as needed)
    4. create a callback function
*/

// callback is taken in as a parameter
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) // check done state
        {
            console.log("Request Completed.\n");
            callback(undefined, request.responseText); // no error, give data.
        }
        else if (request.readyState === 4){
            callback('could not fetch data...', undefined); // error so return error msg, no data to supply.
        }
    });

    request.open('GET', "https://jsonplaceholder.typicode.com/posts/")
    request.send();
};


console.log("Test");

// populate with a callback function
getTodos((error, data) => {
    if (error){
        console.log(error);
    }
    else{
        console.log(data); // retyrns an array of objects
    }
});

console.log("Test 2");

/*
Output: Array of Objects 
========================

[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },

  ...

]

*/