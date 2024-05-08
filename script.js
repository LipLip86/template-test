const count = 10;
const apiKey = "kcme_iAXqp8TdGpC--KAIEVoZM2bkWbVhrp-TrRcAcg";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let imgContainer = document.getElementById('image-container')


// display photos from API array
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create an element
        let item = document.createElement('a');
        // Set an Attribute
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target', '_blank');

        let img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);

        // Put the child into parent containers
        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}
// Get photos from Unsplash Api 

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos()
        // console.log(photosArray);
    }
    catch(error) {
    }
}

getPhotos();