const clientId = '13b8fb19a7d446d798c12035546308b1';
const clientSecret = '86baa76d10a44de7895bc196c26b923a';
const apiUrl = 'https://api.spotify.com/v1';



async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });


    const data = await response.json();
    return data.access_token;
}


async function listResources() {
    const accessToken = await getAccessToken();


    fetch(`${apiUrl}/browse/new-releases`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
            const resourceList = document.getElementById('resourceList');
            resourceList.innerHTML = '';


            data.albums.items.forEach(resource => {
                const listItem = document.createElement('div');
                listItem.textContent = resource.name;
                listItem.addEventListener('click', () => showDetails(resource.id));
                resourceList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao obter recursos:', error));
}


async function showDetails(resourceId) {
    const accessToken = await getAccessToken();


    fetch(`${apiUrl}/albums/${resourceId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
            const resourceDetails = document.getElementById('resourceDetails');
            resourceDetails.innerHTML = `<h2>${data.name}</h2><p>${data.artists[0].name}</p>`;
        })
        .catch(error => console.error('Erro ao obter detalhes do recurso:', error));
}


async function searchResource() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();


    if (searchTerm !== '') {
        const accessToken = await getAccessToken();


        fetch(`${apiUrl}/search?q=${searchTerm}&type=album`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                const resourceList = document.getElementById('resourceList');
                resourceList.innerHTML = '';


                data.albums.items.forEach(resource => {
                    const listItem = document.createElement('div');
                    listItem.textContent = resource.name;
                    listItem.addEventListener('click', () => showDetails(resource.id));
                    resourceList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Erro ao buscar recursos:', error));
    } else {

        listResources();
    }
}

listResources();