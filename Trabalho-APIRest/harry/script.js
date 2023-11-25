const content = document.getElementById('content');
const cardContainer = document.querySelector('.card-container');

const fetchAPICompletaSeleciona = (value) =>{
    
    const result = fetch(value)
    .then((res) => res.json())
    .then((data) => {
        return data;
    });

    return result;
}

const updateContent = async () => {
    
    const result = await fetchAPICompletaSeleciona(`https://hp-api.onrender.com/api/characters`);
    
    result.forEach((character) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        const newImage = document.createElement('img');
        if (character.image !== "") {
            newImage.src = character.image;
        }else{
            newImage.src = 'harry.png';
        }

        newImage.alt = character.name;
        cardFront.appendChild(newImage);

        const characterInfo = document.createElement('div');
        characterInfo.innerHTML = `
            <h1>${character.name}</h1>
            <h3>Casa: ${character.house}</h3>
            <h3>Espécie: ${character.species}</h3>
            <h3>Data de nascimento:<br> ${character.dateOfBirth}</h3>
        `;
        cardBack.appendChild(characterInfo);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        newDiv.appendChild(cardInner);
        cardContainer.appendChild(newDiv);
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    await updateContent();
});
