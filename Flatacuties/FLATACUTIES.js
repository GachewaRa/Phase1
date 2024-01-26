// Fetch data from the server to display on the page
fetch('http://localhost:3000/characters')
  .then(resp => resp.json())
  .then(data => {
    const orderedList = document.querySelector('ol');

    data.forEach(element => {
      const listItem = document.createElement('li');
      listItem.textContent = `${element.name}`;
      listItem.dataset.animalId = element.id; // Set the data-animal-id attribute
      orderedList.appendChild(listItem);
    });

    // Adding event listeners to the list items
    document.querySelectorAll('li').forEach(liElement => {
      liElement.addEventListener('click', event => {
        const animalId = event.target.dataset.animalId;
        
        // Fetch additional data using the animalId
        fetch(`http://localhost:3000/characters/${animalId}`)
          .then(resp => resp.json())
          .then(data => {
            // Handle the data as needed
            const animalTitle = document.getElementById('animalTitle');
            animalTitle.textContent = `${data.name}`;
            const animalVotes = document.getElementById('animalVotes');
            animalVotes.textContent = `${data.votes}`;
            const image = document.getElementById('image');
            image.src = `${data.image}`;
            image.alt = `${data.name}`;

            // Display the hidden items
            animalTitle.style.visibility = 'visible';
            animalVotes.style.visibility = 'visible';
            image.style.visibility = 'visible';

            const actButtons = document.getElementById('actButtons');
            actButtons.style.visibility = 'visible';
          })
          .catch(error => console.error('Error fetching data: ', error));
      });
    });
  })
  .catch(error => console.error('Error fetching characters: ', error));
