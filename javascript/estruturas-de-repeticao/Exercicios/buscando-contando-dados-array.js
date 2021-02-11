


function booksSearch(category) {
    let books = []
    for (const book of category.books) {
        books.push(book)
    }
    return books
}

function amountCategory (books) {
    return books.length
}

function amountBooks (categorys) {
    let booksCount = 0
    for (const categoryObj of categorys) {
        booksCount += booksSearch(categoryObj).length
        
        console.log(`${categoryObj.category}: ${booksCount} livro(s).`);
        booksCount = 0
    }

}


function amountAuthors (categorys) {
    let booksAuthors = []
    let authors = []
    let amountAuthors = 0
    for (const categoryObj of categorys) {
        let books = booksSearch(categoryObj)
        for (const book of books) {
            booksAuthors.push(book.author)
        } 
    }   
    // set é um objeto iterável que possui somente valores únicos!(sem repetição)
        test = new Set(booksAuthors)
        for (const author of test) {
            authors.push(author)
        }
        
        amountAuthors = test.size
        console.log(`Autores: ${authors.join(", ")}\nQuantidade: ${amountAuthors}`);
}

function booksAuthors (categorys, name) {
    let booksAuthors = []
    for (const categoryObj of categorys) {
        let books = booksSearch(categoryObj)
        for (const book of books) {
            if (book.author == name) {
                booksAuthors.push(book.title)
            }
        } 
    }

    console.log(`Os livros de ${name} são ${booksAuthors.join(", ")}.`);
}



const booksByCategory = [
    { 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milhonária",
                author: "T. Harv Eker"
            },
            
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },

            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    { 
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            
            {
                title: "Ansiedade - Como enfrentar o mal do século?",
                author: "Augusto Cury"
            },

            {
                title: "Os 8 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

console.log(`Número de cateogrias: ${amountCategory(booksByCategory)}`);
amountBooks(booksByCategory)
amountAuthors(booksByCategory) 
booksAuthors(booksByCategory, "Augusto Cury")