const resultsContainer = document.querySelector(".results");

const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        resultsContainer.innerHTML = "";

        const games = data.results;

        games.forEach(function(game) {
            resultsContainer.innerHTML += `
<a href="question3.html?id=${game.id}">
<div class="game">
    <h1>${game.name}</h1>
    <p>Released: ${game.released}</p>
    <p>Rating: ${game.rating}</p>
</div>
`;
        });
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchGames();