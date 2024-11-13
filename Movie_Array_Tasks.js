// JavaScript file for questions on array of objects similar to the movie array example.

// Create a list of books in the following format:
// [
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     rating: 4.9,
//     details: [
//       { chapter: "Introduction", pages: 20 },
//       { chapter: "Chapter 1", pages: 15 }
//     ]
//   },
//   ...
// ]

// ​
// Write a function to return the book title and the chapter with the maximum pages.
// Return a list of unique authors.

const books = [
  {
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    rating: 4.5,
    details: [
      { chapter: "Introduction", pages: 25 },
      { chapter: "Chapter 1", pages: 30 },
      { chapter: "Chapter 2", pages: 40 }
    ]
  },
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    rating: 4.7,
    details: [
      { chapter: "Introduction", pages: 15 },
      { chapter: "Chapter 1", pages: 25 },
      { chapter: "Chapter 2", pages: 35 }
    ]
  },
  {
    title: "The Hating Game",
    author: "Sally Thorne",
    rating: 4.3,
    details: [
      { chapter: "Introduction", pages: 10 },
      { chapter: "Chapter 1", pages: 20 },
      { chapter: "Chapter 2", pages: 30 }
    ]
  },
  {
    title: "Me Before You",
    author: "Jojo Moyes",
    rating: 4.6,
    details: [
      { chapter: "Introduction", pages: 20 },
      { chapter: "Chapter 1", pages: 25 },
      { chapter: "Chapter 2", pages: 40 }
    ]
  }
];

// Function to Return Book Title and Chapter with Maximum Pages
// My `getMaxPageChapter` function will loop through each book and 
// return the title and chapter with the maximum pages for that book.

const getMaxPageChapter=(books)=>{
  return books.map(book => {
    const maxChapter = book.details.reduce((max, chapter) => {
      return chapter.pages > max.pages ? chapter : max;
    }, book.details[0]);

    return {
      title: book.title,
      chapter: maxChapter.chapter
    };
  });
}

console.log(getMaxPageChapter(books));
// o/p:
// [
//   { title: 'The Love Hypothesis', chapter: 'Chapter 2' },
//   { title: 'It Ends with Us', chapter: 'Chapter 2' },
//   { title: 'The Hating Game', chapter: 'Chapter 2' },
//   { title: 'Me Before You', chapter: 'Chapter 2' }
// ]


// Function to Return a List of Unique Authors:
// The `getUniqueAuthor` function will extract the authors from the books and 
// return a list of unique authors.

const getUniqueAuthor=(books)=>{
  const authors = books.map(book => book.author);
  return [...new Set(authors)];
}
console.log(getUniqueAuthor(books));
// o/p: [ 'Ali Hazelwood', 'Colleen Hoover', 'Sally Thorne', 'Jojo Moyes' ]