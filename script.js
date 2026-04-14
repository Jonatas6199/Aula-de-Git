async function buscarImagemCachorro() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random', {
        method: 'GET'
    });
    if (response.status == 200) {
        let responseJson = await response.json();
        let img = document.getElementById('dog-img');
        img.src = responseJson.message;
    }
}