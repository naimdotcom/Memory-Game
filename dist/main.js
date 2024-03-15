const grid = document.getElementById("boxes");
let chosenCard = [];
let chosenCardID = []

let images = [
  {
    name: "duck",
    img: "/webp/duck.webp",
  },
  {
    name: "iceCream",
    img: "/webp/iceCream.webp",
  },
  {
    name: "jackFruit",
    img: "/webp/jackFruit.webp",
  },
  {
    name: "StarFish",
    img: "/webp/StarFish.webp",
  },
  {
    name: "stickIceCream",
    img: "/webp/stickIceCream.webp",
  },
  {
    name: "sun",
    img: "/webp/sun.webp",
  },
  //   {
  //     name: "Tree",
  //     img: "/webp/Tree.webp",
  //   },
  {
    name: "WatterMallon",
    img: "/webp/WatterMallon.webp",
  },
  {
    name: "Shell",
    img: "/webp/Shell.webp",
  },
  {
    name: "duck",
    img: "/webp/duck.webp",
  },
  {
    name: "iceCream",
    img: "/webp/iceCream.webp",
  },
  {
    name: "jackFruit",
    img: "/webp/jackFruit.webp",
  },
  {
    name: "StarFish",
    img: "/webp/StarFish.webp",
  },
  {
    name: "stickIceCream",
    img: "/webp/stickIceCream.webp",
  },
  {
    name: "sun",
    img: "/webp/sun.webp",
  },
  //   {
  //     name: "Tree",
  //     img: "/webp/Tree.webp",
  //   },
  {
    name: "WatterMallon",
    img: "/webp/WatterMallon.webp",
  },
  {
    name: "Shell",
    img: "/webp/Shell.webp",
  },
];

let len = (images.length - 2) / 2;
let leng = images.length - 2;

function shuffle(array) {
    let len = array.length - 1;
  for (let i = len; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffleimg = shuffle(images);

function createboard() {
  for (let i = 0; i < 16; i++) {
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", "/webp/LHTblank.png");
    imgTag.setAttribute("data-img", i);
    imgTag.classList.add('card')
    grid.appendChild(imgTag);
    imgTag.addEventListener("click", flipCard);
  }
}
createboard();

function check(){
    let cards = document.querySelectorAll(".card")
    console.log(cards);
    if(chosenCard[0] == chosenCard[1]  ){
        cards[chosenCardID[0]].setAttribute('src', '/webp/White.png');
        cards[chosenCardID[1]].setAttribute('src', '/webp/White.png');
        cards[chosenCardID[1]].removeEventListener('click', flipCard)
        cards[chosenCardID[0]].removeEventListener('click', flipCard)
    } else {
        cards[chosenCardID[0]].setAttribute("src", "/webp/LHTblank.png");
        cards[chosenCardID[1]].setAttribute("src", "/webp/LHTblank.png");
    }
    chosenCard = [];
    chosenCardID = [];

}

function flipCard() {
  let imgID = this.getAttribute("data-img");
  chosenCard.push(shuffleimg[imgID].name);
  chosenCardID.push(imgID);
  this.setAttribute('src', shuffleimg[imgID].img)
  if(chosenCard.length === 2) {
    setTimeout( check ,400)
    
  }
}
