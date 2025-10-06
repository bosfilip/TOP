const createObjBtn = document.querySelector("#createObjBtn");
const cardsDiv = document.querySelector("#cardsDiv")
 
const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

createObjBtn.addEventListener('click', function addToLibrary(){
    const title = document.querySelector("#titleIn").value;
    const author = document.querySelector("#authorIn").value;
    const pages = document.querySelector("#pagesIn").value;
    const read = document.querySelector("#readIn").checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
});

createObjBtn.addEventListener('click', function createCard(){
    if(myLibrary.length > 0){
        const lastObjIndex = myLibrary.length -1;
        const lastObj = myLibrary[lastObjIndex];
        const card = document.createElement('div')
        card.classList.add('card')    
        cardsDiv.appendChild(card)
        
        const titleInfo = lastObj.title;
        const authorInfo = lastObj.author;
        const pagesInfo = lastObj.pages;
        const readInfo = lastObj.read;
        const titleOutput = document.createElement('p')
        const authorOutput = document.createElement('p')
        const pagesOutput = document.createElement('p')
        const readOutput = document.createElement('p')
        titleOutput.textContent = titleInfo;
        authorOutput.textContent = authorInfo;
        pagesOutput.textContent = pagesInfo;
        readOutput.textContent = readInfo;
        card.appendChild(titleOutput);
        card.appendChild(authorOutput);
        card.appendChild(pagesOutput);
        card.appendChild(readOutput);
        const removeBtn = document.createElement('button');
        removeBtn.classList.add("removeBtn")
        card.appendChild(removeBtn)
        removeBtn.textContent = 'Remove'
        removeBtn.addEventListener('click', () => {
            cardsDiv.removeChild(card)
        })
    }
});

