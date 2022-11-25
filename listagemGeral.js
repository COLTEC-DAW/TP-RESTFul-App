let topArtists;
async function getTopArtists() 
{
    var response;
    await fetch('https://api.vagalume.com.br/rank.php?type=art&period=month&scope=internacional&limit=10&apikey={').then((data) => data.json()).then(json => {
        response = json;
        console.log(json);
    });

    return response;
}

async function createLines()
{
    var table = document.getElementById('table');
    topArtists = await getTopArtists();

    topArtists.art.month.internacional.forEach(user => 
    {
        var row = table.insertRow(1);
        var cell = row.insertCell(0);
        
        cell.id = user.name;
        cell.setAttribute('onclick', `showArtistDetails('${user.name}')`);
        cell.innerHTML = "<p style='cursor: pointer;'' class='bg-slate-300 text-slate-900 w-32 mx-auto p-4 my-2 rounded hover:bg-black hover:text-lime-300'>" + user.name + "</p>";
    
    });
}

async function main()
{
    await createLines();
}
function showArtistDetails(artistName){ 
    let artist = topArtists.art.month.internacional.find(artist => {if (artist.name == artistName) return artist});
    console.log(artist)
    let card = `
    <a target='_blank' href="${artist.url}" class="mx-auto my-5 flex flex-col items-center bg-neutral-700 border rounded-lg shadow-md md:flex-row md:max-w-xl border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="${artist.pic_medium}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-100 dark:text-white">${artist.name}</h5>
    <p class="text-white">Views: ${artist.views}</p>
    </div>
    </a>
    `;
    responseContainer.innerHTML = card;
}