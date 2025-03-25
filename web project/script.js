// script.js
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    getRecommendations(query);
  });
  
  async function getRecommendations(query) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = 'Loading...';
  
    const simulatedMovies = await simulateMovieData(query);
  
    recommendationsDiv.innerHTML = '';
  
    if (simulatedMovies.length === 0) {
      recommendationsDiv.innerHTML = '<p>No movies found.</p>';
      return;
    }
  
    simulatedMovies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
        <a href="https://ticketnew.com/movies/chennai"><button>Book Tickets</button></a>
        <h4>Cast:</h4>
        <div class="cast-list">
          ${movie.cast.map(actor => `
            <div class="cast-member">
              <img src="${actor.image}" alt="${actor.name}">
              <p>${actor.name}</p>
            </div>
          `).join('')}
        </div>
        <h4>Reviews:</h4>
        <div class="reviews">
          ${movie.reviews.map(review => `<p class="review">"${review}"</p>`).join('')}
        </div>
      `;
      recommendationsDiv.appendChild(movieCard);
    });
  }
  
  async function simulateMovieData(query) {
    return new Promise(resolve => {
      setTimeout(() => {
        const movies = [
          {
            title: 'Veera Dheera Sooran',
            description: 'Veera Dheera Sooran: Part 2 is an upcoming Tamil action thriller that promises a gripping narrative centered on Kaali, a seemingly ordinary provision store owner and family man. However, beneath his unassuming exterior lies a complex involvement in a dangerous crime network, driving a mysterious and high-stakes mission. The film delves into Kaalis struggle as he navigates this perilous world, balancing his familial responsibilities with the dark undercurrents of his other life. With high-octane action sequences and emotional depth, the movie explores themes of morality, survival, and the blurred lines between good and evil. Featuring a stellar cast including Vikram, S.J. Suryah, and Suraj Venjaramoodu, the film is set to deliver a powerful cinematic experience.',
            image: 'vds.jpg',
            cast: [
              { name: 'Vikram', image: 'vikram.jpg' },
              { name: 'Dushara Vijayan', image: 'dushara vijayan.jpg' },
              { name: 'S.J. Suriya', image: 's.j. suryah.jpg' }
            ],
            reviews: ['Mind-bending and brilliant.', 'A must-watch for sci-fi fans.', 'Christopher Nolan at his best.']
          },
          {
            title: 'L2: Empuraan',
            description: '"L2: Empuraan" is the highly anticipated sequel to the Malayalam film Lucifer, directed by Prithviraj Sukumaran and written by Murali Gopy. The film delves deeper into the character of Stephen Nedumpally, revealing his transformation into the powerful Khureshi-Abraam. It follows his expansion of a global empire, navigating betrayals, political conspiracies, and confronting enemies from his past. As hidden truths emerge, he is thrust into a high-stakes game of power, revenge, and survival, showcasing the man behind the myth. Effectively, the film is set to expand the Lucifer universe, and give the viewers a deeper look into the main characters world.',
            image: 'l2.jpg',
            cast: [
              { name: 'Mohanlal', image: 'mohanlal.jpg' },
              { name: 'Prithiviraj', image: 'prithivirajii.jpg' },
              { name: 'Saniya Iyappan', image: 'saniya.jpg' }
            ],
            reviews: ['Mind-bending and brilliant.', 'A must-watch for sci-fi fans.', 'Christopher Nolan at his best.']
          },
          {
            title: 'Dragon',
            description: 'In a realm where ancient magic and soaring dragons reign, a young, unlikely hero discovers a hidden connection to a legendary beast. When a dark force threatens to shatter the fragile peace between humans and dragons, they must embark on a perilous journey. Facing treacherous landscapes and formidable foes, they strive to unlock the secrets of their bond. Amidst breathtaking aerial battles and heart-stopping encounters, the fate of their world hangs in the balance, testing their courage and the enduring power of friendship against overwhelming odds',
            image: 'drag.jpg',
            cast: [
              { name: 'Pradeep', image: 'pr.jpg' },
              { name: 'Anubama', image: 'anu.jpg' },
              { name: 'Kayadu Lohar', image: 'kaya.jpg' }
            ],
            reviews: ['Mind-bending and brilliant.', 'A must-watch for sci-fi fans.', 'Christopher Nolan at his best.']
          },
          {
            title: 'Sweetheart',
            description: 'Sweetheart: Rio," is a survival horror film that follows Jenn, a young woman who finds herself stranded on a seemingly deserted tropical island after a boat accident. As night falls, she discovers shes not alone a monstrous, amphibious creature emerges from the ocean depths, hunting anything that moves. Jenn must use her wits and limited resources to survive against this terrifying predator. The film is a tense and atmospheric thriller, focusing on Jenns resilience and determination in the face of unimaginable danger. Its a raw and visceral portrayal of human survival against a primal, unrelenting threat.',
            image: 'sweet.jpg',
            cast: [
              { name: 'Rio Raj', image: 'rio.jpg' },
              { name: 'Gopika', image: 'gopi.jpg' },
            ],
            reviews: ['Mind-bending and brilliant.', 'A must-watch for sci-fi fans.', 'Christopher Nolan at his best.']
          },
          {
            title: 'Perusu',
            description: 'Perusu" (2025) is a Tamil comedy film directed by Ilango Ramanathan, revolving around two brothers who encounter bizarre circumstances following their fathers death. The narrative unfolds as they attempt to conduct a secret funeral, revealing that something unusual remains with their deceased father. This leads to chaotic situations, forcing the brothers to confront their strained relationship and deal with the unexpected continuation of their fathers presence. The film, starring Vaibhav and Sunil Reddy, blends adult rural comedy with elements of familial drama, offering a unique and humorous take on dealing with death and dysfunctional family dynamics.',
            image: 'peru.jpg',
            cast: [
              { name: 'Vaibhav', image: 'vai.jpg' },
              { name: 'Chandini', image: 'chandini.jpg' },
              { name: 'Redin Kingsley', image: 'redin.jpg' }
            ],
            reviews: ['Mind-bending and brilliant.', 'A must-watch for sci-fi fans.', 'Christopher Nolan at his best.']
          },
        ];
  
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
        resolve(filteredMovies);
      }, 500);
    });
  }