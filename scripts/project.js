const projects = [
    {
        title: "Presentation Card",
        description: "This is a card where you could show your information or even a card where you could add an event information",
        img: "../img/1project.png",
    },
    {
        title: "QR Code Card",
        description: "This is a card where you could add specific  information, and for more information to scan the QR code",
        img: "../img/2project.png"
    },
    {
        title: "Product Registration",
        description: "This is a program where you could enter product details and it will be stored and shown as a table",
        img: "../img/3project.png"
    },
    {
        title: "Presentation Card",
        description: "This is a card where you could show your information or even a card where you could add an event information",
        img: "../img/1project.png",
    },
    {
        title: "QR Code Card",
        description: "This is a card where you could add specific  information, and for more information to scan the QR code",
        img: "../img/2project.png"
    },
    {
        title: "Product Registration",
        description: "This is a program where you could enter product details and it will be stored and shown as a table",
        img: "../img/3project.png"
    },
    {
        title: "Presentation Card",
        description: "This is a card where you could show your information or even a card where you could add an event information",
        img: "../img/1project.png",
    },
    {
        title: "QR Code Card",
        description: "This is a card where you could add specific  information, and for more information to scan the QR code",
        img: "../img/2project.png"
    },
    {
        title: "Product Registration",
        description: "This is a program where you could enter product details and it will be stored and shown as a table",
        img: "../img/3project.png"
    },
]

let cards = document.querySelector("#cards_project_container")

function cardsProject(array){
    array.forEach(array =>{
    cards.innerHTML += `
        <div class="flex flex-col items-center m-5 bg-deepBlue rounded-2xl p-5 overflow-hidden hover:ring-2">
            <h2 class="font-bold text-lg mb-5 text-center">${array.title}</h2>
            <div class="overflow-hidden rounded-2xl mb-5">
                <img class="rounded-2xl object-cover transition-all duration-500 hover:scale-120"
                    src="${array.img}" alt="${array.title}" loading="lazy" />
            </div>
            <p>
                ${array.description}
            </p>
        </div>
    `
})
}

cardsProject(projects)