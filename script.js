let songs = [
	{artistName: "Selena", 
	 songName: 'Dreaming of You',
	 url: "https://od.lk/s/ODNfMTA2NDM1NDU0Xw/selena-dreaming-of-you.mp3"},
	{artistName: "Paramore", 
	 songName: "The Only Exception",
	 url: "https://od.lk/s/ODNfMTA2NDM1NTMwXw/paramore-the-only-exception.mp3"}, 
	{artistName: "Patti LaBelle", 
	 songName: "If You Asked Me To",
	 url: "https://od.lk/s/ODNfMTA2NDM1NTA1Xw/patti-labelle-if-you-asked-me-to.mp3"}, 
	{artistName: "Laura Dreyfuss & Ben Platt", 
	 songName: "Only Us",
	 url: "https://od.lk/s/ODNfMTA2NDM1NDQ4Xw/Laura%20Dreyfuss%20%26%20Ben%20Platt%20-%20Only%20Us.mp3"}, 
	{artistName: "Starship", 
	 songName: "Nothing's Gonna Stop Us Now",
	 url: "https://od.lk/s/ODNfMTA2NDM1NDQzXw/starship-nothings-gonna-stop-us-now.mp3"},
	{artistName: "SheDAISY", 
	 songName: "Before Me and You",
	 url: "https://od.lk/s/ODNfMTA2NDM1NDc0Xw/shedaisy-before-me-and-you.mp3"},
	{artistName: "Rockapella", 
	songName: "A Change in My Life", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTY4Xw/rockapella-a-change-in-my-life.mp3"},
	{artistName: "Rascal Flatts", 
	songName: "Bless the Broke Road", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTIxXw/rascal-flatts-bless-the-broken-road.mp3"},
	{artistName: "Kristin Chenoweth", 
	songName: "You're My Saving Grace", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTM4Xw/kristin-chenoweth-youre-my-saving-grace.mp3"},
	{artistName: "*NSYNC", 
	songName: "Something Like You", 
	url: "https://od.lk/s/ODNfMTA2NDM1NDgwXw/n-sync-something-like-you.mp3"},
	{artistName: "Taylor Swift", 
	songName: "Fearless (Taylor's Version)", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTQ5Xw/taylor-swift-fearless-taylors-version.mp3"},
	{artistName: "Luther Vandross", 
	songName: "Never Too Much", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTM3Xw/luther-vandross-never-too-much.mp3"},
	{artistName: "Monica", 
	songName: "Angel of Mine", 
	url: "https://od.lk/s/ODNfMTA2NDM1NDY0Xw/monica-angel-of-mine.mp3"},
	{artistName: "OMI", 
	songName: "Hitchhiker", 
	url: "https://od.lk/s/ODNfMTA2NDM1NDU3Xw/omi-hitchhiker.mp3"},
	{artistName: "Stevie Wonder", 
	songName: "Knocks Me Off My Feet", 
	url: "https://od.lk/s/ODNfMTA2NDM1NDM1Xw/stevie-wonder-knocks-me-off-my-feet.mp3"},
	{artistName: "Sara Bareilles", 
	songName: "I Choose You", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTc0Xw/sara-bareilles-i-choose-you.mp3"},
	{artistName: "Paul Brandt", 
	songName: "We Are the One", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTcxXw/paul-brandt-we-are-the-one.mp3"},
	{artistName: "Kate Voegele", 
	songName: "Enough For Always", 
	url: "https://od.lk/s/ODNfMTA2NDM1NDk0Xw/kate-voegele-enough-for-always.mp3"},
	{artistName: "Straight No Chaser", 
	songName: "Everyday (sic)", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTYzXw/straight-no-chaser-everyday.mp3"},
	{artistName: "The Home Team", 
	songName: "Walk This World With Me", 
	url: "https://od.lk/s/ODNfMTA2NDM1NTU1Xw/the-home-team-walk-this-world-with-me.mp3"},
	{artistName: "Eric Benet f/ Tamia", 
	songName: "Spend My Life With You", 
	url: "https://od.lk/s/ODNfMTA2NDM1NDg5Xw/eric-benet-spend-my-life-with-you-feat-tamia.mp3"},
	{artistName: "Boyz II Men", 
	songName: "I Do", 
	url: "https://od.lk/s/ODNfMTA2NDM1NDY4Xw/boyz-ii-men-i-do.mp3"}
]

let audio = new Audio(songs[0].url);
let previousButton = document.querySelector('.previous')
let playButton = document.querySelector('.play')
let pauseButton = document.querySelector('.pause')
let nextButton = document.querySelector('.next')
let firstG = document.querySelector(".first-g")
let secondG = document.querySelector(".second-g")
let artist = document.querySelector(".artist")
let song = document.querySelector(".song")
let popUp = document.querySelector('.alert')

let currentSongIndex = 0

const spin = () => {
 firstG.classList.add('spin')
 secondG.classList.add('spin')
}

playButton.addEventListener('click', function(){
	audio.play()
	artist.innerText = currentSong().artistName
	song.innerHTML = currentSong().songName
	spin()
})

pauseButton.addEventListener('click', function(){
	audio.pause()
	firstG.classList.remove('spin')
	secondG.classList.remove('spin')
})

const currentSong = (index) => {
if(index === undefined){
	return songs[currentSongIndex]
} else if (index < songs.length ){
	artist.innerText = songs[index].artistName 
	song.innerHTML = songs[index].songName
 }
}

const nextSong = ()=> {
	newSongIndex = currentSongIndex + 1
	currentSong(newSongIndex)
	if(newSongIndex < songs.length){
		audio.pause()
		audio = new Audio(songs[newSongIndex].url)
		audio.play()
		return currentSongIndex = newSongIndex
	} else {
		popUp.classList.add('pop-up')
		popUp.innerText = "This the last song."
			setTimeout(() => {
			popUp.classList.remove('pop-up')
		}, 1000)
		return currentSongIndex
	}
	
}

const previousSong= () => {
	newSongIndex = currentSongIndex - 1
	if(newSongIndex < 0 ){
		popUp.classList.add('pop-up')
		popUp.innerText = 'This is the first song.'
		setTimeout(() => {
			popUp.classList.remove('pop-up')
		}, 1000)
		return currentSongIndex 
	} else {
		audio.pause()
		currentSong(newSongIndex)
		audio = new Audio(songs[newSongIndex].url)
		audio.play()
		return currentSongIndex = newSongIndex
	}
}

nextButton.addEventListener('click', function(){
 nextSong()
 spin()
})

previousButton.addEventListener('click', function(){
	previousSong()
	spin()
})

audio.addEventListener('ended', function() {
 nextSong()
 spin()
})