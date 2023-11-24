document.addEventListener('DOMContentLoaded', () => {
    const resultadoDiv = document.getElementById('resultado');
    const consultaInput = document.getElementById('consulta');
    const btnBuscar = document.getElementById('btnBuscar');
  
    function exibirDados(apiEndpoint, extractData) {
        fetch(apiEndpoint)
            .then((res) => res.json())
            .then((data) => {
                const extractedData = extractData(data);
  
                if (extractedData) {
                    // Limpa o conteúdo anterior antes de exibir novos dados
                    resultadoDiv.innerHTML = '';
  
                    // Itera sobre cada resultado na resposta da API
                    data.response.results.forEach((artigo, index) => {
                        const paragrafo = document.createElement('p');
                        paragrafo.innerHTML = `Resultado ${index + 1}:<br>`;
                        // Itera sobre as propriedades do artigo e exibe cada uma delas
                        Object.entries(artigo).forEach(([key, value]) => {
                            paragrafo.innerHTML += `${key}: ${value}<br>`;
                        });
                        resultadoDiv.appendChild(paragrafo);
                    });
                } else {
                    resultadoDiv.textContent = 'Nenhum resultado encontrado.';
                }
            })
            .catch((error) => {
                console.error('Erro ao recuperar os dados:', error);
            });
    }
  
    // Adiciona um evento de clique ao botão para realizar a busca com base nos parâmetros inseridos
    btnBuscar.addEventListener('click', () => {
        const consulta = consultaInput.value.trim();
        // Substitui espaços por %20 para formar uma consulta válida na URL
  
        // Constrói a URL com base nos parâmetros fornecidos pelo usuário
        const url = `https://content.guardianapis.com/${consulta}&api-key=test`;
  
        // Chama a função para exibir os dados com base nos novos parâmetros
        exibirDados(url, (data) => {
            if (data.response && data.response.results && data.response.results.length > 0) {
                // Retorna toda a lista de resultados
                return data.response.results;
            }
            return null;
        });
    });
  });