function createMovieModal(movieInfo) {
    $('#modalLoader').load('../../components/movie-modal.html', () => {
        const modalBody = $('#modalBody').empty();
        const modalTitle = $('#modalTitle').text(movieInfo.title);
        
        const posterPath = 'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path;
        modalBody.append('<div class="text-center"><img class="img-fluid rounded" src="' + posterPath + '" alt="Movie Poster"></div>');
        modalBody.append('<p><strong>Overview:</strong> ' + movieInfo.overview + '</p>');
        modalBody.append('<p><strong>Release Date:</strong> ' + movieInfo.release_date + '</p>');
        modalBody.append('<p><strong>Runtime:</strong> ' + movieInfo.runtime + ' minutes</p>');
        
        const genresList = $('<ul>');
        movieInfo.genres.forEach((genre) => {
            genresList.append('<li>' + genre.name + '</li>');
        });
        modalBody.append('<p><strong>Genres:</strong></p>').append(genresList);

        modalBody.append('<p><strong>Original Language:</strong> ' + movieInfo.original_language + '</p>');
        
        const productionCompaniesList = $('<ul>');
        movieInfo.production_companies.forEach((company) => {
            const logoPath = company.logo_path ? 'https://image.tmdb.org/t/p/w200' + company.logo_path : 'no-logo.jpg';
            productionCompaniesList.append('<li><img src="' + logoPath + '" alt="' + company.name + '" title="' + company.name + '" class="img-fluid company-logo"></li>');
        });
        modalBody.append('<p><strong>Production Companies:</strong></p>').append(productionCompaniesList);

        modalBody.append('<p><strong>Production Countries:</strong> ' + movieInfo.production_countries[0].name + '</p>');

        const spokenLanguagesList = $('<ul>');
        movieInfo.spoken_languages.forEach((language) => {
            spokenLanguagesList.append('<li>' + language.name + '</li>');
        });
        modalBody.append('<p><strong>Spoken Languages:</strong></p>').append(spokenLanguagesList);

        if (movieInfo.budget > 0) {
            modalBody.append('<p><strong>Budget:</strong> $' + movieInfo.budget.toLocaleString() + '</p>');
        }

        if (movieInfo.revenue > 0) {
            modalBody.append('<p><strong>Revenue:</strong> $' + movieInfo.revenue.toLocaleString() + '</p>');
        }

        if (movieInfo.popularity > 0) {
            modalBody.append('<p><strong>Popularity:</strong> ' + movieInfo.popularity + '</p>');
        }

        $('#movieModal').modal('show').find('.modal-dialog').addClass('modal-lg');
        $('.modal-backdrop').addClass('bg-black');
    });
}
