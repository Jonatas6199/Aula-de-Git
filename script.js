async function buscarImagemCachorro() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (response.status === 200) {
        let data = await response.json();
        let img = document.getElementById('dog-img');
        img.src = data.message;
    }
};