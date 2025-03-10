const arrayOfhealthWishes = [
    "Exercise regularly – At least 30 minutes a day.",
    "Get enough sleep – Aim for 7–9 hours per night.",
    "Manage stress – Try meditation or deep breathing.",
    "Maintain hygiene – Wash hands and keep clean.",
    "MStay active – Avoid sitting for long periods.",
    "Have regular check-ups – Visit your doctor yearly.",
    "Think positive – A healthy mind means a healthy body.",
];

let countofpills = 5
document.getElementById('count-of-tablets').innerText ="💊".repeat(countofpills)


document.getElementById('btn_health_wishes').addEventListener('click', () => {
let index = Math.floor(Math.random()* arrayOfhealthWishes.length)
document.getElementById('p-health-wishes').innerText = arrayOfhealthWishes[index]

countofpills--
console.log(countofpills)

document.getElementById('count-of-tablets').innerText="💊".repeat(countofpills) + "❌".repeat(5-countofpills);
console.log("💊".repeat(countofpills) + "❌".repeat(5-countofpills));

if (countofpills == 0){
console.log("countofpills = 0");
document.getElementById('btn_health_wishes').style.display = 'none';
 }

})

document.getElementById("btn-buy-tablets").addEventListener('click',() => {
countofpills = 5;
console.log(countofpills);
document.getElementById('count-of-tablets').innerText ="💊".repeat(countofpills);
document.getElementById('btn_health_wishes').style.display = 'inline-block';
    })


