let homeScore = 0 // Initial home score
let homeValue = document.getElementById("home-score")
homeValue.textContent = homeScore

let guestScore = 0
let guestValue = document.getElementById("guest-score")
guestValue.textContent = guestScore


function homeincone(){
  homeScore += 1
  homeValue.textContent = homeScore

}

function homeinctwo(){
homeScore += 2
homeValue.textContent = homeScore
}

function homeincthree(){
  homeScore += 3
  homeValue.textContent = homeScore
}

function guestincone(){
  guestScore += 1
  guestValue.textContent = guestScore
}

function guestinctwo(){
  guestScore += 2
  guestValue.textContent = guestScore
}

function guestincthree(){
  guestScore += 3
  guestValue.textContent = guestScore
}
