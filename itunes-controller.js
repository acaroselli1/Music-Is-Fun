function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here


  function drawSongs(songList) {
    var template = ''
    var songElem = document.getElementById('song-list')

    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      template += `
    
      <div class ="col-xs-3 item">
        <div class = "card" >
           <img class="card-img-top"  src="${song.albumArt}" alt="card cap"> 
           <div class="card-block">
               <p class ="card-title song-title">${song.title}</p>
               <p class ="artist">${song.artist}</p>
               <p>${song.collection}</p>
               <p>${song.price}</p>
          </div>
        </div>
           <audio  id ="audio-source" src= "${song.preview}"></audio> 
          <p> <audio controls id="audio-player"> <source id ="audio-source" src= "${song.preview}" type ="audio/mpeg"></audio></p>
         </div>
     
      `
    }
    songElem.innerHTML = template
  }
  
  
 }
  
  

