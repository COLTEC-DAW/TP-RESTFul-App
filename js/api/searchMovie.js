function searchMovie(page, success, error, query) {
    $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie',
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('apiKey')
        },
        data: {
            'query': query,
            'page': page,
            'language': 'en-US',
            'include_adult': false
        },
        success: success,
        error: error
    });
}