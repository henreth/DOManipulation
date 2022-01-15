# Object and DOM Manipulation practice

I got a request to have some practice using a JavaScript object that the JSON from a fetch would resolve to. I wrote this so you could practice on an object without going through the 'fetch' promise chain.

I left my code in the index.js file because I would rather people focus on labs rather than external assignments.  But please look at this and make sure it makes sense to you.  You can delete the code in my index.js to try this yourself, and you may do things differently than I did.  If it works, remember, there are many ways to bake a cake.

Note: I left my console.logs in my index.js file to show how I checked on various steps before continuing to code.

The instuctions in the three parts below are repeated in my index.js file, so you can see these requirements there, as well as my code:

## PART 1:
Please be able to do something like Part 1 in your sleep:

Iterate through the playlist above and put each song in an individual li that will be a child of the ul with the id="songs". It should have a class of song. 

What li should look like:  
```       
<li class="song">Sing Sing Sing by Benny Goodman</li>
```

## PART 2
color each song a different color when button with id: song-colorbutton is clicked

(Please look my code in index.js so this makes sense)
The requirement is a litte vague. My solution assumes the colors in the array length will match the number of songs
in the playerList object above.  You may have other solutions to than this, but I did want to give an example of using a for loop to change properties in a node list.

Instead of an anonymous arrow function, I wrote a named function declaration that will be passed into the event listener as a callback.  This is a preference option.  You can write your callback function in any way that is clear to you.

## PART 3:
When #song-duration button is clicked, add the following paragraph element after the div witw id=songs-placement: 
```
<p id="duration">Duration of PlayList: ${durationTotal} seconds</p>
```



