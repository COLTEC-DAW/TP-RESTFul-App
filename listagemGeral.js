async function getTopArtists() 
{
    var response;
    await fetch('https://api.vagalume.com.br/rank.php?type=art&period=month&scope=internacional&limit=10&apikey={').then((data) => data.json()).then(json => {
        response = json;
    });

    return response;
}

async function createLines()
{
    var table = document.getElementById('table');
    var users = await getTopArtists();

    users.art.month.internacional.forEach(user => 
    {
        var row = table.insertRow(1);
        var cell = row.insertCell(0);
        
        cell.id = "list";
        cell.innerHTML = "<a href='" + user.url + "' target='_blank'>" + user.name + "</a>";

    });
}

async function main()
{
    await createLines();
}