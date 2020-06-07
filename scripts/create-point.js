//Dados da entidade

function populateStates() {
    const stateSelect = document.querySelector("select[name=state]")

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
    const stateInput = document.querySelector("[name=stateName]")
    
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
    .querySelector("select[name=state]")
    .addEventListener("change", populateCitys)
//fim

