function configureSearchBar() {
    const executeSearch = () => {
        let query = $('#searchInput').val();

        if (query) {
            loadMovieList(1, searchMovie, query)
        }
    }
    
    $('#searchButton').on('click', () => {
        executeSearch()
    });

    $('#searchInput').on('keypress', (event) => {
        if (event.which === 13) { // Verifica se a tecla pressionada é Enter (código 13)
            executeSearch();
        }
    });



    
}