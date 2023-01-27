const showMovies = document.querySelector(".showmovies");
const showBtn = document.getElementById("showbutton");

const titleIn = document.getElementById("title");
const directorIn = document.getElementById("director");
const releaseIn = document.getElementById("release");
const reviewIn = document.getElementById("review");
const formEl = document.getElementById("form");

const getMovies = () =>
  fetch("/api/movies/")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

const activeMovies = () => {
  getMovies().then((res) =>
    divMaker(res)
  );
};

const divMaker = (result) => {
    showMovies.textContent = "";
 result.forEach((items)=>{
    const cardEl = document.createElement("div");
  const titleP = document.createElement("p");
  const directorP = document.createElement("p");
  const releaseP = document.createElement("p");
  const reviewP = document.createElement("p");

  titleP.innerHTML = items.title;
  directorP.innerHTML = items.director;
  releaseP.innerHTML = items.release;
  reviewP.innerHTML = items.review;

  cardEl.append(titleP, directorP, releaseP, reviewP);
  showMovies.append(cardEl);


 })
  
 

  
};

const postMovie = (items) =>
  fetch("/api/movies/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  });

const handlePost = (e) => {
  e.preventDefault();

  const response = {
    title: titleIn.value.trim(),
    director: directorIn.value.trim(),
    release: releaseIn.value.trim(),
    review: reviewIn.value.trim(),
  };

  postMovie(response).then((data)=>data);
};

activeMovies()

formEl.addEventListener("submit", handlePost);
