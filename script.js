const arrayOfLoveWishes = [
    "May every day bring you joy and warmth!",
    "Wishing you love and happiness!",
    "May your love be eternal!",
    "Wishing you lots of love and happiness!",
    "May love always be with you!",
    "Wishing you lots of love.",
    "May your love be eternal! ❤️",
];

let countopills = 5
document.getElementById('count-of-tablets').innerText ="💊".repeat(countopills)


document.getElementById('btn_love_wishes').addEventListener('click', () => {
let index = Math.floor(Math.random()* arrayOfLoveWishes.length)
document.getElementById('love-wishes').innerText = arrayOfLoveWishes [index]

countopills--
console.log(countopills)

document.getElementById('count-of-tablets').innerText="💊".repeat(countopills) + "❌".repeat(5-countopills)
console.log("💊".repeat(countopills) + "❌".repeat(5-countopills))

if (countopills== 0){
countopills.log("countofpills =0")
document.getElementById('btn_health_wishes').style.display = 'none'
 }

})

document.getElementById("btn-buy-tablets").addEventListener('click',() => {
countopills =5
console.log(countopills)
document.getElementById('count-of-tablets').innerText ="💊".repeat(countopills)
document.getElementById('btn_health_wishes').style.display = 'inline-block'
    })


