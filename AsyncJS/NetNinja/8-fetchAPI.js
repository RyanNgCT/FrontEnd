// fetch api
// format: fetch(<resource_to_fetch>)


// modify resource as needed
fetch('todos/luigis.json')
    .then(responseData => {
        if (responseData.status == '200'){
            // console.log("Resolved:", responseData);
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
