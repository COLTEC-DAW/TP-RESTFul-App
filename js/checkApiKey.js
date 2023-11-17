function checkApiKey(apiKey, success, error) {
    $.ajax({
        url: 'https://api.themoviedb.org/3/authentication',
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        success: success,
        error: error
    });
}
