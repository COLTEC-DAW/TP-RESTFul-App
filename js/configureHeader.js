function configureHeader() {
    var apiKey = localStorage.getItem('apiKey');
    var apiKeyDisplay = $('#apiKeyDisplay');

    var firstSixCharacters = apiKey.substring(0, 6) + '...';
    apiKeyDisplay.text('API Key: ' + firstSixCharacters);

    $('#clearApiKeyButton').click(() => {
        localStorage.removeItem('apiKey');
        window.location.reload();
    })

}