// LIBRARY ARRAY WITH OBJECTS
let library = [
  {
    title: "Espresso lessons",
    author: "Arno Ilgner",
    isRead: true
  },
  {
    title: "Wintering",
    author: "Katherine May",
    isRead: false
  },
  {
    title: "Under floden",
    author: "Staffan Nordstrand",
    isRead: true
  }
];


// ADD BOOK FUNCTION
function addBook() {
  let title = prompt("Title of the book:");
  if (title.trim() === "" || title === null) {
    alert("⚠️ Title is required");
    return;
  }

  let author = prompt("Name of the author:");
  if (author.trim() === "" || author === null) {
    alert("⚠️ Author is required");
    return;
  }

  let readAnswer = prompt('Is this book read? ("yes" or "no")').toLowerCase();
  if (readAnswer === null || (readAnswer !== "yes" && readAnswer !== "no")) {
    alert('⚠️ Answer with "yes" or "no".');
    return;
  }
  const isRead = readAnswer === "yes";

  const book = {
    title,
    author,
    isRead
  };

  library.push(book);
  alert(`✅ Added "${title}" by ${author} to your library.`);
}


// LIST BOOKS FUNCTION
function listBooks() {

  let message = "📚 Library \n\n";
  library.forEach((book, order) => {
    message += `${order + 1}. "${book.title}" by ${book.author} : `;

    if (book.isRead) {
      message += "Read ✔️ \n";
    } else {
      message += "Not read\n";
    }
  });
  alert(message);
}


// MARK AS READ FUNCTION
function markAsRead(title) {
  const book = library.find(notRead => notRead.title.toLowerCase() === title.toLowerCase());

  if (!book) {
    alert(`⚠️ "${title}" not found.`);
    return;
  }

  book.isRead = true;
  alert(`✅ "${book.title}" is now marked as read.`);
}

      

function books() {
    let running = true;

while (running) {
const choice = prompt(`
  📚 Book Tracker

  1. Add Book
  2. List Books
  3. Mark Book as Read
  4. Exit
  
  Enter your choice:`);
  
    switch (choice) {
      case "1":
        addBook();
        break;
      case "2":
        listBooks();
        break;
      case "3":
        const title = prompt("Enter the title of the book to mark as read:");
        markAsRead(title);
        break;
      case "4":
        running = false;
        alert("Goodbye! 😸");
        break;
      default:
        alert("Invalid choice.");
    }
  }
}

books();