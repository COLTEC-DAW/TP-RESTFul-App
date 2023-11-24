var parentElement = document.getElementsByClassName('results_houses');

function showInfo(text, houses){
    var minhaDiv = $('<div class="houses_info"></div>');
    minhaDiv.append(`<h3>${houses.name}<h3>`);
    minhaDiv.append(`<p>Current lord: ${text}</p>`);
    minhaDiv.append(`<p class="info_hidden info">Coat of arms: ${houses.coatOfArms}</p>`);
    minhaDiv.append(`<p class="info_hidden info">Region: ${houses.region}</p>`);
    minhaDiv.append('<button class="read_more">Read More</button>');
    $(parentElement).append(minhaDiv);

    minhaDiv.find('.read_more').click(function () {
      var infos = minhaDiv.find('.info');
      infos.toggleClass('info_hidden');
    });
}

function criaCardCasas(houses) {

    if (houses.currentLord) {
      $.ajax({
        url: houses.currentLord,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
          showInfo(data.name, houses)
        },
        error: function (error) {
          console.error('Erro na consulta à API:', error);
        }
      });
    } else {
      showInfo("No current lord", houses)
    }
  }
  
  function consultarAPI() {
    var apiUrl = 'https://www.anapioficeandfire.com/api/houses';

    $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function (data) {

        data.forEach(houses => {
          criaCardCasas(houses);
        });
      },
      error: function (error) {
        console.error('Erro na consulta à API:', error);
      }
    });
  }
  
  function adicionaComportamento() {
    var searchInput = document.getElementById('search');
    var searchButton = document.getElementById('button');
    var parentElement = document.getElementsByClassName('results_houses');

    searchButton.addEventListener('click', () => {
      var characters = document.querySelectorAll('.houses_info');
      characters.forEach(element => {
        element.remove();
      });
      var apiUrl = `https://www.anapioficeandfire.com/api/houses?name=${encodeURIComponent(searchInput.value)}`;
      $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {

          if(data[0]==null){
            var minhaDiv = $('<div class="houses_info"></div>');
            minhaDiv.append("<p>house not found</p>")
            $(parentElement).append(minhaDiv);
          }else{
            criaCardCasas(data[0]);
          }
          
        },
        error: function (error) {
          console.error('Erro na consulta à API:', error);
        }
      });
      searchInput.value = '';
    });
  }
  
  $(document).ready(function () {
    consultarAPI();
    adicionaComportamento();
  });
  