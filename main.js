function openTab(destinationName) {
    fetch('data.json')
      .then(response => response.json())
      .then(destinationsData => {
        const destination = destinationsData.destinations.find(dest => dest.name === destinationName);
        if (destination) {
          document.getElementById('destinationName').innerText = destination.name;
          document.getElementById('destinationImage').src = destination.images.png; // or webp
          document.getElementById('destinationDescription').innerText = destination.description;
          document.getElementById('destinationDistance').innerText = destination.distance;
          document.getElementById('destinationTravelTime').innerText = destination.travel;
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
