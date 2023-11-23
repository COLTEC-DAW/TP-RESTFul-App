fetch('https://content.guardianapis.com/search?page=2&q=debate&api-key=18f36e1a-de90-4893-b549-64d800c3fd9b').then((res) => res.json())
.then((data) => console.log(data))