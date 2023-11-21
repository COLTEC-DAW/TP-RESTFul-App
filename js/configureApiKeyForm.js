function configureApiKeyForm() {
    $('#apiKeyForm').submit(function (event) {
        event.preventDefault();

        let apiKey = $('#apiKeyInput').val();

        let success = () => {
            localStorage.setItem('apiKey', apiKey);
            window.location.reload();
        };

        let error = () => {
            $('#resultText').text('Error, check your key and try again.');
        };

        if (apiKey.trim() !== '') {
            checkApiKey(apiKey, success, error);
        } else {
            $('#resultText').text('Empty key is not allowed.');
        }
    });
}