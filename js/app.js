const iconsByGenres = Object.freeze({
    adventure: 'adventure',
    sea: 'sea',
    novel: 'book',
    stories: 'book',
    fantasy: 'fantasy',
    travels: 'travels',
    biography: 'biography',
});

const genresLabels = Object.freeze({
    adventure: 'Avventura',
    sea: 'Mare',
    novel: 'Romanzo',
    stories: 'Racconti',
    fantasy: 'Fantastico',
    travels: 'Viaggi',
    biography: 'Autobiografia',
});

const books = [
    {
        id: 1,
        author: 'Stefano Benni',
        title: 'Il bar sotto il mare',
        firstPublishingYear: '1987',
        genres: ['stories'],
        originalLanguage: 'Italiano',
        pages: '180',
        rating: '8',
    },
    {
        id: 2,
        author: 'Stefano Benni',
        title: 'Stranalandia',
        firstPublishingYear: '1984',
        genres: ['novel'],
        originalLanguage: 'Italiano',
        pages: '150',
        rating: '7.5',
    },
    {
        id: 3,
        author: 'Haruki Murakami',
        title: 'Kafka sulla spiaggia',
        firstPublishingYear: '2002',
        genres: ['novel', 'fantasy'],
        originalLanguage: 'Giapponese',
        pages: '566',
        rating: null,
    },
    {
        id: 4,
        author: 'Ernest Hemingway',
        title: 'Il vecchio e il mare',
        firstPublishingYear: '1952',
        genres: ['novel', 'allegoric', 'sea'],
        originalLanguage: 'Inglese',
        pages: '175',
        rating: '9.5',
    },
    {
        id: 5,
        author: 'Robert Louis Stevenson',
        title: "L'isola del tesoro",
        firstPublishingYear: '1883',
        genres: ['novel', 'adventure'],
        originalLanguage: 'Inglese',
        pages: '190',
        rating: '7',
    },
    {
        id: 6,
        author: 'Herman Melville',
        title: 'Moby Dick',
        firstPublishingYear: '1851',
        genres: ['novel', 'adventure'],
        originalLanguage: 'Inglese',
        pages: '422',
        rating: '8.5',
    },
    {
        id: 7,
        author: 'Erri De Luca',
        title: 'Il contrario di uno',
        firstPublishingYear: '2003',
        genres: ['novel'],
        originalLanguage: 'Italiano',
        pages: '120',
        rating: '6',
    },
    {
        id: 8,
        author: 'Diego De Silva',
        title: 'Sono contrario alle emozioni',
        firstPublishingYear: '2011',
        genres: ['novel'],
        originalLanguage: 'Italiano',
        pages: '177',
        rating: '6.5',
    },
    {
        id: 9,
        author: 'Tiziano Terzani',
        title: "Un'indovino mi disse",
        firstPublishingYear: '1995',
        genres: ['travels', 'biography'],
        originalLanguage: 'Italiano',
        pages: '430',
        rating: '5',
    },
    {
        id: 10,
        author: 'Maccio Capatonda',
        title: "Libro",
        firstPublishingYear: '2020',
        genres: ['biography'],
        originalLanguage: 'Italiano',
        pages: '222',
        rating: '10',
    },
    {
        id: 11,
        author: 'David Foster Wallace',
        title: "Una cosa divertente che non farò mai più",
        firstPublishingYear: '1997',
        genres: ['humour'],
        originalLanguage: 'Italiano',
        pages: '150',
        rating: '6',
    },
    {
        id: 12,
        author: 'Stephen King',
        title: "Misery",
        firstPublishingYear: '1987',
        genres: ['thriller'],
        originalLanguage: 'Inglese',
        pages: '358',
        rating: '8',
    },
]

const booksContainer = document.querySelector('.books');

books.forEach((book) => {
    const tags = book.genres.forEach((genre) => {
        return `<div class="book-tag">${genre}</div>`;
    });

    const chars = { ',': '', "'": '', '.': '', ' ': '', '"': '' };

    let ratingString = '';
    const rating = book.rating / 2;
    for (let i = 1; i <= rating; i++) {
        ratingString += '<img src="icons/star.png">';
    }
    if (rating - parseInt(rating) > 0.5) {
        ratingString += '<img src="icons/half-star.png">';
    }
    for (let i = rating; i <= 5; i++) {
        ratingString += '<img src="icons/star-empty.png">';
    }
    
    booksContainer.innerHTML += `
        <div class="book">
            <div class="book-icons">
                <img class="book-icon" src="icons/${iconsByGenres[book.genres[0]]}.png">
            </div>
            <div class="book-image">
                <img src="images/${book.title.toLowerCase().replace(/[,.' "]/g, match => chars[match])}.jpeg" alt="${book.title}">
            </div>
            <h2 class="book-title">
                ${book.title}
                <span class="book-year">${book.firstPublishingYear}</span>
            </h2>
            <h3 class="book-author">di ${book.author}</h3>
            <div class="book-tags">
                ${tags}
            </div>
            <div class="book-rating">
                ${ratingString}
            </div>
            <p class="book-reading-time">Tempo di lettura: ${book.pages / 30}</p>
        </div>
    `;
})