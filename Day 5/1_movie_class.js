class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(arr_movie) {
        return arr_movie.filter(movie => movie.rating === "PG");
    }
}

let movie_obj= new Movie("Casino Royale", "Eon Productions", "PG­13");

let movie1 = new Movie("Thunivu", "Zee studios", "PG");
let movie2 = new Movie("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Movie("Kantara", "KRG Studios", "PG");
let movie4 = new Movie("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Movie("veeram", "Vijaya production", "PG");

let movieArray = [movie1, movie2, movie3, movie4, movie5];
let pgMovies = Movie.getPG(movieArray);
console.log(pgMovies); 


