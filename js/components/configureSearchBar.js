function configureSearchBar() {
    const executeSearch = () => {
        const query = $('#searchInput').val();

        if (query) {
            loadSearchResults(query);
        }
    };

    $('#searchButton, #searchInput').on('input', executeSearch);

    $('#searchInput').on('keypress', (event) => {
        if (event.which === 13) { // Verifica se a tecla pressionada é Enter (código 13)
            executeSearch();
        }
    });
}
