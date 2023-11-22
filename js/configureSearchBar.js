function configureSearchBar() {
    $('#searchButton').on('click', () => {
        let query = $('#searchInput').val();

        if (query) {
            loadMovieList(1, searchMovie, query)
        }
    });

}