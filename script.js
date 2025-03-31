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

    function amin(galleryImage) {
      const mainImage = document.getElementById('main-image');
      mainImage.style.opacity = '0'; // Почати з прозорості
      mainImage.setAttribute('src', `img/gallery/${arrayOfGalleryImages[galleryImage]}`);
      setTimeout(() => {
        mainImage.style.opacity = '1'; // Показати зображення
      }, 300); // Час анімації має співпадати з transition у CSS
    }
    
          
          const arrayOfObjects = [
            {
              id: 1,
              title: "Аевіт",
              photo: "",
              description: "",
              rating: 4,
              type: ""
            },
            {
              id: 2,
              title: "Вітамін E",
              photo: "",
              description: "",
              rating: 3,
              type: ""
            },
            {
              id: 3,
              title: "Вітамін D",
              photo: "",
              description: "",
              rating: 5,
              type: ""
            },
            {
              id: 4,
              title: "Вітамін B3",
              photo: "",
              description: "",
              rating: 5,
              type: ""
            },
            {
              id: 5,
              title: "Омега-3",
              photo: "",
              description: "",
              rating: 5,
              type: ""
            },
            {
              id: 6,
              title: "Magnium-B6",
              photo: "",
              description: "",
              rating: 3,
              type: ""
            },
            
          ];

//console.log(arrayOfVitamins)

arrayOfVitamins.forEach((item => {
  let divVitamin = document.createElement('div')
  divVitamin.classList.add('vitamin')
  document.getElementById("p-vitamins").appendChild(divVitamin)
  divVitamin.innerHTML = `
      <h3>${item.title}</h3>
      <hr>
      <img src="img/vitamins/vitamin-a.png" alt="">
      <p>${item.description}</p>
      <span>${'❤'.repeat(item.rating) + '♡'.repeat(5 - item.rating)}</span>
      <p>type</p>
      <span>id</span>
  `
})