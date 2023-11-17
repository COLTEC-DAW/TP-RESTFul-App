function getPopularMovies(page, success, error) {
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/popular',
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('apiKey')
        },
        data: {
            'page': page,
            'language': 'en-US',
            'include_adult': false
        },
        success: success,
        error: error
    });
}