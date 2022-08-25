let artistInputEl = document.querySelector("#search-bar");

var getSongs = function(artist,title) {
    //format the github api url
    var apiUrl= "https://api.lyrics.ovh/v1/artist/" + artist + "/title" + title

    //make a request to the url
    fetch(apiUrl).
    then(function(response){
        //request was successful
        if (response.ok){
        response.json().then(function(data){
            displaySongs(data, artist,title);
        });
    } else {
        alert("Error: Song Not Found");
    }
    })
    .catch(function(error){
        //Notice this '.catch()' getting chained to the end of the '.then()' method
        alert("Unable to establish a connection")
    })
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
console.log("Button works");
}
artistInputEl.addEventListener("submit", btnCheck)