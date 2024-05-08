const count = 10;
const apiKey = "kcme_iAXqp8TdGpC--KAIEVoZM2bkWbVhrp-TrRcAcg";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let imgContainer = document.getElementById('image-container');


// Set attributes fucntion 
function setAttributes(element, attributes ) {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// display photos from API array
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create an element
        let item = document.createElement('a');
        // Set an Attribute
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });

        let img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_title
        });

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
    }
    catch(error) {
    }
}

getPhotos();