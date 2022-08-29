
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
const authorize = "https://accounts.spotify.com/authorize";
//Token req Url
const TOKEN = "https://accounts.spotify.com/api/token";

function onPageLoad(){
    if (window.location.search.length > 0){
        handleRedirect();
        
    }
};

function handleRedirect(){
    let code = getCode();
    fetchAccessToken(code);
    window.history.pushState(",", redirect_uri);
}

function fetchAccessToken(code){
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI(redirect_uri);
    body += "&client_id=" + client_id;
    body += "&client_secret=" + client_secret;
    callAuthorizationApi(body);
}

function callAuthorizationApi(body){

    let xhr = new XMLHttpRequest();
     xhr.open("POST", TOKEN, true);
     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
     xhr.setRequestHeader('Authorization', 'Basic' + btoa(client_id + ":" + client_secret) );
     xhr.send(body);
     xhr.onload = handleAuthorizationResponse;
    // const APIController = (function(){
    //     const getToken = async () =>{
    //         const result = await fetch(TOKEN, {
    //             method: 'POST',
    //          headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 'Authorization': 'Basic' + btoa(client_id + ":" + client_secret)
    //             },
    //             body: 'grant_type=client_credentials'
    //         });
    //         const data = await result.json();
    //         return data.access_token;
    //     }});
    
}

function handleAuthorizationResponse(){
    if(this.status = 200){
        var data = JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if (data.access_token != undefined){
            access_token = data.access_token;
            localStorage.setItem("access_token", access_token);
        }
        if(data.refresh_token !=undefined){
            refresh_token = data.refresh_token;
            localStorage.setItem("refresh_token", refresh_token);
        }
        onPageLoad();
    }else{
        console.log(this.responseText);
        alert(this.responseText);
    }

}
//
    function getCode(){
        let code = null;
         
        const queryString = window.location.search;
        if (queryString.length > 0){
         const urlParams = new URLSearchParams(queryString);
            code = urlParams.get('code')
        }
            return code;
    }
   

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



//function to accept both the array of response data and the term we searches as parameters
// var displaySongs = function(songs, searchTerm) {

//     //check if api returned any repos
//     if (songs.length === 0) {
//         songContainerEl.textContent = "No songs found.";
//         return;
//     }
//     console.log (songs);
//     console.log(searchTerm);

//     //clear old content
//     songContainerEl.textContent= "";
//     songSearchTerm.textContent= searchTerm;

//     //loop over repos
//     for (var i=0; i< songs.length; i++){
//         //format song name
//         var songName=repos[i].owner.login + "/" + repos[i].name;

//         //create containers for each repo
//         var songEl = document.createElement("div");
//         songEl.classlist = "list-item flex-row justify-space-between align-center";

//         //create span element to hold repo name
//         var titleEl=document.createElement("span");
//         titleEl.textContent = songName;

//         //append to container
//         songEl.appendChild(titleEl);

//         //append container to the dom
//         songContainerEl.appendChild(songEl);
//     }
// };
// function btnCheck(event){
//     event.preventDefault();
// console.log(artistInput.value);
// console.log(songInput.value);
// }
// searchInputEl.addEventListener("submit", getlyrics)