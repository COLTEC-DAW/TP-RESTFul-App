document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector(`.search-box`);
    const input = form.querySelector(`input[type="search"]`);
    const resultsContainer = document.querySelector('.results');
    const resultsCounter = document.querySelector('header p');

    const modal = document.getElementById("modalTextoWikipedia");
    setupModal();

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const searchTerm = input.value;

        if(searchTerm){
            searchWikipedia(searchTerm);
        }
    });

    function setupModal() {
        const span = document.getElementsByClassName("fecharModal")[0];

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    function searchWikipedia(searchTerm){
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${encodeURIComponent(searchTerm)}`;

        fetch(url).then(response => response.json()).then(data => {
            displayResults(data.query.search);
        }).catch(error => alert('Error: ' + error));
    }
    
    function displayResults(results){
        resultsContainer.innerHTML = '';
        resultsCounter.textContent = `Número de resultados: ${results.length}`
        
        results.forEach(result => {
            const resultsElements = document.createElement('div');

            let titulo = document.createElement('a');

            titulo.setAttribute('href', '#');
            titulo.setAttribute('id', `titulo${result.pageid}`);
            titulo.innerHTML = result.title;
            titulo.addEventListener("click", function () { openModal(result.pageid) });

            resultsElements.appendChild(titulo);

            let texto = document.createElement('p');
            texto.innerHTML = `${result.snippet}`;
            resultsElements.appendChild(texto);

            resultsElements.className = 'result';

            resultsContainer.appendChild(resultsElements);

            printDetails(result, resultsElements);
        });
    }

    function openModal(id) {
        modal.style.display = "block";
        changeModalText(id);
    }

    function changeModalText(id) {
        const pageUrl = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&redirects=1&origin=*&pageids=${id}`;
        
        fetch(pageUrl).then(response => response.json()).then(data => {
            const pageList = data.query.pages;

            Object.keys(pageList).forEach(id => {
                const currentPage = pageList[id];
                const conteudoModal = document.getElementById("conteudoPagina");

                let stringConteudo = currentPage.extract.replaceAll('\n', '<br/>');

                conteudoModal.innerHTML = stringConteudo;
                console.log(currentPage.extract);
            })
        }).catch(error => alert('Error: ' + error));
    }

    function printDetails(result, div) {
        const pageDetailsDiv = document.createElement('div');
        pageDetailsDiv.className = 'details';
        div.appendChild(pageDetailsDiv);

        createDetailBox(pageDetailsDiv, 'Núm. palavras', result.wordcount);
        createDetailBox(pageDetailsDiv, 'Tamanho (bytes)', result.size);
        createDetailBox(pageDetailsDiv, 'ID da página', result.pageid);
    }

    function createDetailBox(div, string, value) {
        let wordCountBox = document.createElement('div');
        wordCountBox.className = 'detailBox';

        wordCountBox.innerHTML = `<p>${string}: ${value}</p>`;

        div.appendChild(wordCountBox);
    }
});