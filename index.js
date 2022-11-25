async function search(){
    
    let itemValues = document.getElementById("searchOptions").value;
    let resources = document.getElementById("resources");

    switch (itemValues) {
        case "artistas":
            let searchArtista = document.getElementById("default-search").value;
            let resultArtista;
            await fetch('https://api.vagalume.com.br/search.art?q='+searchArtista+'&limit=1').then((data) => data.json()).then(json => {
                console.log(json);
                resultArtista = json.response.docs[0].url;
            });
            await fetch('https://www.vagalume.com.br'+resultArtista+'index.js').then((data) => data.json()).then(resultJson => {
                console.log(resultJson);
            });
            break;
        case "letra":
            let searchLetra = document.getElementById("default-search").value;
            let resultLetra;
            await fetch('https://api.vagalume.com.br/search.artmus?q='+searchLetra+'&limit=1').then((data) => data.json()).then(json => {
                console.log(json);
                resultLetra = json.response.docs[0].band;
            });
            await fetch('https://api.vagalume.com.br/search.php?art='+resultLetra+'&mus='+searchLetra+'&apikey={'+ fetch("./apikey.json").then((data => data.json())).then(json => {
            console.log(json);    
            return json.APIKEY})+'}').then((data) => data.json()).then(resultJson => {
                console.log(resultJson);
            });
            break;

    }
    
}