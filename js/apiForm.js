function apiForm(){
    $('#apiForm').submit(function (event) {
        event.preventDefault();

        var apiKey = $('#apiKeyInput').val();

        let success = () => {
            localStorage.setItem('apiKey', apiKey);
            
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