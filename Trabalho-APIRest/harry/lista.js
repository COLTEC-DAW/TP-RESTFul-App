const autocompleteList = document.getElementById('autocomplete-list');
const input = document.getElementById('characterId');


// Função para buscar itens e exibir sugestões
const buscarItens = async () => {
    
    var filter = input.value.toLowerCase();

    const result = await fetchAPICompleta();
    console.log(result);

    const dados = result.map(character => character.name);
    console.log(dados);

    // Limpa a lista de sugestões
    autocompleteList.innerHTML = '';

    // Filtra os dados com base no input
    var resultados = dados.filter(function(item) {
        return item.toLowerCase().includes(filter);
    });

    // Exibe sugestões na lista
    resultados.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', function() {
            input.value = item;
            autocompleteList.style.display = 'none'; // Esconde a lista após a seleção
        });
    autocompleteList.appendChild(li);
    });

    // Exibe ou esconde a lista dependendo dos resultados
    autocompleteList.style.display = resultados.length > 0 ? 'block' : 'none';
}
