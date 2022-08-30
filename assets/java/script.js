let searchInputEl = document.querySelector("#search-bar");
//User text entry for Artist
let artistInput = document.getElementById("searchArtist");
//User text entry for Song name
let songInput = document.getElementById('songInput');

//let client_id = 'RZW6cI7SahSMcoIvDUIzRqkb4LAhMSW4wDBfxbDsXS1CfTnLJTUZcWa1AlHD03Wp'
//let client_secret = 'jhWoIv7gioCmc_dEnUxtv0nJAELUdEsYj3xFv1uH_WFVTiHrcCopr3yD1tmedOcItu123BSyuXXsxB1TAml7aA'
let apiToken= 'K1i8ef3ZhUTwUfB_noiHI4Q6K6NjQXNx8oE8uKYp9iOiutPCcFPrvEm81n3ixg9h'

//User info submit
function handleSubmit(event){
    event.preventDefault();
    const artistInput = document.getElementById("searchArtist").value;
    const songInput = document.getElementById('songInput').value;
    console.log(songInput);
    fetchSongs(songInput);
}

//get lyrics from Gnius
function fetchSongs (songInput) {
    // format the github api url and replace spaces with %20
    const cleanSongInput = songInput.replace(/\s/g, '%20');
    //var apiUrl = "https://api.genius.com/songs/${id}?=${ACCESS_TOKEN}"
    var apiUrl = `https://api.genius.com/search?q=${cleanSongInput}&access_token=K1i8ef3ZhUTwUfB_noiHI4Q6K6NjQXNx8oE8uKYp9iOiutPCcFPrvEm81n3ixg9h`;
    // make a get request to url
    fetch(apiUrl)
      .then((response) => {
        return response.json();})
        //this is where we target what we want
        .then((data) =>{
            console.log(data.response.hits[0].result.artist_names);
        })}

        //error handle request code
    //     // request was successful
    //     if (response.ok) {
    //       console.log(response);
    //       response.json().then(function(data) {
    //         console.log(data);
    //         getSongLyrics(data, song);
    //       });
    //     } else {
    //       alert('Error: Song Lyrics Not Found');
    //     }
    //   })
    //   .catch(function(error) {
    //     alert("Unable to connect to Search Engine");
    //   })
    //     console.log(this)};

      searchInputEl.addEventListener("submit", handleSubmit)