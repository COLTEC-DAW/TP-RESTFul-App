function configureApiKeyForm() {
    $('#apiKeyForm').submit((event) => {
        event.preventDefault();

        const apiKey = $('#apiKeyInput').val().trim();

        const success = () => {
            localStorage.setItem('apiKey', apiKey);
            window.location.reload();
        };

        const error = () => {
            $('#resultText').text('Error, check your key and try again.');
        };

        if (apiKey !== '') {
            checkApiKey(apiKey, success, error);
        } else {
            $('#resultText').text('Empty key is not allowed.');
        }
    });
}
