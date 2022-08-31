let newsToken = "07858fbf6a24ae5c4a99e163daf462d0";
let searchWord = document.getElementById("searchArtist");
const articlesContainerEl = document.querySelector("#articlesBox");

// wrap search input inside a eventlistener
const formSubmitHandler = function (event) {
  event.preventDefault();
  // get value from input element
  let search = searchWord.value.trim();
  console.log(search);
  if (search) {
    getArticles(search);
    displayArticleCard(search);
    searchWord.value = "";
  } else {
    alert("Please enter an Artist");
  }
};

// wrap api fetch inside a function
const getArticles = function (data) {
  let search = searchWord.replace(/\s/g, "+");

  // format the github api url
  var apiUrl = `https://gnews.io/api/v4/search?q=${search}&token=${newsToken}`;

  // make a request to the url
  fetch(apiUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (search) {
          console.log(search);
          displayArticleCard(search);
        });
      } else {
        alert("Error: Articles Not Found");
      }
    })
    .catch(function (error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()` method
      alert("Unable to connect to GNews");
    });
};

// // append the articles here 
// const renderArticleData = (search) => {
//   const articlesContainerEl = $("#articlesBox");
//   const articleCard = $("<div>")
//     .attr("id", "article-card")
//     .addClass("card p-4 m-4 w-40 is-two-thirds");
//   const articleTitle = search.title;
//   const articleDesc = $("<p>").text(search.description).addClass("is-size-3");
//   // const articleSrc = $("<h4>").text(search.source.name);
//   // const articleUrl = search.source.url;

//   articleCard.append(
//     articleTitle,
//     articleDesc,
//     // articleSrc
//   );
  
//   articlesContainerEl.append(articleCard);
// };
function displayArticleCard(userSearch) {
  let hits = search.response.hits.length;
    for (let i = 0; i < hits; i++){
        relatedArticlessArr.push(data.response.hits[i].result)
    };

  let articlesContainer = document.getElementById('article-card-container');

  const articleCard = document.createElement('div');
  articleCard.classList.add('song-card', "column", "is-12","is-mobile");

  const articleTitle = document.createElement('h3');
  articleTitle.classList.add('song-title');
  songTitle.innerText = relatedArticlesArr[i].title;//put array obj data here

  const articleSrc = document.createElement('h4');
  articleSrc.classList.add('song-artist');
  articleSrc.innerText = relatedArticlesArr[i].source.name.url;//put array obj data here

  articlesContainer.appendChild(articleCard);
  articleCard.appendChild(articleTitle);
  articleCard.appendChild(songArtist);
  articleCard.appendChild(albumArt);
}

$("#search-form").on("submit", formSubmitHandler);

