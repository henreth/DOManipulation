
const api = {
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
/* 
PART 1:
Please be able to do something like Part 1 in your sleep:
Note: I left my console.logs to show how I checked on various steps before continuing to code.

Iterate through the playlist above and put each song in an individual li that will be a child of the ul with the id="songs". It should have a class of song. 

What li should look like:         
<li class="song">Sing Sing Sing by Benny Goodman</li> */
const apiPlayList = api.authorPlaylist.playList

apiPlayList.forEach(song => {
  const ul = document.querySelector('#songs')
  const li = document.createElement('li')
  li.classList.add('song')
  li.textContent = `${song.name} by ${song.artist}`

  console.log(li)

  ul.appendChild(li)
})

//PART 2
//color each song a different color when button with id: song-colorbutton is clicked

//The requirement is a litte vague. My solution assumes the colors in the array length will match the number of songs
//in the playerList object above.  You may have other solutions to than this, but I did want to give an example of using a for loop to change properties in a node list.

//Instead of an anonymous arrow function, I wrote a named function declaration that will be passed inot the event listener as a callback.  This is a preference option.  You can write your callback function in any way that is clear to you.
function colorSongs() {
  colors = ['#8B008B', '#9400D3', '#FF1493', 'DodgerBlue', 'Indigo', 'LawnGreen', 'Green', 'FireBrick']


  const allSongsNodeList = document.querySelectorAll('.song')

  console.log(allSongsNodeList)

  for(let i = 0; i < colors.length; i++) {
    allSongsNodeList[i].style.color = colors[i];
  }

  colorButton.remove()
}

//add event listener to button
const colorButton = document.getElementById('song-colorbutton')
colorButton.addEventListener("click", colorSongs)

//PART 3: Challenge
//When #song-duration button is clicked, add the following paragraph element after the div with the id songs-placement: <p id="duration">Duration of PlayList: ${durationTotal} seconds</p>
const durationButton = document.getElementById('song-duration')
durationButton.addEventListener('click', () => {
  //get the duration value in seconds
  const durationTotal = apiPlayList.reduce((total, song) => {
    return song.duration + total
  }, 0)

  console.log(durationTotal)

  //create duration element
  const durationPara = document.createElement('p')
  durationPara.setAttribute('id', 'duration')
  durationPara.textContent = `Duration of Dakota's PlayList: ${durationTotal} seconds`

  console.log(durationPara)

  //put duration paragraph after the song-placement div
  const sibling = document.querySelector('#songs-placement')  //get sibling element
  sibling.insertAdjacentElement("afterend", durationPara);

  durationButton.remove()
})


