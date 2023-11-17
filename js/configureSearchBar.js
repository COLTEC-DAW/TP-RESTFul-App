function configureSearchBar() {
    $('#search-button').on('click', () => {
        let query = $('#search-input').val();

        console.log(query)
        if (query) {
            loadMovieList(1, searchMovie, queryk)
        }
    });

}