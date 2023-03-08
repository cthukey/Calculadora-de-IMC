import { modal } from'./modal.js'
import { alertError } from'./alert-error.js'
import { IMC,notANumber } from"./utils.js"

// variaveis
const form = document.querySelector('form')//verificar a acao de envio...,  para assim bloaquear o carregamento.
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () =>alertError.close()
inputHeight.oninput = () =>alertError.close() 

form.onsubmit = event => { // com arrow function, passando o evento...
    event.preventDefault() //com o preventDefault() quando clicar a pagina nao sera recarregada.
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertErro = notANumber(weight) || notANumber(height)
    if(showAlertErro){
        alertError.open()
        return;
    }
    
    alertError.close()
    
    const result = IMC(weight,height)
    const message = `Seu IMC e de ${result}`

    modal.message.innerHTML= message
    modal.open()//modal

}

