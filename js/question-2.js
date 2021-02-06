// Question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const loading = '<div class="loading"></div>';
const errormessage ='<div class="errorMessage">Something went wrong... grab a cup of coffee and try again.</div>';

const addToDOM = (html) => document.querySelector(".games").innerHTML = html;
const gameToHtmlTableRow = (game) => 
`<tr>
    <td>${game.name}</td>
    <td>${game.rating}</td>
    <td>${game.tags.length}</td>
</tr>`;

const getGames = async () => {
    addToDOM(loading);  
    try {
        //throw new Error("ouch, you really need coffee!");
        const response = await fetch(url);
        const data = await response.json();
        const gameRows = data.results
            .slice(0,8)
            .map(gameToHtmlTableRow)
            .join("");

        addToDOM(
            `<table>
                <thead>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Number of tags</th>
                </thead>
                <tbody>${gameRows}</tbody>
            </table>`
        );
    } catch (exception) {
        console.log(exception);
        addToDOM(errormessage);
    }
}
getGames();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice