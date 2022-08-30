let apiToken = "07858fbf6a24ae5c4a99e163daf462d0";

fetch('https://gnews.io/api/v4/search?q=example&token=07858fbf6a24ae5c4a99e163daf462d0')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
