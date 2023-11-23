function getMovieDetails(movieId, success, error) {
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + String(movieId).trim(),
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('apiKey')
        },
        data: {
            'language': 'en-US'
        },
        success: (a) => {
            console.log(a)
            success(a)
        },
        error: error
    });
}
