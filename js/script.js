// Question 1
const division = (a, b) => a % b;

// Question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const gameToHTML = (game) => `<div>
    <h2>${game.name}</h2>
    <dl>
        <dt>Rating</dt>
        <dd>${game.rating}</dd>
        <dt>Number of tags</dt>
        <dd>${game.tags.length}</dd>
    </dl>
</div>`

async function getGames() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const games = data.results;

        document.querySelector(".games").innerHTML = games
            .slice(0,8)
            .map(gameToHTML)
            .join("");
    } catch (exception) {

    }
}
getGames();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
