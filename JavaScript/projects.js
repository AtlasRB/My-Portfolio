//Functions
function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('visible')
}

const portfolioTarget = document.querySelector('.items')

fetch('JavaScript/projects.json').then(function (response) {
    return response.json()
}).then(function (data) {
    let counter = 1
    data.Portfolio.forEach(function (item) {
        portfolioTarget.innerHTML += `<div class="project">
            <h3 class="title">${item.name}</h3>
            <div class = "content text">
                <img src="${item.img}" class="imagewindow" alt="Placeholder text"/>
                <p>${item.description}</p>
                <div class="clicker">
                    <a href="${item.link} class="" target="_blank">GitHub ${item.name}</a>
                    <p">More details <i data-opens=".project${counter}" class="fa-solid fa-caret-down moreDrop"></i></p>
                </div>
            </div>
            <p class="text more project${counter}">${item.largeDescription}</p> 
         </div>`
         counter += 1
    })
    const buttons = document.querySelectorAll('.moreDrop')
    buttons.forEach(function (target) {
        target.addEventListener('click', function () {
            const buttonOpen = target.dataset.opens
            const selection = document.querySelector(buttonOpen)
            selection.classList.toggle('visible')
        })
    })

}) 

//Call functions
document.querySelector('.drop').addEventListener('click', toggleDropdown)

