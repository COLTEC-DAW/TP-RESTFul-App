fetch('https://content.guardianapis.com/search?page=2&q=debate&api-key=test')
  .then((res) => res.json())
  .then((data) => {
    console.log(JSON.stringify(data.response.results, null, 2));

  })
  .catch((error) => {
    console.error('Erro ao recuperar os dados:', error);
  });
