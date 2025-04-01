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
    
          
    const arrayOfVitamins = [
      {
        id:"001",
        title:"Аевіт",
        photo:"vitamins (2).png",
        description:"Aevit is a vitamin complex with A and E for skin, hair, and immunity.",
        rating:2,
        type:"crystalline"
      },
      {
        id:"002",
        title:"Вітімін С",
        photo:"vitamins.png",
        description:"Vitamin C boosts immunity, improves skin, and acts as an antioxidant.",
        rating:4,
        type:"Powdery"
      },
      {
        id:"003",
        title:"Вітамін D",
        photo:"vitamins (1).png",
        description:"Vitamin D strengthens bones, immunity, and supports overall health.",
        rating:3,
        type:"Powdery"
      },
      {
        id:"004",
        title:"Вітамін B3",
        photo:"vitamin-d.png",
        description:"Vitamin B3 (niacin) supports metabolism, skin health, and the nervous system.",
        rating:1,
        type:"Powdery"
      },
      {
        id:"005",
        title:"Омега-3",
        photo:"fish-pills.png",
        description:"Omega-3 supports the heart, brain, and reduces inflammation.",
        rating:4,
        type:"capsules"
      },
      {
        id:"006",
        title:"Magneum",
        photo:"iron.png",
        description:"Magnesium supports nerves, muscles, and heart health.",
        rating:5,
        type:"Powdery"
      }
    ]

    console.log(arrayOfVitamins)

    arrayOfVitamins.forEach((item,index) =>{
      //console.log("елемент №",index.item)

      let divVitamin = document.createElement('div')
      //divVitamin.innerText = item.title 
      
      divVitamin.innerHTML = `
              <p>${item.id}</p>
              <h3>${item.title}</h3>
              <hr>
              <img src="img/vitamins/${item.photo}" alt="">
              <p>${item.description}</p>
              <p>${"❤️". repeat(item.rating)+'🤍'.repeat(5-item.rating)}</p>
              <p>${item.type}</p>
              </div>
              `
      divVitamin.classList.add('vitamin')

      document.getElementById("p-vitamins").appendChild(divVitamin)
    })
