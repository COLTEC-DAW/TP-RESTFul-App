function listarRecursos() {
    document.getElementById("resources").style = "display: grid;";
    document.getElementById("resources").innerText = " ";

    $.ajax({
        url: 'https://api.chess.com/pub/player/hikaru',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Manipule os dados conforme necessário para listar os recursos desejados
            var resources = Object.keys(data);

            // Exiba os recursos na sua página HTML
            var resourcesList = $('#resources');
            resources.forEach(function (resource) {
                resourcesList.append('<li><button class="butRes" onclick="buscarRecurso(this.innerText);">' + resource + '</button></li>');
            });
        },
        error: function () {
            $('#error').show();
            $('#resources').hide();
        },
        complete: function () {
            console.log("request completed");
        }
    });
}

function buscarRecurso(recurso) {
    if(recurso == null){
        recurso = document.getElementById("recurso").value;
    }
    document.getElementById("resources").style = "display: none;";
    $.ajax({
        //url: 'https://anapioficeandfire.com/api/characters/583',
        url: 'https://api.chess.com/pub/player/hikaru',
        dataType: 'json',
        success: function (data) {
            // Verifica se o recurso fornecido existe nos dados
            $('resources').hide();
            if (data[recurso] !== undefined) {
                // Exibe o recurso na sua página HTML
                $('#result').html('<p style="max-width: 300;">' + recurso + ': ' + JSON.stringify(data[recurso], null, 2) + '</p>');
                $('#error').hide();
            } else {
                // Se o recurso não for encontrado, exibe uma mensagem de erro
                $('#result').empty();
                $('#error').show().text('Recurso não encontrado');
            }
        },
        error: function () {
            $('#error').show().text('Erro na requisição');
            $('#result').empty();
        },
        complete: function () {
            console.log("request completed");
        }
    });
}




