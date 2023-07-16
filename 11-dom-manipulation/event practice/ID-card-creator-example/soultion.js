const form = document.body.querySelector('.form')

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const {name,id,address,funFact} = e.target
    console.log(name.value)


    const container = document.body.querySelector(".container")
    const idCard = document.createElement('div')
    container.appendChild(idCard)
    const image = document.createElement('div')
    const info = document.createElement('div')
    idCard.appendChild(image)
    idCard.appendChild(info)
    idCard.classList.add('id-card')
    image.classList.add('image')
    info.classList.add('info')

    const nameEl = document.createElement('p')
    const idEl = document.createElement('p')
    const addressEl = document.createElement('p')
    const funFactEl = document.createElement('p')
    info.appendChild(nameEl)
    info.appendChild(idEl)
    info.appendChild(addressEl)
    info.appendChild(funFactEl)

    nameEl.innerText = `Name: ${name.value}`
    idEl.innerText = `ID: ${id.value}`
    addressEl.innerText = `Address: ${address.value}`
    funFactEl.innerText = `Fun Fact: ${funFact.value}`
})