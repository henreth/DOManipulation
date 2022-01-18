const data = {
    id: 6,
    authorPlaylist: {
      author: "Dakota Martinez",
      playList: [
        {
          id: 1,
          name: "What'd I Say",
          artist: 'Ray Charles',
          duration: 255,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=HAjeSS3kktA'
        },
        {
          id: 2,
          name: 'Sweet Dreams',
          artist: 'The Eurythmics',
          duration: 216,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=qeMFqkcPYcg'
        },
        {
          id: 3,
          name: 'Cry Me a River',
          artist: 'Justin Timberlake',
          duration: 290,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=DksSPZTZES0'
        },
        {
          id: 4,
          name: 'With a Little Help from my Friends',
          artist: 'Joe Cocker',
          duration: 289,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=a3LQ-FReO7Q'
        },
        {
          id: 5,
          name: 'Bohemian Rhapsody',
          artist: 'Queen',
          duration: 359,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
        },
        {
          id: 6,
          name: 'Somebody To Love',
          artist: 'Queen',
          duration: 309,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=kijpcUv-b8M'
        },
        {
          id: 7,
          name: 'Another One Bites the Dust',
          artist: 'Queen',
          duration: 222,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=eqyUAtzS_6M'
        },
        {
          id: 8,
          name: 'Purple Rain',
          artist: 'Prince',
          duration: 477,
          playCount: 0,
          youtubeLink: 'https://www.youtube.com/watch?v=TvnYmWpD_T8'
        }
      ]
    }
  }

//Iterate through the playlist above and put each song in an individual li that will be a child of the ul with the id="songs". It should have a class of song. 

const dataPlayList = data.authorPlaylist.playList;
dataPlayList.forEach(song=> {
    const songList = document.getElementById('songs');

    const newSong = document.createElement('li');
    newSong.textContent=`${song.name} by ${song.artist}`;
    newSong.className='song';
    songList.appendChild(newSong);
})

//color each song a different color when button with id: song-colorbutton is clicked
const songBtn = document.getElementById('song-colorbutton');
songBtn.addEventListener('click', colorSongs)

function colorSongs(){
    const songList = document.querySelectorAll('.song');
    songList.forEach(song=>song.style.color= generateRandomColor())
    songBtn.remove();
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

// When #song-duration button is clicked, add the following paragraph element after the div with id=songs-placement: 
const durationBtn = document.getElementById('song-duration');
durationBtn.addEventListener('click', addSongLength)

function addSongLength(){
    const songList = document.querySelectorAll('.song');
    console.log(songList)
    const playListLength =dataPlayList.reduce((tot,song)=>{
        return tot+=song.duration;
    },0)
    
    const playListDuration = document.createElement('p');
    const minutes = secondsToMinutes(playListLength);
    const seconds = additionalSeconds(playListLength);
    playListDuration.textContent=`Playlist Duration: ${minutes} mins, ${seconds} secs`;
    playListDuration.id='duration';
    const songPlacement = document.getElementById('songs-placement');

    songPlacement.parentNode.insertBefore(playListDuration,songPlacement.nextElementSibling);
    console.log(playListDuration);
    durationBtn.remove();
}

const secondsToMinutes = (seconds) => {
  return Math.floor(seconds / 60);
}

const additionalSeconds = (seconds) => {
  return seconds % 60;
}