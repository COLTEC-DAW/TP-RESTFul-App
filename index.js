let responseContainer = document.getElementById("generatedResponse");
class Artist_Card{
    constructor(name, photoUrl, top5Lyrics){
        this.name = name;
        this.photoUrl = photoUrl;
        this.top5Lyrics = top5Lyrics;
    }
}
async function load_API_KEY(){
    fetch("./apikey.json")
    .then((data => data.json()))
    .then(json => {return json.APIKEY});
}
async function search(){
    let API_KEY = await load_API_KEY;
    let itemValues = document.getElementById("searchOptions").value;
    let lyricsReturned = false;
    switch (itemValues) {
        case "artista":
            let searchArtista = document.getElementById("default-search").value;
            let resultArtista;
            await fetch('https://api.vagalume.com.br/search.art?q='+searchArtista+'&limit=1').then((data) => data.json()).then(json => {
                resultArtista = json.response.docs;
                resultArtista.forEach(docs => {
                    fetch('https://www.vagalume.com.br'+docs.url+'index.js').then((data) => data.json()).then(resultJson => {
                        let top5Lyrics = [resultJson.artist.toplyrics.item[0], resultJson.artist.toplyrics.item[1], resultJson.artist.toplyrics.item[2], resultJson.artist.toplyrics.item[3], resultJson.artist.toplyrics.item[4]];
                        let artistCard = new Artist_Card(resultJson.artist.desc, resultJson.artist.pic_medium, top5Lyrics);
                        document.getElementById("generatedResponse").innerHTML = buildArtistCard(artistCard);
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
                    fetch(`https://api.vagalume.com.br/search.php?art=${docs.band}&mus=${searchLetra}&apikey={${API_KEY}}`)
                    .then((data) => data.json())
                    .then(resultJson => {
                        console.log(resultJson);
                        if (resultJson.type == "exact" || resultJson.type == "aprox"){
                            generateLyricsText(resultJson)
                            lyricsReturned = true;
                        };
                        if (!lyricsReturned){
                            generateLyricsNotFound()
                            lyricsReturned = true;
                        };
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
function buildArtistCard(Artist_Card){
    let Top5LyricsList = "<ul>";
    for (let i = 0; i < Artist_Card.top5Lyrics.length; i++){
        Top5LyricsList += `<li class="text-lime-300">${i+1}- ${Artist_Card.top5Lyrics[i].desc}</li>`;
    }
    Top5LyricsList += "</ul>";
    let card = `
    <a href="#" class="mx-auto my-5 flex flex-col items-center bg-neutral-700 border rounded-lg shadow-md md:flex-row md:max-w-xl border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://s2.vagalume.com/${Artist_Card.photoUrl}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-100 dark:text-white">${Artist_Card.name}</h5>
    ${Top5LyricsList}
    </div>
    </a>
    `
    return card;
}
function generateLyricsText(lyricsJson){
    let paragraphStyleClasses = ["text-lime-300", "mx-auto", "d-block", "text-center", "my-5"];
    responseContainer.innerHTML = "";
    let lyrics = lyricsJson.mus[0].text;
    let paragraph = document.createElement("p");
    paragraph.classList.add(...paragraphStyleClasses);
    for (let i = 0; i < lyrics.length; i++){
        if (lyrics[i] != "\n"){
            paragraph.innerHTML += lyrics[i];
        }   
        else{
            responseContainer.appendChild(paragraph);
            paragraph = document.createElement("p");
            paragraph.classList.add(...paragraphStyleClasses);
        }
    }
    responseContainer.appendChild(paragraph);
}
function generateLyricsNotFound(){
    responseContainer.innerHTML = "";
    const paragraph = document.createElement("h2");
    paragraph.classList.add("d-block", "mx-auto", "text-center");
    paragraph.appendChild(document.createTextNode("Não foi encontrado"));
    responseContainer.appendChild(paragraph);
}