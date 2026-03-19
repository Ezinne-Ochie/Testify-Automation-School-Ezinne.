const book = {
    title: 'Americana',
    description: 'African fiction citing some challanges as an amerian returnee',
    numberOfPages: 350 ,
    author: 'Ngozi Chimamanda Adiche',
    reading: 'true',
    toggleReadingStatus: function(){
        if(book.reading===true) {
            book.reading = false
        } else {
            book.reading = true
        }
    }
}

book.toggleReadingStatus

console.log(book.reading)