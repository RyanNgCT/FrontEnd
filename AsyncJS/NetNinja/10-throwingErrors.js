const getTodos = async() => {
    const mresponse = await fetch('todos/mario.json');
    //console.log(mresponse.status);

    if (mresponse.status !== 200){
       throw new Error("Fetch API Call unsuccessful!");
    }
    const mdata = await mresponse.json();
    return mdata;
};

console.log("Test 1");
getTodos()
    .then(data => {
        console.log('resolved: ', data);
    })
    .catch(error => {
        console.log('rejected: ', error.message);
    });

console.log("Test 2");