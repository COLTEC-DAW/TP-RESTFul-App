function showMovieList(){

    let success = (movies) => {
        console.log(movies);
    }

    let error = (error) => {
        console.log(error);
    }

    getPopularMovies(1, success, error)
}