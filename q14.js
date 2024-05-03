// Q14-Write a JavaScript program to display the reading status.

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

function displayStatus(library) {
    for (var i = 0; i < library.length; i++) {
        var book = library[i];
        if (book.readingStatus) {
            console.log(`Book Name: ${book.title}, Author: ${book.author}, Reading Status: Read`);
        } else {
            console.log(`Book Name: ${book.title}, Author: ${book.author}, Reading Status: Not yet read`);
        }
    }
}

displayStatus(library);
