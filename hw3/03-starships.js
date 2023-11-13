const url = "https://swapi.dev/api/starships/";
let starships;
async function fetchData(url) {
  // REtrieve the data from the API
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    starships = await data.results;
  } catch (error) {
    console.error(error);
    starships = [];
  }
}
fetchData(url);

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.classList.add("starship-container");

  const spaceshipName = document.createElement("div");
  spaceshipName.classList.add("spaceship-name");
  spaceshipName.textContent = spaceship.name;

  // Spaceship Credits
  const spaceshipCredits = document.createElement("div");
  spaceshipCredits.classList.add("spaceship-credits");
  spaceshipCredits.textContent = `${parseInt(
    spaceship.cost_in_credits
  ).toLocaleString()} credits`;

  const manufactureElement = document.createElement("p");
  manufactureElement.classList.add("manufactureby");
  manufactureElement.textContent = `Manufactured by ${spaceship.manufacturer}`;

  const mainDivElement = document.createElement("div");
  mainDivElement.classList.add("row");

  const speedElement = document.createElement("div");
  speedElement.classList.add("speed-and-capacity");
  speedElement.classList.add("border-right");

  const speedValue = document.createElement("div");
  speedValue.classList.add("speed-and-capacity-value");
  speedValue.textContent = `${spaceship.max_atmosphering_speed}`;

  const speedText = document.createElement("p");
  speedText.style.margin = 0;
  speedText.textContent = `Max atmosphering speed`;

  speedElement.appendChild(speedValue);
  speedElement.appendChild(speedText);
  mainDivElement.appendChild(speedElement);

  const capacityElement = document.createElement("div");
  capacityElement.classList.add("speed-and-capacity");

  const capacityText = document.createElement("p");
  capacityText.style.margin = 0;
  capacityText.textContent = `Cargo capacity`;

  const capacityValue = document.createElement("div");
  capacityValue.classList.add("speed-and-capacity-value");
  capacityValue.textContent = `${parseInt(
    spaceship.cargo_capacity
  ).toLocaleString()}`;

  capacityElement.appendChild(capacityValue);
  capacityElement.appendChild(capacityText);

  mainDivElement.appendChild(speedElement);
  mainDivElement.appendChild(capacityElement);

  container.appendChild(spaceshipName);
  container.appendChild(spaceshipCredits);
  container.appendChild(manufactureElement);
  container.appendChild(mainDivElement);

  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  let starships = input.filter(
    (item) => parseInt(item.passengers) < 10 && parseInt(item.crew) > 1
  );
  return starships;
};

const reduceStarships = (input) => {
  const totalCost = input.reduce((accumulator, currentValue) => {
    const cost = isNaN(currentValue.cost_in_credits)
      ? 0
      : parseInt(currentValue.cost_in_credits);
    return accumulator + cost;
  }, 0);
  const formattedCost = totalCost.toLocaleString("en-US");
  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below

let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", async () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
