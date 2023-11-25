const characterId = document.getElementById('characterId');
const content = document.getElementById('content');
const image = document.getElementById('img');
const conteinerResult = document.getElementById('result-style');

//Captura os botões
const btnGo = document.getElementById('btn-go');
const btnReset = document.getElementById('btn-reset');


const fetchAPICompleta = () =>{
    //requisitando api com fetch
    const result = fetch(`https://hp-api.onrender.com/api/characters`)
    //quando a api responde, converte pra json
    .then((res) => res.json())
    //retorna os dados do objeto de fato
    .then((data) => {
        return data;
    });

    return result;
}

const fetchAPI = (value) =>{
    //requisitando api com fetch
    const result = fetch(`https://hp-api.onrender.com/api/character/${value}`)
    //quando a api responde, converte pra json
    .then((res) => res.json())
    //retorna os dados do objeto de fato
    .then((data) => {
        return data[0];
    });

    return result;
}
const keys = ['name', 'alternate_names', 'species', 'gender', 'house', 'dateOfBirth',
'wizard', 'ancestry', 'wand', 'patronus'];

const newKeys = {
    name: 'Nome',
    alternate_names: 'Nomes Alternativos',
    species: 'Espécie',
    gender: 'Gênero',
    house: 'Casa de Hogwarts',
    dateOfBirth: 'Data de Nascimento',
    wizard: 'Bruxo?',
    ancestry: 'Ancestralidade', 
    wand: 'Varinha', 
    patronus: 'Patronous', 
};

const buildResult = (result) => {

    return keys.map((key) => document.getElementById(key))
    .map((elem) => {
        if(elem.checked === true){

            if((Array.isArray(result[elem.name])) === true){
                
                passa = result[elem.name].join(', ');

                //opção especificamente para essa api
            }else if(elem.name === 'wand'){
                array = [result[elem.name].wood, result[elem.name].core, result[elem.name].length + 'cm']
                passa = array.join(', ');
            }else{
                passa = result[elem.name];
            }

            //cria um elemento parágrafo
            const newElem = document.createElement('p');
            //elem.name recebe(:) valor
            newElem.innerHTML = `${newKeys[elem.name]}: ${passa}`;
            //coloca o parágrafo como filho de content
            content.appendChild(newElem);
        }
    });
}

btnGo.addEventListener('click', async (event) => {
    //Impede que a página atualize automaticamente
    event.preventDefault();

    if(characterId.value === ''){
        return content.innerHTML = 'Faça um filtro, por favor';
    }
    console.log(characterId.value);

    resultCompleto = await fetchAPICompleta();

    let personagemId;

    for(const personagem of resultCompleto){
        if(personagem.name === characterId.value){
            personagemId = personagem.id;
        }
    }

    const result = await fetchAPI(String(personagemId));
    console.log(result);

    if(content.firstChild !== null){
        content.innerHTML = '';
    }
    conteinerResult.className = 'result-style';
    //muda a propriedade 'src' da imagem
    
    if (result.image !== "") {
        image.src =  `${result.image}`;
    }else{
        image.src = 'harry.png';
    }

    buildResult(result);

})

btnReset.addEventListener('click', () => location.reload());