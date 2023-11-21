function configureHeader() {
    var apiKey = localStorage.getItem('apiKey');
    var apiKeyDisplay = $('#currentApiKey');

    apiKeyDisplay.text("API Key: " + apiKey.substring(0, 6));

    $('#clearApiKeyButton').click(() => {
        localStorage.removeItem('apiKey');
        window.location.reload();
    })

}