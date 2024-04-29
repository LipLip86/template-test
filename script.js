const count = 10;
const apiKey = "kcme_iAXqp8TdGpC--KAIEVoZM2bkWbVhrp-TrRcAcg";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash Api 

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    }
    catch(error) {

    }
}
getPhotos();