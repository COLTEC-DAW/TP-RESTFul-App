function displayPagination(totalPages, currentPage, anyApiFunction, anyApiParam) {
    $('#paginationContainer').pagination({
        pages: Math.min(500, totalPages),
        itemsOnPage: 20,
        currentPage: currentPage,
        cssStyle: 'dark-theme',
        onPageClick: (page, event) => {
            loadMovieList(page, anyApiFunction, anyApiParam)
        }
    });
}