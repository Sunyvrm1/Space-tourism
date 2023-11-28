const btns1 = document.querySelectorAll(".desti");
btns1[0].classList.add("selected");

function openTab(destinationName) {
  const btns = document.querySelectorAll(".desti");

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'selected' class from all buttons
      btns.forEach((btn) => btn.classList.remove("selected"));

      // Add 'selected' class to the clicked button
      button.classList.add("selected");
    });
  });

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

// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".desti");
//   const destinationName = document.getElementById("destinationName");
//   const destinationImage = document.getElementById("destinationImage");
//   const destinationDescription = document.getElementById(
//     "destinationDescription"
//   );
//   const destinationDistance = document.getElementById("destinationDistance");
//   const destinationTravelTime = document.getElementById(
//     "destinationTravelTime"
//   );

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // Remove active class from all buttons
//       buttons.forEach((btn) => btn.classList.remove("active"));
//       // Add active class to the clicked button
//       button.classList.add("active");

//       const destination = button.getAttribute("data-destination");

//       // Fetch JSON data and update HTML elements based on the selected destination
//       fetch("your_json_file.json")
//         .then((response) => response.json())
//         .then((data) => {
//           const destinations = data.destinations;
//           const selectedDestination = destinations.find(
//             (dest) => dest.name === destination
//           );
//           if (selectedDestination) {
//             // Update HTML content with the selected destination information
//             destinationName.textContent = selectedDestination.name;
//             destinationImage.src = selectedDestination.images.png;
//             destinationDescription.textContent =
//               selectedDestination.description;
//             destinationDistance.textContent = selectedDestination.distance;
//             destinationTravelTime.textContent = selectedDestination.travel;
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     });
//   });
// });
