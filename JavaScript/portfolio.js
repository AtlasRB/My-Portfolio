//Functions
function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('visible')
}

const portfolioTarget = document.querySelector('.items')

fetch('JavaScript/portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    data.Portfolio.forEach(function (item) {
        portfolioTarget.innerHTML += `<div class="project">
            <h3 class="title">${item.name}</h3>
            <div class = "content">
                <img src="${item.img}" class="imagewindow" alt="Placeholder text"/>
                <p>${item.description}</p>
                <a href="${item.link} class="" target="_blank">GitHub ${item.name}</a>
            </div>
         </div>`
    })
}) 

//Call functions
document.querySelector('.drop').addEventListener('click', toggleDropdown)