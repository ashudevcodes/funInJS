console.log(clickMe)

let timesToEnter = 0

aaMemeSound = new Audio("aaMemeAudio.mp3")
baaMemeAudio = new Audio("baaMemeAudio.mp3")
ohMyGodMemeAudio = new Audio("ohMyGodMemeAudio.mp3")
gotYou = new Audio("gotYou.mp3")


function playSound(sound) {
  sound.currentTime = 0
  sound.preservesPitch = false
  sound.play()
}


const eventTable = [
  {
	onCount: 0,
	action: () => {
	  playSound(aaMemeSound)
	  playCount.innerText = `Aaaaaaaaaaaa!! ${timesToEnter}`
	},
  },
  {
	onCount: 5,
	action: () => {
	  playSound(ohMyGodMemeAudio)
	  playCount.innerText = `Oh My God!! ${timesToEnter}`
	},
  },
  {
	onCount: 8,
	action: () => {
	  playSound(gotYou)
	  playCount.innerText = `Got You Homie!! ${timesToEnter}`
	}
  },
  {
	onCount: 10,
	action: () => {
	  playSound(aaMemeSound)
	  playCount.innerText = `Aaaaaaaaaaaa!! ${timesToEnter}`
	}
  },
]

eventTable.sort((a, b) => b.onCount - a.onCount);

clickMe.onmouseenter = () => {
  timesToEnter +=1
  for (const event of eventTable){
	if (event.onCount <= timesToEnter) {
	  event.action()
	  break
	}
  }
}

clickMe.onmouseleave = () => {
  console.log("sayonara!")
  baaMemeAudio.currentTime = 0 
  baaMemeAudio.play()
}
