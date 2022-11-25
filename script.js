const submitButton = document.querySelector('#submit'); //chama o botão
const input = document.querySelector('#input');
const errorSpan = document.querySelector('#error'); //elemento de erro
const resultsContainer = document.querySelector('#results'); //container dos resultados

const endpoint = 'https://en.wikipedia.org/w/api.php?'; //documento da api do wikipedia
const params = { //parametros que podem ser utilizados
    origin: '*',
    format: 'json', //formato
    action: 'query',
    prop: 'extracts',
    exchars: 250, //limite de palavras do preview
    exintro: true,
    explaintext: true, // uisamos o explaintext como um preview do artigo inteiro
    generator: 'search', //pro site entregar o máximo daquilo que pedimos
    gsrlimit: 20, //limite de resultados
};
//funções auxiliares
const disableUi = () => { //função de desabilitar a interface do usuário
    input.disabled = true;
    submitButton.disabled = true;
};

const enableUi = () => {
    input.disabled = false;
    submitButton.disabled = false;
};

const clearPreviousResults = () => { //Limpar os resultados anteriores
    resultsContainer.innerHTML = '';
    errorSpan.innerHTML = '';
};

const isInputEmpty = input => { //Função para verificar se o campo de entrada está vazio antes de enviar a solicitação
    if (!input || input === '') return true; // se a entrada for igua a uma string vazia, retorna verdadeiro
    return false;
};

const showError = error => { //função de erro (spaw de erro)
    errorSpan.innerHTML = ` ${error} `;
};

const showResults = results => {
    results.forEach(result => {
        resultsContainer.innerHTML += `
        <div class="results__item">
            <a href="https://en.wikipedia.org/?curid=${result.pageId}" target="_blank" class="card animated bounceInUp">
                <h2 class="results__item__title">${result.title}</h2>
                <p class="results__item__intro">${result.intro}</p>
            </a>
        </div>
    `;
    });
};

const gatherData = pages => {
    const results = Object.values(pages).map(page => ({
        pageId: page.pageid,
        title: page.title,
        intro: page.extract,
    }));

    showResults(results);
};

const getData = async () => { //função que busca os dados que solicitamos e que não faça mais nada antes de obter uma resposta (sucesso ou erro)
    const userInput = input.value;
    if (isInputEmpty(userInput)) return; 

    params.gsrsearch = userInput; //parametros
    clearPreviousResults();
    disableUi();

    try {
        const { data } = await axios.get(endpoint, { params }); //usando axios, disponível no nosso html

        if (data.error) throw new Error(data.error.info);
        gatherData(data.query.pages);
    } catch (error) {
        showError(error);
    } finally {
        enableUi();
    }
};

const handleKeyEvent = e => { //a solicitação só sera enviada quando o usuário apertar enter
    if (e.key === 'Enter') {
        getData();
    }
};

const registerEventHandlers = () => {
    input.addEventListener('keydown', handleKeyEvent);
    submitButton.addEventListener('click', getData);
};

registerEventHandlers(); //manipuladores de registro