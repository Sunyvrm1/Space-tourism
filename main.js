// add or remove border from buttons

const btns = document.querySelectorAll(".desti");
btns[0].classList.add("selected");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// change content from buttons

function openTab(destinationName) {
  fetch("data.json")
    .then((response) => response.json())
    .then((destinationsData) => {
      const destination = destinationsData.destinations.find(
        (dest) => dest.name === destinationName
      );
      if (destination) {
        document.getElementById("destinationName").innerText = destination.name;
        document.getElementById("destinationImage").src =
          destination.images.png; // or webp
        document.getElementById("destinationDescription").innerText =
          destination.description;
        document.getElementById("destinationDistance").innerText =
          destination.distance;
        document.getElementById("destinationTravelTime").innerText =
          destination.travel;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// add or remove border from buttons

const btns1 = document.querySelectorAll(".crewBtn");
btns1[0].classList.add("selected1");
btns1.forEach((button) => {
  button.addEventListener("click", () => {
    btns1.forEach((btn) => btn.classList.remove("selected1"));
    button.classList.add("selected1");
  });
});

// change content from buttons

function openCrew(crewName) {
  fetch("data.json")
    .then((response) => response.json())
    .then((crewsData) => {
      const crew1 = crewsData.crew.find((crew2) => crew2.name === crewName);
      if (crew1) {
        document.getElementById("crewName").innerText = crew1.name;
        document.getElementById("crewImage").src = crew1.images.png; // or webp
        document.getElementById("crewBio").innerText = crew1.bio;
        document.getElementById("crewRole").innerText = crew1.role;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
