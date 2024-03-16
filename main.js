document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      name: "duck",
      img: "./webp/duck.webp",
    },
    {
      name: "iceCream",
      img: "./webp/iceCream.webp",
    },
    {
      name: "jackFruit",
      img: "./webp/jackFruit.webp",
    },
    {
      name: "StarFish",
      img: "./webp/StarFish.webp",
    },
    {
      name: "stickIceCream",
      img: "./webp/stickIceCream.webp",
    },
    {
      name: "sun",
      img: "./webp/sun.webp",
    },

    {
      name: "WatterMallon",
      img: "./webp/WatterMallon.webp",
    },
    {
      name: "Shell",
      img: "./webp/Shell.webp",
    },
    {
      name: "duck",
      img: "./webp/duck.webp",
    },
    {
      name: "iceCream",
      img: "./webp/iceCream.webp",
    },
    {
      name: "jackFruit",
      img: "./webp/jackFruit.webp",
    },
    {
      name: "StarFish",
      img: "./webp/StarFish.webp",
    },
    {
      name: "stickIceCream",
      img: "./webp/stickIceCream.webp",
    },
    {
      name: "sun",
      img: "./webp/sun.webp",
    },
    {
      name: "WatterMallon",
      img: "./webp/WatterMallon.webp",
    },
    {
      name: "Shell",
      img: "./webp/Shell.webp",
    },
  ];

  const grid = document.getElementById("boxes");
  let result = document.querySelector(".Result");
  let restart = document.getElementById("restart");
  let start = document.getElementById("start");
  let themeSpan = document.querySelector("#thememode span");
  let thememodebtn = document.getElementById("thememode");
  let close = document.getElementById("close");
  let resultParent = document.getElementById("resultParent");
  let ThemeImage = ["./webp/LHTblank.webp", "./webp/DRKblank.webp"];
  let main = document.getElementById("theme");
  let chosenCard = [];
  let chosenCardID = [];
  let total = [];
  let num = 0;

  // shuffle the array
  function shuffle(array) {
    let len = array.length - 1;
    for (let i = len; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let shuffleimg = shuffle(images);

  // create cards

  function createboard() {
    for (let i = 0; i < 16; i++) {
      let imgTag = document.createElement("img");
      imgTag.setAttribute("src", ThemeImage[num]);
      imgTag.setAttribute("data-img", i);
      imgTag.classList.add("card");
      grid.appendChild(imgTag);
      imgTag.addEventListener("click", flipCard);
    }
  }

  //fliping cards

  function flipCard() {
    let imgID = this.getAttribute("data-img");
    chosenCard.push(shuffleimg[imgID].name);
    chosenCardID.push(imgID);
    this.setAttribute("src", shuffleimg[imgID].img);
    if (chosenCard.length === 2) {
      setTimeout(check, 150);
    }
  }

  // check those card if equal or not
  function check() {
    let cards = document.querySelectorAll(".card");

    if (chosenCardID[0] == chosenCardID[1]) {
      cards[chosenCardID[0]].setAttribute("src", ThemeImage[num]);
      cards[chosenCardID[1]].setAttribute("src", ThemeImage[num]);
    } else if (chosenCard[0] == chosenCard[1]) {
      cards[chosenCardID[0]].setAttribute("src", "./webp/green.webp");
      cards[chosenCardID[1]].setAttribute("src", "./webp/green.webp");
      cards[chosenCardID[1]].removeEventListener("click", flipCard);
      cards[chosenCardID[0]].removeEventListener("click", flipCard);
      total.push(chosenCard);
    } else {
      cards[chosenCardID[0]].setAttribute("src", ThemeImage[num]);
      cards[chosenCardID[1]].setAttribute("src", ThemeImage[num]);
    }
    result.textContent = total.length;
    chosenCard = [];
    chosenCardID = [];
    if (total.length === shuffleimg.length / 2) {
      popBox.classList.toggle("hiddenbox");
    }
  }
  // dark & light mood

  function themeMode() {
    main.classList.toggle("dark");
    if (main.classList.length == 1) {
      themeSpan.innerHTML = "LHT";
      num = 1;
    } else {
      themeSpan.innerHTML = "DRK";
      num = 0;
    }
  }
  thememodebtn.addEventListener("click", themeMode);
  start.addEventListener("click", () => {
    createboard();
    start.classList.add("hidden");
    restart.classList.remove("hidden"), resultParent.classList.remove("hidden");
    resultParent.classList.add("flex");
  });
  close.addEventListener("click", () => popBox.classList.toggle("hiddenbox"));
  restart.addEventListener("click", () => {
    grid.innerHTML = "";
    result.innerHTML = "0";
    createboard();
  });
});
