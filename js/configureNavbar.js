function configureNavbar() {
    var apiKey = localStorage.getItem('apiKey');
    var apiKeyDisplay = $('#currentApiKey');

    apiKeyDisplay.text("API Key: " + apiKey.substring(0, 8) + "...");

    $('#clearApiKeyButton').click(() => {
        localStorage.removeItem('apiKey');
        window.location.reload();
    })

    $('.navbar-brand').on('click', function() {
        window.location.href = '../index.html'; 
    });

}