var getSongLyrics= function(song) {
    // format the github api url
    //var apiUrl = "https://api.genius.com/songs/${id}?=${ACCESS_TOKEN}"
  

    var apiUrl = "https://api.genius.com/search?q=LUMBERJACK&access_token=K1i8ef3ZhUTwUfB_noiHI4Q6K6NjQXNx8oE8uKYp9iOiutPCcFPrvEm81n3ixg9h"

    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            getSongLyrics(data, song);
          });
        } else {
          alert('Error: Song Lyrics Not Found');
        }
      })
      .catch(function(error) {
        alert("Unable to connect to Search Engine");
      });
  };