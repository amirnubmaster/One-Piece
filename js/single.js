const data = JSON.parse(localStorage.getItem('singleUser'))
const container = document.querySelector('.centerBlock')
const title = document.querySelector('.title')


const temp = data.map(({name , image , level , qualification , bounty , fruit , power}) =>{
    container.innerHTML = `
        <div class="card">
            <div class="card-image">
                <img src="${image}" class="single-image">
            </div>
            <div class="card-body">
                <h2 class="Name">${name}</h2>
            </div>
            <div class="pis">
                <div class="one">
                    <p>Level:  ${level}</p>
                    <p>Qualification:  ${qualification}</p>
                    <p>Bounty:  ${bounty}</p>
                </div>
                <div class="two">
                    <p>Fruit:  ${fruit}</p>
                    <p>Power:  ${power}</p>
                </div>
            </div>
        </div>
    `

    title.innerHTML = name
})