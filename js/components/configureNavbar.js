function configureNavbar() {
    const apiKey = localStorage.getItem('apiKey');
    const truncatedApiKey = apiKey ? apiKey.substring(0, 8) + "..." : "Empty";

    $('#currentApiKey').text("API Key: " + truncatedApiKey);

    $('#clearApiKeyButton').click(() => {
        localStorage.removeItem('apiKey');
        window.location.reload();
    });

    $('.navbar-brand').on('click', () => {
        window.location.href = '../index.html';
    });
}
