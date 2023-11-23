function loadMovieList(page, getMoviesApi, query) {
    $("#paginationContainer").empty()

    const spinner = $('<div class="d-flex justify-content-center align-items-center" style="height: 200px;">')
        .append('<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div>');

    const errorContainer = $('<div class="alert alert-danger" role="alert" style="display:none;">An error occurred. Please try again later.</div>');

    const success = (moviesReq) => {
        $('#movieListLoader').empty();

        const movieList = $('#movieListLoader');
        movieList.empty();

        const movies = moviesReq.results;

        if (movies.length > 0) {
            const row = $('<div class="row"></div>');

            movies.forEach(movie => {
                const movieCard = createMovieCard(movie);
                const col = $('<div class="col-xl-6 mb-4"></div>').append(movieCard);
                row.append(col);
            });

            movieList.append(row);

            if (moviesReq.total_results > 0) {
                displayPagination(moviesReq.total_pages, moviesReq.page, getMoviesApi, query);
            }
        } else {
            $("#paginationContainer").empty()

            var paragraph = $('#infoLoader').find('p.text-center').first();

            if (paragraph.length === 0) {
                paragraph = $('<p>').addClass('text-center');
                $('#infoLoader').append(paragraph);
            }

            paragraph.text('Nothing found.');
        }

        $(window).scrollTop(0);
    };

    const error = (error) => {
        console.log(error);
        $("#paginationContainer").empty()
        $('#movieListLoader').empty().append(errorContainer.show());
    };

    $('#movieListLoader').empty().append(spinner);

    getMoviesApi(Number(page) || 1, success, error, query);
}



function loadPopularMoviesList() {
    $('#infoLoader').empty().append('<h2 class="h4 text-center">Popular Movies</h2>');
    loadMovieList(1, getPopularMovies);
}

function loadSearchResults(query) {
    $('#infoLoader').empty().append('<h2 class="h4 text-center">Results for <code>' + query + '</code></h2>');
    loadMovieList(1, searchMovie, query);
}

