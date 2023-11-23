fetch('https://content.guardianapis.com/search?page=2&q=debate&api-key=test').then((res) => res.json())
.then((data) => console.log(data))