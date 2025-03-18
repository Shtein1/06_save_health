function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  arrayOfhealthWishes = [
    "I wish you strong health and strength!",
   "May illnesses stay away from you.",
    "I wish you true love that will always be by your side!",
    "Live without stress and in harmony with your soul.",
    "May every day bring you joy!",
  ];

  document.getElementById("btn_health_wishes").addEventListener("click", () => {
  document.getElementById("p-health-wishes").innerHTML = arrayOfhealthWishes[getRandomInt(4)];
  });

  const arrayOfImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
  ]

  let countOfpills = 5;
  document.getElementById("count-of-tablets").innerText = "💊".repeat(
    countOfpills
  );
  document.getElementById("btn_health_wishes").addEventListener("click", () => {
    let index = Math.floor(Math.random() * arrayOfhealthWishes.length);
    document.getElementById("p-health-wishes").innerText =
      arrayOfhealthWishes[index];
  
    countOfpills--;
    console.log(countOfpills);
    document.getElementById("count-of-tablets").innerText =
      "💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills);
    console.log("💊".repeat(countOfpills) + "❌".repeat(5 - countOfpills));
    if (countOfpills === 0) {
      console.log("countOfpills = 0");
      document.getElementById("btn_health_wishes").style.display = "none";
    }
  });
  
  document.getElementById("btn-buy-tablets").addEventListener("click", () => {
    countOfpills = 5;
    console.log(countOfpills);
    document.getElementById("count-of-tablets").innerText = "💊".repeat(
      countOfpills
    );
    document.getElementById("btn_health_wishes").style.display = "inline-block";
  });
  
  let galleryImage = 1

  document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
    
    document.getElementById("right-arrow").addEventListener('click', ()=>{
      galleryImage++
      console.log(galleryImage)
    
      if(galleryImage == 4)
         {galleryImage = 1}

      document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
    })

    document.getElementById("left-arrow").addEventListener('click', ()=>{
      galleryImage++
      console.log(galleryImage)
    
      if(galleryImage == 4)
         {galleryImage = 1}

      document.getElementById("main-image").setAttribute("src",`img/gallery/${arrayOfImages[galleryImage-1]}`)
    })