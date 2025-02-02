const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".btnOne");
const bookList = document.querySelector(".bookList");
const addBook = document.querySelector(".addBook");
const confirmBtn = document.querySelector(".submit");

const myLibrary = [];

function Book(author, title, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}


function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#status").checked;
  const readStatus = read ? "Read" : "Not Read";


  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

function showBooks() {
  const bookOne = document.createElement("div")
  bookOne.classList.add("book")

  const book1 = new Book("learn js", "Marcus Doe", 2020, "Not Read")
  const bookTitle = document.createElement('h2')
  bookTitle.innerText = `Title: ${book1.title}`
  bookOne.appendChild(bookTitle)

  const bookAuthor = document.createElement('h2')
  bookAuthor.innerText = `Author: ${book1.author}`
  bookOne.appendChild(bookAuthor)

  const bookPages = document.createElement('h2')
  bookPages.innerText = `Pages: ${book1.pages}`
  bookOne.appendChild(bookPages)

  const bookStatus = document.createElement('h2')
  bookStatus.innerText = `Status: ${book1.status}`
  bookOne.appendChild(bookStatus)

  const readBtn = document.createElement('button')
  readBtn.classList.add('read')
  readBtn.innerText = `Read`
  const btnOne = document.createElement('button')
  btnOne.classList.add('delete')
  btnOne.innerText = 'Delete'

  bookOne.appendChild(readBtn)
  bookOne.appendChild(btnOne)
  bookList.appendChild(bookOne)
  myLibrary.push(book1)

  handleDelete(btnOne)
  handleStatus(readBtn, bookStatus)
}

showBooks()

function display() {
  bookList.innerText = ''
  myLibrary.forEach((book) => {
    const books = document.createElement('div')
    books.classList.add('book')

    const bookTitle = document.createElement('h2')
    bookTitle.innerText = `Title: ${book.title}`
    books.appendChild(bookTitle)

    const bookAuthor = document.createElement('h2')
    bookAuthor.innerText = `Author: ${book.author}`
    books.appendChild(bookAuthor)

    const bookPages = document.createElement('h2')
    bookPages.innerText = `Pages: ${book.pages}`
    books.appendChild(bookPages)

    const bookStatus = document.createElement('h2')
    bookStatus.innerText = `Status: ${book.status}`
    books.appendChild(bookStatus)

    const readBtn = document.createElement('button')
    readBtn.classList.add('read')
    if (book.status == "Read") {
        readBtn.textContent = "Not Read";
        readBtn.style.background = '#ba0707'
    } else {
      readBtn.textContent = "Read"
      readBtn.style.background = 'green'

    }
    // readBtn.innerText = ""

   const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerText = 'Delete'

    books.appendChild(readBtn)
    books.appendChild(deleteBtn)
    bookList.appendChild(books)

    handleDelete(deleteBtn)
    handleStatus(readBtn, bookStatus)
  })
}

const one = new Book("cali", "cali", 23, "Read")
myLibrary.push(one)


function handleDelete(btn) {
  btn.addEventListener('click', (index) => {
    myLibrary.splice(index, 0)
    console.log("woekin");
    // display()
  })
}

function handleStatus(btn, status) {
  btn.addEventListener('click', () => {
    if (btn.textContent == "Read") {
      btn.textContent = "Not Read"
      status.innerText = `Status: ${" Read"}`
      btn.style.backgroundColor = '#ba0707'
    } else  {
      btn.textContent = "Read"
      status.innerText = `Status: ${"Not Read"}`
      btn.style.backgroundColor = 'green'

    }
  })
}

addBook.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", (e) => {
  addBookToLibrary();
  e.preventDefault();
  display()
  dialog.close();
});


console.log(myLibrary);

