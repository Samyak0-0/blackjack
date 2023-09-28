
let hasBlackJack = false
let isAlive = false
let sum = 0
let cards = []

let player = {    
   name: "Chips",
   chips: 145
   // here name is key and value is Samyak
}


let message = ""
let messageEl = document.getElementById("msg-el")
let SumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
// query selector
let scoreEl = document.querySelector("#score-el")
scoreEl.textContent = player.name + ": $" + player.chips

function startGame() {
   isAlive = true
   firstCard = getRandomCard()
   secondCard = getRandomCard()
   sum = firstCard + secondCard
   cards = [
   firstCard, secondCard]
   renderGame()
}

function renderGame() {
   if (sum <= 20) {
      message = "Do you want to draw a new card?"
   } else if (sum === 21) {
      message = "Wohoo! You've got BlackJack"
      hasBlackJack = true
   } else {
      message = "You're out of the game"
      isAlive = false
   }
   messageEl.textContent = message

   SumEl.textContent = "Sum: "+ sum

   cardEl.textContent = "Cards: "
   for (let i=0; i<cards.length; i++) {
      cardEl.textContent += cards[i] + " "
   }

   console.log(hasBlackJack)
   console.log(isAlive)
   console.log(message)
}

function newCard() {

   if (isAlive===true && hasBlackJack===false) {
      console.log("Drawing a new card from the deck!!")
      let newCard = getRandomCard()
      sum += newCard
      cards.push(newCard)
      renderGame()
   }
   
}

function getRandomCard() {
   let card_generator =  Math.floor(Math.random()*13)+1
   if (card_generator===1) {
      return 11
   }else if (card_generator>=11) {
      return 10
   }else {
      return card_generator
   }
}

// let messages = [
//    "K cha!!",
//    "Thik cha yaar",
//    "Now d1e"
// ]

// for (let i=0; i<messages.length; i++) {
//    console.log(messages[i])
// }


// for (let i=10; i<=100; i+=10) {
//    console.log(i)
// }
// if u use let it only remembers i inside the brackets but if you dont use it u can use it outside of the loop as well.

// for (let i=10; i>=-100; i-=10) {
//    console.log(i)
// }

// let sentence = ["Hello", "my", "name", "is", "Samyak"]
// let greetingEl = document.querySelector(".exp-class")

// for (let i=0; i<sentence.length; i++) {
//    greetingEl.textContent += sentence[i] +" "
// }

// and = &&, or = ||
// shift: removes
// unshift: adds items at begining
// let fruit = ["🍊", "🍊","🍎","🍎", "🍊", "🍊","🍎","🍎","🍎","🍎", "🍊", "🍊"]
// let appleShelf = document.querySelector("#apple-shelf")
// let OrangeShelf = document.querySelector("#orange-shelf")

// function sortFruit() {
//    for (let i=0; i<fruit.length; i++) {
//       a = fruit[i]
//       if (a==="🍎") {
//          appleShelf.textContent += a
//       } else if (a==="🍊") {
//          OrangeShelf.textContent += a
//       }
//    }
// }
// sortFruit()