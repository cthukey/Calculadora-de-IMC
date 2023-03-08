//estruturando o modal
export const modal = {
//obj litetal, com essa estrutura de dados assim tendo mais clareza oq e responsabilidade do meu modal
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal .close'),
       
    open(){
        modal.wrapper.classList.add('open')
    },
    close(){
        modal.wrapper.classList.remove('open')
    }
}

modal.buttonClose.onclick = () => { // uma function arrow.
    modal.close()//modal
}


window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
    //console.log(event.key) //usei para saber a tecla desejada
    if(event.key === 'Escape'){
        modal.close()
    }
}
