function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    console.log(input);
    let x = document.getElementsByClassName('searchable');

    for (let i = 0; i < x.length; i++) {
        let itemText = x[i].textContent.toLowerCase();
        console.log(x[i]);

        if (input === '' || itemText.includes(input)) {
            x[i].style.display = "list-item";
        } else {
            x[i].style.display = "none";
        }
    }
}
