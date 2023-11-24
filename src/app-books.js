function criaCardLivros(book){
    var parentElement = document.getElementsByClassName('results_books')
    var minhaDiv = $('<div class="book_info"></div>');
    minhaDiv.append(`<h3>${book.name}<h3>`);
    minhaDiv.append(`<p>Author: ${book.authors[0]}</p>`)
    minhaDiv.append(`<p class="info_hidden info">Number of pages: ${book.numberOfPages}</p>`)
    minhaDiv.append(`<p class="info_hidden info">Publisher: ${book.publisher}</p>`)
    minhaDiv.append('<button class="read_more">Read More</button>');
    $(parentElement).append(minhaDiv);
    minhaDiv.find('.read_more').click(function() {
      
      var infos = minhaDiv.find('.info')
      for (i=0; i<infos.length; i++){
        if (infos[i].classList.contains('info_hidden')){
          console.log("oi")
          infos[i].classList.remove('info_hidden');
        }else{
          console.log("ola")
          infos[i].classList.add('info_hidden');
        }
      }
    });
  }
  
  function consultarAPI() {
      // URL da API
      var apiUrl = 'https://www.anapioficeandfire.com/api/books';
  
      // Faz a solicitação AJAX
      $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          console.log(data)
          // Manipula os dados recebidos da API
          data.forEach(book => {
            criaCardLivros(book)
          });
        },
        error: function(error) {
          // Manipula erros
          console.error('Erro na consulta à API:', error);
        }
      });
      
    }
    consultarAPI()
  
    function adicionaComportamento(){
      
      var searchInput = document.getElementById('search');
      var searchButton = document.getElementById('button');
      console.log(searchInput.value)
      searchButton.addEventListener("click",()=>{
        var characters = document.querySelectorAll(".book_info")
        characters.forEach(element => {
          element.remove()
        });
        var apiUrl = `https://www.anapioficeandfire.com/api/books?name=${encodeURIComponent(searchInput.value)}`;
        $.ajax({
          url: apiUrl,
          method: 'GET',
          dataType: 'json',
          success: function(data) {
            console.log(data)
            criaCardLivros(data[0])
            // Manipula os dados recebidos da API
          },
          error: function(error) {
            // Manipula erros
            console.error('Erro na consulta à API:', error);
          }
        });
        searchInput.value = ""
      })
    }
    
  $(document).ready(function() {
      adicionaComportamento()
    });