let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
  console.log("Botão pressionado");
  let searchDate = document.querySelector("#searchDate").value;
  sendApiRequest(searchDate);
});

async function sendApiRequest(searchDate) {
  let API_KEY = "xOtxsynJKZqih9Sy2V3etep9tWD0oplolOCmW5Mb";

  // Validar a data se estiver preenchida
  if (searchDate && !isValidDate(searchDate)) {
    alert("Por favor, insira uma data válida no formato AAAA-MM-DD.");
    return;
  }

  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  
  // Adicionar a data à URL, se fornecida
  if (searchDate) {
    apiUrl += `&date=${searchDate}`;
  }

  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erro na solicitação da API: ${response.status}`);
    }

    let data = await response.json();
    useApiData(data);
  } catch (error) {
    console.error(error);
  }
}

function useApiData(data) {
  // Limpar conteúdo anterior
  let contentElement = document.querySelector("#content");
  contentElement.innerHTML = "";

  // Verificar se a propriedade 'url' existe e é uma string não vazia
  if (data.url && typeof data.url === "string") {
    contentElement.innerHTML += `<img src="${data.url}" alt="Imagem da NASA">`;
  } else {
    contentElement.innerHTML += "<p>Imagem não disponível</p>";
  }

  // Adicionar outras informações se necessário
  if (data.title) {
    contentElement.innerHTML += `<p>${data.title}</p>`;
  }
  if (data.explanation) {
    contentElement.innerHTML += `<p>${data.explanation}</p>`;
  }
}

// Função auxiliar para validar a data no formato AAAA-MM-DD
function isValidDate(dateString) {
  let regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}

