//create map
const map = L.map('mapid').setView([-22.5085994,-44.1068429], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remover icon 

    marker && map.removeLayer(marker)

    //add icon layer

    marker = L.marker([lat, lng], { icon }).addTo(map);
})

// select photos

// add field photos

function addPhotoField () {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFielContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio, se sim não adiconar ao container
    const input = newFielContainer.children[0]

    if(input.value == "") {
        return 
    }
    //limpar o campo
    input.value = ""
    //adicionar o clone ao container de #imagem
    container.appendChild(newFielContainer)
}

function deleteField (event) {
    const span = event.currentTarget
    
    const fieldContainer = document.querySelectorAll('.new-upload')

    if(fieldContainer.length <= 1) {
        //limpar valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

//seleção do sim e não

function toggleSelect (event) {
    // retirar a class .active doa botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    //colocar a class .active nesse botao
    const button = event.currentTarget
    button.classList.add('active')
    // pegar o botão clicado

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    // verificar se sim ou não
    input.value = button.dataset.value
}

function validate(event){
    const needsLatAndLng = false;
    if(needsLatAndLng){
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}