//Functions
function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('visible')
}

const websitesTarget = document.querySelector('.items')

fetch('JavaScript/groupProjects.json').then(function (response) {
    return response.json()
}).then(function (data) {
    let counter = 1
    data.Websites.reverse().forEach(function (item) {
        websitesTarget.innerHTML += `<div class="project">
            <h3 class="title">${item.name}</h3>
            
            <div class = "content text">
                <img src="${item.img}" class="imagewindow" alt="An image showing my ${item.name} website"/>
                <p class="description">${item.description}</p>
                <div class="clicker">
                    <a href="${item.link}" target="_blank" class="linkDesign links">GitHub ${item.name}</a>
                    <a href="${item.livelink}" target="_blank" class="linkDesign links">Live site ${item.name}</a>
                    <p>More details <i data-opens=".project${counter}" class="fa-solid fa-caret-down moreDrop"></i></p>
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