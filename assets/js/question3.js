const detailContainer = document.querySelector(".game-details");

// get the querystring
const queryString = document.location.search;

// create an object that will allows us to access all the querystring parameters
const params = new URLSearchParams(queryString);

// get the id parameter from the querystring
const id = params.get("id");

const url = "https://api.rawg.io/api/games/" + id;

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <img src="${details.background_image}">
                                <p>${details.description}</p>
                                <p>Rating: ${details.rating}</p>
                                <time>Released: ${details.released}</time>`;
}

fetchGame();