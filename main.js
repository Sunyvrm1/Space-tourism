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
