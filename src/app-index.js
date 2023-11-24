function criaCardPersonagens(character){
  var parentElement = document.getElementsByClassName('results_characters')
  var minhaDiv = $('<div class="character_info"></div>');
  minhaDiv.append(`<h3>${character.aliases}<h3>`);
  minhaDiv.append(`<p>Gender: ${character.gender}</p>`)
  minhaDiv.append(`<p class="info_hidden info">Name: ${character.name}</p>`)
  minhaDiv.append(`<p class="info_hidden info">Culture: ${character.culture}</p>`)
  minhaDiv.append('<button class="read_more">Read More</button>');
  $(parentElement).append(minhaDiv);
  minhaDiv.find('.read_more').click(function() {
    
    var infos = minhaDiv.find('.info')
    for (i=0; i<infos.length; i++){
      if (infos[i].classList.contains('info_hidden')){
        infos[i].classList.remove('info_hidden');
      }else{
        infos[i].classList.add('info_hidden');
      }
    }
  });
}

function consultarAPI() {
    var apiUrl = 'https://www.anapioficeandfire.com/api/characters';

    $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function(data) {

        data.forEach(character => {
          criaCardPersonagens(character)
        });
      },
      error: function(error) {
        console.error('Erro na consulta à API:', error);
      }
    });
    
  }
  consultarAPI()

  function adicionaComportamento(){
    
    var searchInput = document.getElementById('search');
    var searchButton = document.getElementById('button');
    var parentElement = document.getElementsByClassName('results_characters')

    searchButton.addEventListener("click",()=>{
      var characters = document.querySelectorAll(".character_info")
      characters.forEach(element => {
        element.remove()
      });
      var apiUrl = `https://www.anapioficeandfire.com/api/characters?name=${encodeURIComponent(searchInput.value)}`;
      $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          if(data[0]==null){
            var minhaDiv = $('<div class="character_info"></div>');
            minhaDiv.append("<p>Character not found</p>")
            $(parentElement).append(minhaDiv);
          }else{

            criaCardPersonagens(data[0])
          }

        },
        error: function(error) {
          console.error('Erro na consulta à API:', error);
        }
      });
      searchInput.value = ""
    })
  }
  
$(document).ready(function() {
    adicionaComportamento()
  });