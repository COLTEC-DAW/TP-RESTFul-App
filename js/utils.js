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

function createMovieModal(movieInfo) {

    $('#modal-loader').load('../components/movie-modal.html', () => {
        $('#modalTitle').text(movieInfo.title);
        $('#modalOverview').text(movieInfo.overview);
        $('#modalPoster').attr('src', 'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path);
        $('#modalReleaseDate').text(movieInfo.release_date);
        $('#modalRuntime').text(movieInfo.runtime);
        $('#modalTagline').text(movieInfo.tagline);

        var genresList = $('#modalGenres');
        genresList.empty();
        movieInfo.genres.forEach(function (genre) {
            genresList.append('<li>' + genre.name + '</li>');
        });

        $('#movieModal').css('display', 'flex');
    });
}


function createMovieCard(movie) {
    let movieCard = $('<div class="movie-card">');
    var poster = $('<img>').attr('src', 'https://image.tmdb.org/t/p/w500' + movie.poster_path);
    var title = $('<h3>').text(movie.title);
    var releaseDate = $('<p>').text('Release Date: ' + movie.release_date);
    var overview = $('<p>').text(movie.overview);

    var moreButton = $('<button>').text('More');
    moreButton.click(() => {
        let success = (res) => {
            createMovieModal(res)
        }

        let error = (res) => {
            console.log('Error getting movie info.')
        }

        console.log(movie.id)
        getMovieDetails(movie.id, success, error)

    });
    
    movieCard.append(title, releaseDate, overview, poster, moreButton);

    return movieCard;
}

function loadMovieList(page, getMoviesApi, query) {

    let success = (moviesReq) => {

        let movieList = $('.movie-list')
        movieList.empty()


        moviesReq.results.forEach(movie => {
            movieList.append(createMovieCard(movie));
        })

        displayPagination(moviesReq.total_pages, moviesReq.page, getMoviesApi, query)

        $(window).scrollTop(0);
    }

    let error = (error) => {
        console.log(error);
    }


    getMoviesApi(Number(page) || 1, success, error, query)
}

