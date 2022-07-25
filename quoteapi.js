import fetch from "node-fetch";
const url = "https://type.fit/api/quotes";
fetch(url).then((response) => {
    return response.json();
}).then(quote => {
    console.log(quote)
})