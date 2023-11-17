function checkApiKey(apiKey, success, error) {
    $.ajax({
        url: 'https://api.themoviedb.org/3/authentication',
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        success: () => {
            localStorage.setItem('apiKey', apiKey);
            window.location.href = 'index.html';
        },
        error: () => {
            $('#error-message').css('display', 'block');
        }
    });
}
