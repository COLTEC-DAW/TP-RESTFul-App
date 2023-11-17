function configureHeader() {
    var apiKey = localStorage.getItem('apiKey');
    var apiKeyDisplay = $('#apiKeyDisplay');

    apiKeyDisplay.text('API Key: ' + apiKey);

    $('#clearApiKeyButton').click(() => {
        localStorage.removeItem('apiKey');
        window.location.reload();
    })

}