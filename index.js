async function search(){
    
    let itemValues = document.getElementById("searchOptions").value;
    
    switch (itemValues) {
        case "artista":
            let searchArtista = document.getElementById("default-search").value;
            let resultArtista;
            await fetch('https://api.vagalume.com.br/search.art?q='+searchArtista+'&limit=1').then((data) => data.json()).then(json => {
                resultArtista = json.response.docs;
                resultArtista.forEach(docs => {
                    fetch('https://www.vagalume.com.br'+docs.url+'index.js').then((data) => data.json()).then(resultJson => {
                    //json aq
                    });
                });
            });
            break;
        case "letra":
            let searchLetra = document.getElementById("default-search").value;
            let resultLetra;
            await fetch('https://api.vagalume.com.br/search.artmus?q='+searchLetra+'&limit=1').then((data) => data.json()).then(json => {
                resultLetra = json.response.docs;
                resultLetra.forEach(docs => {
                    fetch('https://api.vagalume.com.br/search.php?art='+docs.band+'&mus='+searchLetra+'&apikey={'+fetch("./apikey.json").then((data => data.json())).then(json => {return json.APIKEY})+'}').then((data) => data.json()).then(resultJson => {
                        //json aq
                    });
                })
            });
            break;
        // case "album":
        //     let searchAlbum = document.getElementById("default-search").value;
        //     let resultAlbum;
        //     await fetch('https://api.vagalume.com.br/search.alb?q='+searchAlbum+'&limit=1').then((data) => data.json()).then(json => {
        //         resultAlbum = json.response.docs;
        //         resultAlbum.forEach(docs => {
        //             fetch('https://s2.vagalume.com/'+docs.url).then((data) => data.json()).then(resultJson => {
        //                 //json aq
        //             });
        //         })
        //     });
        //     break;
    }
    
}