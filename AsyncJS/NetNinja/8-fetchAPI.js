// fetch api
// format: fetch(<resource_to_fetch>)

// modify resource as needed
fetch('todos/luigi.json')
    .then(responseData => {
        if (responseData.status == '200'){
            //console.log("Resolved:", responseData); // promise object is returned
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

// Steps:
// 1. fetch the data
// 2. take response and return response.json
// 3. fire a function to retrieve the data