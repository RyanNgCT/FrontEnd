const getActivity = async() => {
    const response = await fetch('https://www.boredap.com/api/activity');
    console.log(response);
    if (response.status !== 200){
        throw new Error("Error occurred retrieving specified resource...");
    }
    const data = await response.json();
    return data;
};

getActivity().then(data => {
    console.log(data.activity);
}).catch(error => {
    console.log(error.message);
});
