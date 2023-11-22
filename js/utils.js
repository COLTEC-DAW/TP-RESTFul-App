

function displayPagination(totalPages, currentPage, getMoviesApi, query) {
    $('#paginationContainer').pagination({
        pages: Math.min(500, totalPages),
        itemsOnPage: 20,
        currentPage: currentPage,
        cssStyle: 'dark-theme',
        onPageClick: (page, event) => {
            loadMovieList(page, getMoviesApi, query)
        }
    });
}



function createMovieModal(movieInfo) {
    // Carregar o modal usando jQuery
    $('#modalLoader').load('../components/movie-modal.html', () => {
        // Limpar conteúdo anterior
        $('#modalBody').empty();

        // Adicionar novas informações ao modal
        $('#modalTitle').text(movieInfo.title);
        
        var posterPath = 'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path;
        $('#modalBody').append('<div class="text-center"><img class="img-fluid rounded" src="' + posterPath + '" alt="Movie Poster"></div>');

        $('#modalBody').append('<p><strong>Overview:</strong> ' + movieInfo.overview + '</p>');
        $('#modalBody').append('<p><strong>Release Date:</strong> ' + movieInfo.release_date + '</p>');
        $('#modalBody').append('<p><strong>Runtime:</strong> ' + movieInfo.runtime + ' minutes</p>');
        
        var genresList = $('<ul>');
        movieInfo.genres.forEach(function (genre) {
            genresList.append('<li>' + genre.name + '</li>');
        });
        $('#modalBody').append('<p><strong>Genres:</strong></p>').append(genresList);

        $('#modalBody').append('<p><strong>Original Language:</strong> ' + movieInfo.original_language + '</p>');
        
        var productionCompaniesList = $('<ul>');
        movieInfo.production_companies.forEach(function (company) {
            var logoPath = company.logo_path ? 'https://image.tmdb.org/t/p/w200' + company.logo_path : 'no-logo.jpg';
            productionCompaniesList.append('<li><img src="' + logoPath + '" alt="' + company.name + '" title="' + company.name + '" class="img-fluid company-logo"></li>');
        });
        $('#modalBody').append('<p><strong>Production Companies:</strong></p>').append(productionCompaniesList);

        $('#modalBody').append('<p><strong>Production Countries:</strong> ' + movieInfo.production_countries[0].name + '</p>');

        var spokenLanguagesList = $('<ul>');
        movieInfo.spoken_languages.forEach(function (language) {
            spokenLanguagesList.append('<li>' + language.name + '</li>');
        });
        $('#modalBody').append('<p><strong>Spoken Languages:</strong></p>').append(spokenLanguagesList);

        // Se houver informações adicionais disponíveis, adicione-as aqui
        if (movieInfo.budget > 0) {
            $('#modalBody').append('<p><strong>Budget:</strong> $' + movieInfo.budget.toLocaleString() + '</p>');
        }

        if (movieInfo.revenue > 0) {
            $('#modalBody').append('<p><strong>Revenue:</strong> $' + movieInfo.revenue.toLocaleString() + '</p>');
        }

        if (movieInfo.popularity > 0) {
            $('#modalBody').append('<p><strong>Popularity:</strong> ' + movieInfo.popularity + '</p>');
        }

        $('#movieModal').modal('show');
        $('#movieModal .modal-dialog').addClass('modal-lg');
        $('.modal-backdrop').addClass('bg-black');
    });
}




function createMovieCard(movie) {
    let movieCard = $('<div class="card mx-5 mb-5 bg-dark text-light h-100">');

    let cardBody = $('<div class="row g-0 h-100 d-flex">');

    // Imagem do filme à esquerda
    let posterCol = $('<div class="col-lg-4 col-md-6 col-12">');
    var poster = $('<img class="img-fluid rounded-start w-100 h-100">')
        .attr('src', 'https://image.tmdb.org/t/p/w500' + movie.poster_path)
        .attr('loading', 'lazy');
    posterCol.append(poster);

    // Informações do filme à direita
    let infoCol = $('<div class="col-md-8">');
    let cardBodyInner = $('<div class="card-body d-flex flex-column h-100">');
    var title = $('<h5 class="card-title font-weight-bold">').text(movie.title);
    var releaseDate = $('<p class="card-text">').text('Release Date: ' + movie.release_date);
    var overview = $('<p class="card-text">').text(movie.overview);

    // Botão "More"
    var moreButton = $('<button class="btn btn-primary mt-auto">').text('More');
    moreButton.click(() => {
        let success = (res) => {
            createMovieModal(res);
        };

        let error = (res) => {
            console.log('Error getting movie info.');
        };

        getMovieDetails(movie.id, success, error);
    });

    // Adiciona elementos ao card
    cardBodyInner.append(title, releaseDate, overview, moreButton);
    infoCol.append(cardBodyInner);
    cardBody.append(posterCol, infoCol);
    movieCard.append(cardBody);

    return movieCard;
}



function loadMovieList(page, getMoviesApi, query) {

    let success = (moviesReq) => {

        let movieList = $('#movieListLoader')
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



function loadPopularMoviesList() {
    $("#infoLoader").append($("<h2>").text("Popular Movies:").addClass('h4 text-center'));
    loadMovieList(1, getPopularMovies)
}