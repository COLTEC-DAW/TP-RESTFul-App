function displayPagination(totalPages, currentPage, getMoviesApi, query) {
    $('#paginationContainer').pagination({
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
    // Carregar o modal usando jQuery
    $('#modalLoader').load('../components/movie-modal.html', () => {
        // Limpar conteúdo anterior
        $('#modalBody').empty();

        // Adicionar novas informações ao modal
        $('#modalTitle').text(movieInfo.title);
        $('#modalBody').append('<p class="text-light"><strong>Overview:</strong> ' + movieInfo.overview + '</p>');
        $('#modalBody').append('<img class="img-fluid" src="https://image.tmdb.org/t/p/w500' + movieInfo.poster_path + '" alt="Movie Poster">');
        $('#modalBody').append('<p class="text-light"><strong>Release Date:</strong> ' + movieInfo.release_date + '</p>');
        $('#modalBody').append('<p class="text-light"><strong>Runtime:</strong> ' + movieInfo.runtime + ' minutes</p>');

        var genresList = $('<ul class="text-light">');
        movieInfo.genres.forEach(function (genre) {
            genresList.append('<li>' + genre.name + '</li>');
        });
        $('#modalBody').append('<p class="text-light"><strong>Genres:</strong></p>').append(genresList);

        $('#modalBody').append('<p class="text-light"><strong>Original Language:</strong> ' + movieInfo.original_language + '</p>');
        $('#modalBody').append('<p class="text-light"><strong>Production Countries:</strong> ' + movieInfo.production_countries[0].name + '</p>');

        // Se houver informações adicionais disponíveis, adicione-as aqui
        if (movieInfo.budget > 0) {
            $('#modalBody').append('<p class="text-light"><strong>Budget:</strong> $' + movieInfo.budget.toLocaleString() + '</p>');
        }

        if (movieInfo.revenue > 0) {
            $('#modalBody').append('<p class="text-light"><strong>Revenue:</strong> $' + movieInfo.revenue.toLocaleString() + '</p>');
        }

        if (movieInfo.popularity > 0) {
            $('#modalBody').append('<p class="text-light"><strong>Popularity:</strong> ' + movieInfo.popularity + '</p>');
        }

        // Adicionar a classe de fundo escuro ao modal
        $('#movieModal').addClass('bg-dark');

        // Mostrar o modal usando as funções do Bootstrap
        $('#movieModal').modal('show');
    });
}



function createMovieCard(movie) {
    let movieCard = $('<div class="card mx-1 mb-3 bg-dark text-light">');

    let cardBody = $('<div class="row g-0">');

    // Imagem do filme à esquerda
    let posterCol = $('<div class="col-lg-4 col-md-6 col-12">');
    var poster = $('<img class="img-fluid rounded-start">')
        .attr('src', 'https://image.tmdb.org/t/p/w500' + movie.poster_path)
        .attr('loading', 'lazy');
    posterCol.append(poster);

    // Informações do filme à direita
    let infoCol = $('<div class="col-md-8">');
    let cardBodyInner = $('<div class="card-body">');
    var title = $('<h5 class="card-title">').text(movie.title);
    var releaseDate = $('<p class="card-text">').text('Release Date: ' + movie.release_date);
    var overview = $('<p class="card-text">').text(movie.overview);

    // Botão "More"
    var moreButton = $('<button class="btn btn-primary">').text('More');
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

