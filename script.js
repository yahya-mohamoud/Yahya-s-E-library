const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".btnOne");
const bookList = document.querySelector(".bookList");
const addBook = document.querySelector(".addBook");
const confirmBtn = document.querySelector(".submit");

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  getBooks() {
    const bookOne = document.createElement("div");
    bookOne.classList.add("book");

    bookOne.innerHTML = `
                         <h2  style="text-decoration: underline"> ${this.title}</h2>
                         <h2 >author: ${this.author}</h2>
                         <h2>pages: ${this.pages}</h2>
                         <h2 class="readPlc">Read: ${this.read}</h2>
                         <button class="read">READ</button>
                         <button class="delete">Delete</button>`;

    bookList.appendChild(bookOne);

    const readBtns = bookOne.querySelectorAll(".read");
    const readPlc = bookOne.querySelector(".readPlc");
    readBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
       if(btn.textContent == "READ"){
        btn.textContent = "READ"
        readPlc.textContent = "Read: Not Read Yet"
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
       }else{
        btn.textContent = "Not Read Yet"
        readPlc.textContent = "Read: READ"
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
       }
       
      });
    });
  }

  handleClick() {
    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click", (index) => {
      myLibrary.splice(index, 0);

      display();

      myLibrary.splice(index, 1);
    });
  }
}



const book1 = new Book("hebel", "hebel", 90, "READ");
const book2 = new Book("hebla", "hebla", 90, "Read");

book1.getBooks();
book2.getBooks();

book1.handleClick();
book2.handleClick();

myLibrary.push(book1);
myLibrary.push(book2);

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#status").checked;
  const readStatus = read ? "Read" : "Not Read Yet";

  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

function display() {
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
          <h2 style="max-width: 35ch; text-decoration: underline;">${book.title}</h2>
          <h2>Author: <strong>${book.author}</strong></h2>
          <h2>Pages: <strong>${book.pages}</strong></h2>
          <h2 class="readPlc">Read: <strong>${book.read}</strong></h2>
          <button class="read">READ</button>
          <button class="delete">Delete</button>
      `;

    // Append the book element to the book list
    bookList.appendChild(bookElement);

    // Add event listener to the "read" button
    const readBtn = bookElement.querySelector(".read");
    const readPlc = bookElement.querySelector(".readPlc strong");
    readBtn.addEventListener("click", () => {
      if (readBtn.textContent === "READ") {
        readBtn.textContent = "Not Read Yet";
        readBtn.style.backgroundColor = "red";
        readBtn.style.color = "white";
        readPlc.textContent = "Not Read Yet";
      } else {
        readBtn.textContent = "READ";
        readBtn.style.backgroundColor = "green";
        readBtn.style.color = "white";
        readPlc.textContent = "READ";
      }
    });
    // Add event listener to the "delete" button
    const deleteBtn = bookElement.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      display();
    });
  });
}

addBook.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", (e) => {
  addBookToLibrary();
  display();
  e.preventDefault();
  dialog.close();
});
