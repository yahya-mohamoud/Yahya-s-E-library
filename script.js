const dialog = document.querySelector('dialog')
const closeBtn = document.querySelector(".btnOne")
const bookList = document.querySelector('.bookList')
const addBook = document.querySelector('.addBook')
const confirmBtn = document.querySelector('.submit')


const myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

function books (title, author, pages, read){
    const book1 = document.createElement('div')
    book1.classList.add('bookDiv')

    const book = new Book("If Hemingway wrote a JS", "Angus Croll", 196, "Read");
    book1.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: <strong>${book.author}</strong></p>
        <p>Pages: <strong>${book.pages}</strong></p>
        <p>Read: <strong>${book.read}</strong></p>
        <button class="delete">Delete</button>
        `
    bookList.appendChild(book1)
    myLibrary.push(book)


    const book2 = document.createElement("div")
    book2.classList.add("bookDiv-2")

    const bookTwo = new Book("How to win freinds and influency people", "Dale Carnegie", 253, "Read")
    book2.innerHTML = `
    <h2>${bookTwo.title}</h2>
    <p>Author: <strong>${bookTwo.author}</strong></p>
    <p>Pages: <strong>${bookTwo.pages}</strong></p>
    <p>Read: <strong>${bookTwo.read}</strong></p>
    <button class="delete">Delete</button>
    `

    bookList.appendChild(book2);
    myLibrary.push(bookTwo)
    
    const book3 = document.createElement("div")
    book3.classList.add("bookDiv-3")

    const bookThree = new Book("how to unf*ck your life", "Mark Manson", 483, "Not read yet" )
    book3.innerHTML = `
    <h2>${bookThree.title}</h2>
    <p>Author: <strong>${bookThree.author}</strong></p>
    <p>Pages: <strong>${bookThree.pages}</strong></p>
    <p>Read: <strong>${bookThree.read}</strong></p>
    <button class="delete">Delete</button>
    `

    bookList.appendChild(book3);
    
    myLibrary.push(bookThree);
    display();
}
books()
function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#status').checked;
   const readStatus = read ? "Read" : "Not Read Yet"
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
  }

  function display (){
    bookList.innerHTML = '';
    
    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
        <h2 style="max-width: 35ch";>${book.title}</h2>
        <p>Author: <strong>${book.author}</strong></p>
        <p>Pages: <strong>${book.pages}</strong></p>
        <p>Read: <strong>${book.read}</strong></p>
        <button class="delete">Delete</button>
        `

        bookList.appendChild(bookElement);

        const deleteBtn = bookElement.querySelector('.delete');
        deleteBtn.addEventListener('click', function(){
          myLibrary.splice(index, 0);
          
            console.log('working');
          
            myLibrary.splice(index, 1);
            display();
            })
            })
  }

  addBook.addEventListener('click', () =>{
    dialog.showModal();
  })

  closeBtn.addEventListener('click', ()=>{
    console.log("click click click");
    
    dialog.close();
  });

  confirmBtn.addEventListener('click',(e) => {
    addBookToLibrary();
    display();
    e.preventDefault()
    dialog.close()
  })
