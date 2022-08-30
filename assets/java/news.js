let apiToken = "07858fbf6a24ae5c4a99e163daf462d0";
let searchWord = document.getElementById("searchWord");

// fetch(`https://gnews.io/api/v4/search?q=${searchWord}&token=${apiToken}`)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

// wrap api fetch inside a function

const getArticles = function (country) {
  let search = country.replace(/\s/g, "+");

  // format the github api url
  var apiUrl = `https://gnews.io/api/v4/search?q=${search}&token=${apiToken}`;

  // make a request to the url
  fetch(apiUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (data) {
          //   displayArticles(data, country);
          console.log(data);
        });
      } else {
        alert("Error: Country Not Found");
      }
    })
    .catch(function (error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()` method
      alert("Unable to connect to GNews");
    });
};

// wrap search input inside a eventlistener
const formSubmitHandler = function (event) {
  event.preventDefault();

  // get value from input element
  let search = searchWord.value.trim();
  console.log(search);
  if (search) {
    getArticles(search);
    searchWord.value = "";
  } else {
    alert("Please enter a valid Country");
  }
};

$("#search-form").on("submit", formSubmitHandler);
