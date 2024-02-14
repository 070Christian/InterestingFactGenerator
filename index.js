const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "RAdyjxgzHGru+6J9AiD/CQ==dWgIwkbHvse04Icl";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/facts?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a fact";

    jokeEl.innerText = data[0].fact;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a fact";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);