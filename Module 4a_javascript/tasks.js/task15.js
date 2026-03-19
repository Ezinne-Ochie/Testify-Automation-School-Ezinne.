const books ={ 
    title: 'half of a yellow sun',
    description: 'african fiction',
    numberOfPages: 200,
    author: 'ngozi chimamanda adiche',
    reading: 'true',
    books: [
        {
     title: 'things fall apart',
     description: 'african fiction',
     numberOfPages: 300,
     author: 'chinua achebe',
     reading: 'false',
        },
        {
     title: 'the trials of brother jero',
     description: 'african fiction',
     numberOfPages: 180,
     author: 'wole soyinka',
     reading: 'true',
        },
        {
     title: 'the incorruptible judge',
    description: 'african novel',
    numberOfPages: 50,
    author: 'olu olagoke',
    reading: 'true',

        },

    ]
}
// Check the main book first
if (books.reading === 'true') {
    console.log(books.title);
}

for (const book of books.books) {
    if (book.reading === 'true') {
        console.log(book.title);
    }
}
