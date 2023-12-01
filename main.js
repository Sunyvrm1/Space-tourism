// add or remove border from buttons (Destination)

const btns = document.querySelectorAll(".desti");
btns[0].classList.add("selected");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// change content from buttons (Destination)

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

// add or remove background from buttons (crew)

const btns1 = document.querySelectorAll(".crewBtn");
btns1[0].classList.add("selected1");
btns1.forEach((button) => {
  button.addEventListener("click", () => {
    btns1.forEach((btn) => btn.classList.remove("selected1"));
    button.classList.add("selected1");
  });
});

// change content from buttons (crew)

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

// add or remove background from buttons (technology)

const btns2 = document.querySelectorAll(".techbtn");
btns2[0].classList.add("selected2");
btns2.forEach((button) => {
  button.addEventListener("click", () => {
    btns2.forEach((btn) => btn.classList.remove("selected2"));
    button.classList.add("selected2");
  });
});

// change content from buttons (technology)

function opentech(techName) {
  fetch("data.json")
    .then((response) => response.json())
    .then((techData) => {
      const techno = techData.technology.find((tech) => tech.name === techName);
      if (techno) {
        document.getElementById("techName").innerText = techno.name;
        document.getElementById("techImage").src = techno.images.portrait; // or webp
        document.getElementById("techDes").innerText = techno.description;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

//naviagtion

// window.addEventListener("scroll", function () {
//   var links = document.querySelectorAll("nav ul li");
//   var destination1 = document.getElementById("destination");
//   var home = document.getElementById("home");

//   links.forEach(function (link) {
//     var sectionId = link.querySelector("a").getAttribute("href").substring(1);
//     var section = document.getElementById(sectionId);
//     var sectionTop = section.getBoundingClientRect().top;
//     console.log(sectionId);
//     var viewportHeight =
//       window.innerHeight || document.documentElement.clientHeight;

//     if (sectionTop < 0.5 * viewportHeight) {
//       links.forEach(function (link) {
//         if (link !== link.parentNode.parentNode.querySelector(".active")) {
//           link.classList.remove("active");
//         }
//       });
//       link.classList.add("active");
//     }
//   });
// });

window.addEventListener("scroll", function () {
  var links = document.querySelectorAll("nav ul li");

  links.forEach(function (link) {
    var sectionId = link.querySelector("a").getAttribute("href").substring(1);
    var section = document.getElementById(sectionId);
    var sectionTop = section.getBoundingClientRect().top;
    var viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (sectionTop < 0.5 * viewportHeight) {
      links.forEach(function (link) {
        if (link !== link.parentNode.parentNode.querySelector(".active")) {
          link.classList.remove("active");
        }
      });
      link.classList.add("active");
    }
  });
});

window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;
  let suny = document.querySelector(".suny");
  if (scrollValue > 300) {
    suny.classList.remove("active");
  } else {
    suny.classList.add("active");
  }
});
