class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

let movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
let movie2 = new Movie("The Lion King", "Disney", "PG");
let movie3 = new Movie("The Dark Knight", "Warner Bros.", "PG-13");
let movie4 = new Movie("Finding Nemo", "Pixar", "PG");

let movies = [movie1, movie2, movie3, movie4];
let pgMovies = Movie.getPG(movies);

console.log("Output of Movie class");
console.log(pgMovies);
console.log(casinoRoyale);
