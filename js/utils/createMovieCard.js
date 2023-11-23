function createMovieCard(movie) {
    const movieCard = $('<div class="card bg-dark text-light h-100">');

    const posterCol = $('<div class="col-md-4 col-12">').append(
        $('<img class="img-fluid rounded-start w-100 h-100">')
            .attr('src', 'https://image.tmdb.org/t/p/w500' + movie.poster_path)
            .attr('loading', 'lazy')
    );

    const cardBodyInner = $('<div class="card-body d-flex flex-column h-100">')
        .append(
            $('<h5 class="card-title font-weight-bold">').text(movie.title),
            $('<p class="card-text">').text('Release Date: ' + movie.release_date),
            $('<p class="card-text">').text(movie.overview),
            $('<button class="btn btn-primary mt-auto">').text('More').click(() => {
                const success = (res) => {
                    createMovieModal(res);
                };

                const error = (res) => {
                    console.log('Error getting movie info.');
                };

                getMovieDetails(movie.id, success, error);
            })
        );

    const cardBody = $('<div class="row g-0 h-100 d-flex">').append(
        posterCol,
        $('<div class="col-md-8">').append(cardBodyInner)
    );

    movieCard.append(cardBody);

    return movieCard;
}
