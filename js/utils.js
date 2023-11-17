function displayPagination(totalPages, currentPage, getMoviesApi, query) {
    $('#pagination-container').pagination({
        pages: Math.min(500, totalPages),
        itemsOnPage: 20,
        currentPage: currentPage,
        onPageClick: (page, event) => {
            loadMovieList(page, getMoviesApi, query)
        },
        cssStyle: 'light-theme'
    });

}

function buildMovieCard(movie) {
    let movieCard = $('<div class="movie-card">');
    var title = $('<h3>').text(movie.title);
    var releaseDate = $('<p>').text('Release Date: ' + movie.release_date);
    var overview = $('<p>').text(movie.overview);
    var poster = $('<img>').attr('src', 'https://image.tmdb.org/t/p/w500' + movie.poster_path);

    movieCard.append(title, releaseDate, overview, poster);

    return movieCard;
}

function loadMovieList(page, getMoviesApi, query) {

    let success = (moviesReq) => {

        let movieList = $('.movie-list')
        movieList.empty()


        moviesReq.results.forEach(movie => {
            movieList.append(buildMovieCard(movie));
        })
        
        displayPagination(moviesReq.total_pages, moviesReq.page, getMoviesApi, query)

        $(window).scrollTop(0);

        console.log(moviesReq)
    }

    let error = (error) => {
        console.log(error);
    }


    getMoviesApi(Number(page) || 1, success, error, query)
}

