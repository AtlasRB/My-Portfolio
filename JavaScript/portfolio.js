//Functions
function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('visible')
}

const portfolioTarget = document.querySelector('.items')

fetch('JavaScript/portfolio.json').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
    data.Portfolio.forEach(function (item) {
        portfolioTarget.innerHTML += `<div>
            <h3 class="title">${item.name}</h3>
            <p>${item.img}</p>
            <p>${item.description}</p>
            <p>${item.link}</p>
         </div>`
    })
}) 

//Call functions
document.querySelector('.drop').addEventListener('click', toggleDropdown)