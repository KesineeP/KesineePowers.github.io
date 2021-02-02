let myLibrary =[];


//book constructor
function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}
Book.prototype.info = function() {
  return 'read';
}
//add new book function
function addBookToLibrary(id) {

}
const newBook = new Book()
