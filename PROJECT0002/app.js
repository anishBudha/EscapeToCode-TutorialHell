const textSpan = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Dark,Spooky?blacklistFlags=explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.joke);
      textSpan.innerHTML = item.joke;
    });
};

btn.addEventListener("click", getJoke);
