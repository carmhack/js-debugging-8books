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

window.addEventListener('load', function() {
    fetch('http://localhost:3000/books')
    .then(function (response) {
        response.json();
    })
    .then(function (result) {
        displayBooks(result);
    })
    .catch(function (error) {
        alert(error);
    })
});

function displayBooks(books) {
    const booksContainer = document.querySelector('.books');

    books.forEach((book) => {
        const tags = book.genres.forEach((genre) => {
            return `<div class="book-tag">${genre}</div>`;
        });
    
        const chars = { ',': '', '.': '', ' ': '', '"': '' };
    
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
}