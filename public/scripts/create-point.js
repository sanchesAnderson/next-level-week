//Dados da entidade

function populateStates() {
    const stateSelect = document.querySelector("select[name=stateId]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {
            for( const state of states ) {
                stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        } )
}

populateStates()

function populateCitys(event) {
    
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    citySelect.innerHTML = '<option value>Selecione a Cidade</option>'
    citySelect.disabled = true
    
    const stateId = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    
    stateInput.value = event.target.options[indexOfSelectedState].text    

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`)
        .then( res => res.json() )
        .then( cities => {
            for( const city of cities ) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        } )
}

document
    .querySelector("select[name=stateId]")
    .addEventListener("change", populateCitys)
//fim

//Itens de coleta
const items = document.querySelectorAll(".items-grid li")

for(const item of items) {
    item.addEventListener("click", handSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handSelectedItem(event) {

    const tagLi = event.target
    tagLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    // Verificar se existem itens selecionados, se sim
    // guarda os itens selecionados
    const alreadySelected = selectedItems.findIndex(item => item == itemId)
    
    // se já estiver selecionado
    if(alreadySelected != -1) {
        // tira da seleção
        const filteredItems = selectedItems.filter( item => item != itemId)

        selectedItems = filteredItems
    } else {
        //se não estiver selecionado
        // adiciona à seleção
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems
    
}