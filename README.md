# Trabalho Prático: Aplicativo Móvel

Data de Apresentação: 23/11/2017

Grupo: Dois alunos

Valor: 15 pontos (DAW & TP)

## O mundo RESTFUL

Uma das principais vantagens das aplicações REST está presente na possibilidade de prover dados da aplicação para uso de terceiros. Atualmente, várias empresas e organizações disponibilizam APIs públicas que podem ser acessadas publicamente. Dessa forma, outros desenvolvedores podem consumir essas informações em seus programas e aplicativos.

Neste trabalho, seu grupo irá explorar as funcionalidades presentes na plataforma [Ionic](http://ionicframework.com/docs/v1/) para exibir e manipular os dados de uma API REST disponível publicamente. Para isso,vocês irão desenvolver um aplicativo em ionic que irá consumir uma API existente de forma a fornecer informações que [agreguem valor](https://3.bp.blogspot.com/-6Q43vCscvwM/Vs20so_hldI/AAAAAAAAEYo/hPRcT2_FLQY/s1600/meme%2Brei%2Bdo%2Bcamarote%2Bagregar%2Bvalor.jpg) ao dia a dia do usuário de seu aplicativo.

Seu aplicativo deverá implementar as seguintes funcionalidades:

* **Listagem geral:** Seu aplicativo deverá listar os recursos da API. A listagem deverá se adaptar ao tipo de dado servido pela API.
* **Seleção de recursos:** Seu aplicativo deverá permitir que o usuário selecione um dos recursos da lista e então exibir seus detalhes.
* **Busca de recursos:** O usuário poderá buscar por um recurso específico através de um mecanismo de busca.
* **Outra funcionalidade:** Uma outra funcionalidade a sua escolha.

## Avaliação

Seu trabalho será avaliado com base nos seguintes critérios:

1. Implementação das funcionalidades descritas anteriormente
1. Correta utilização e manipulação dos recursos presentes no framework ionic
1. Qualidade do código desenvolvido no aplicativo
1. Aparência e experiência de uso do aplicativo

## Sugestões

Segue abaixo uma lista de sugestões de APIs públicas que estão disponíveis para consumo, classificadas por categoria:

### Finanças

* [Fixer.io](http://fixer.io/): Fornece cotações de moeda em tempo real
* [Blockchain.info](https://blockchain.info/api): Manipulação de bitcoin
* [coindesk](https://www.coindesk.com/api/): Cotação de moedas virtuais

### Entretenimento

* [riot games](https://developer.riotgames.com/): Acesso aos dados dos jogos desenvolvidos pela RIOT.
* [XKCD](https://xkcd.com/json.html): Acesso as tirinhas e informações do XKCD.
* [An API of Ice and Fire](https://anapioficeandfire.com/): *"If you want justice, you've come to the wrong place."*
* [TMDB](https://www.themoviedb.org/documentation/api): Acesso a base de dados dos filmes presentes na página <https://www.themoviedb.org>.

### Rede & Localização

* [IP API](https://ipapi.co/): Localização com base em endereços IP
* [Google Maps](https://developers.google.com/maps/): API de desenvolvimento do Google Maps

### Matemática & Ciências

* [NumbersAPI](http://numbersapi.com/): Curiosidades, fatos e eventos históricos sobre números.
* [NASA API](https://api.nasa.gov/): API de acesso aos dados fornecidos pela NASA.

### Música & Áudio

* [Spotify](https://developer.spotify.com/web-api/): API de acesso ao Spotify
* [Vagalume](https://api.vagalume.com.br/docs/): Acesso aos dados do Vagalume
* [Soundcloud](https://developers.soundcloud.com/docs/api/): Acesso aos dados do Soundcloud

### News & Informações

* [The Guardian](http://open-platform.theguardian.com/): API para acesso as notícias publicadas pelo jornal The Guardian
* [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page): Acesso aos artigos do wikipedia
* [Medium](https://github.com/Medium/medium-api-docs): Acesso aos artigos e usuários presentes na plataforma Medium
* [HackerNews](https://github.com/HackerNews/API): Notícias, comentários e outras informações presentes no site HackerNews

### Fotos & Imagens

* [Flickr](https://www.flickr.com/services/api/): Fotos e usuários presentes no Flickr
* [500px](https://github.com/500px/api-documentation): Acesso as funcionalidades presentes no 500px
* [Giphy](https://developers.giphy.com/): Busca & manipulação dos gifs presentes no site giphy.com

### Business

* [Linkedin](https://developer.linkedin.com/docs/rest-api#): Acesso aos dados do LinkedIn.
* [FIPE](https://deividfortuna.github.io/fipe/): Acesso aos valores em tempo real dos carros cadastrados na Tabela FIPE.