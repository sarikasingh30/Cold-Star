// let key="f36fe2d4";

async function getMovies() {
  try {
    let name = document.getElementById("name").value;
    let movielist = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=f36fe2d4&s=${name}`
    );
    let data = await movielist.json();
    appendMovies(data);
  } catch (error) {
    sorryData();
  }
}

function appendMovies(data) {
  document.getElementById("menu").innerText = "";

  data.Search.forEach(function (elem) {
    let carddiv = document.createElement("div");
    carddiv.classList.add("carddiv")
    let imgdiv = document.createElement("img");
    imgdiv.src = elem.Poster;
    imgdiv.classList.add("imgdiv")
    let year = document.createElement("h3");
    year.textContent = elem.Year;
    let title = document.createElement("h4");
    title.textContent = elem.Title;
    let rate = Math.random() * 10;
    rate = rate.toFixed(1);
    let ratings = document.createElement("div");
      ratings.classList.add("ratings")
    let rates = document.createElement("p");
    rates.textContent = rate;
    ratings.append(rates);
    let clicktoWatch = document.createElement("button");
    clicktoWatch.textContent = "Click To Watch";
    clicktoWatch.style.marginLeft = "100px";
    clicktoWatch.style.borderRadius = "50px";
    clicktoWatch.onclick = function (event) {};
    if (rate > 8.5) {
      carddiv.append(imgdiv, title, year, ratings, clicktoWatch);
    } else {
      carddiv.append(imgdiv, title, year, clicktoWatch);
    }
    menu.append(carddiv);
  });
}
function sorryData() {
  var x = document.createElement("div");
  x.classList.add("x");
  var imagno = document.createElement("img");
  imagno.classList.add("imagno")
  imagno.src =
    "https://media4.giphy.com/media/23BST5FQOc8k8/giphy.gif?cid=ecf05e47ul6yydda0y871nkne0teio92ryvgmm5u7w65lezp&rid=giphy.gif&ct=g";
  
  x.append(imagno);
  document.getElementById("menu").append(x);
}
