
let searchInputEl = document.querySelector("#search-bar");
//User text entry for Artist
let artistInput = document.getElementById('artistInput');
//User text entry for Song name
let songInput = document.getElementById('songInput');
//Server that site will be hosted on
let redirect_uri = "http://127.0.0.1:5500/index.html";
//Spotify auth numbers
let client_id = "63d3486515dc43269b27ab2aa50b79f2";
let client_secret = "313a1d1dbd4149069b2c051fb49e2e1a";
// Authorize url
const authorize = "https://accounts.spotify.com/authorize"
//Create an an array for Recent Searches

//Store User Search Input in local storage for later use

//request authorization from spotify
function requestAuthorization(){

    let url = authorize;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played user-top-read playlist-modify-public"
    window.location.href = url; //Show Spotify's authorization screen
}

 var getlyrics = function(event) {
    event.preventDefault();
    //get info for artist and song via url/xml
    let apiUrl =''
    console.log(apiUrl);


      
  
//Save code for later reference / might be junkcode
//     //make a request to the url
//     then(function(response){
//         //request was successful
//         if (response.ok){
//         response.json().then(function(data){
//             displaySongs(data, artistInput, songInput);
//         });
//     } else {
//         alert("Error: Song Not Found");
//     }
//     })
//     .catch(function(error){
//         //Notice this '.catch()' getting chained to the end of the '.then()' method
//         alert("Unable to establish a connection")
//     })
 
 };
//function to accept both the array of response data and the term we searches as parameters
var displaySongs = function(songs, searchTerm) {

    //check if api returned any repos
    if (songs.length === 0) {
        songContainerEl.textContent = "No songs found.";
        return;
    }
    console.log (songs);
    console.log(searchTerm);

    //clear old content
    songContainerEl.textContent= "";
    songSearchTerm.textContent= searchTerm;

    //loop over repos
    for (var i=0; i< songs.length; i++){
        //format song name
        var songName=repos[i].owner.login + "/" + repos[i].name;

        //create containers for each repo
        var songEl = document.createElement("div");
        songEl.classlist = "list-item flex-row justify-space-between align-center";

        //create span element to hold repo name
        var titleEl=document.createElement("span");
        titleEl.textContent = songName;

        //append to container
        songEl.appendChild(titleEl);

        //append container to the dom
        songContainerEl.appendChild(songEl);
    }
};
function btnCheck(event){
    event.preventDefault();
console.log(artistInput.value);
console.log(songInput.value);
}
searchInputEl.addEventListener("submit", getlyrics)