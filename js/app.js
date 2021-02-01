
let productItems = document.querySelectorAll('.product-box__item')
let filterButtons = document.querySelectorAll('select')


document.querySelector('select.type').addEventListener('click', (event)=>{
   
    let filter = +event.target.value + 1 //filter by type
    
    if(filter == 1) {
        productItems.forEach((elem)=>{
            elem.classList.remove('hide')
        })
    }else if(filter == 2 ){
        productItems.forEach((elem) =>{
            if(!elem.classList.contains('breakfest')){
                elem.classList.add('hide')
                elem.classList.contains('breakfest')
            } else {elem.classList.remove('hide')}
        })
    }else if (filter == 3 ){
        productItems.forEach((elem) =>{
            if(!elem.classList.contains('soup')){
                elem.classList.add('hide')
            } else {elem.classList.remove('hide')}
        })
    } else if (filter == 4){
        productItems.forEach((elem) =>{
            if(!elem.classList.contains('garnish')){
                elem.classList.add('hide')
            } else {elem.classList.remove('hide')}
        })
    }
    
})
function checkingPrice (){
    document.querySelector('.price').addEventListener('click', (event)=>{
        let select = event.target.value
        productItems.forEach(elem=>{
            let item = elem.dataset.filter
            if(+select + 1 <=item){
                elem.classList.add('hide')
            } else {
                elem.classList.remove('hide')
            }
        })
    })
}
checkingPrice()
console.log(
    filterButtons[0]
)


let itemQuantity = document.querySelectorAll('.qty__item')
let basketSum = document.querySelector('.current-price')
let basketQty = document.querySelector('.qty')
let price = document.querySelectorAll('.product-box__meta>p')

let addToBasket= document.querySelectorAll('.product-box__btn')
console.log(addToBasket)
for( let i=0; i<=itemQuantity.length; i++){
   addToBasket.forEach(elem =>{

  elem.addEventListener('click', function(){
    
    let currentQty = Number(itemQuantity[0].value) + Number(itemQuantity[1].value)  + Number(itemQuantity[2].value) + Number(itemQuantity[3].value) + Number(itemQuantity[4].value) + Number(itemQuantity[5].value) +  Number(itemQuantity[6].value) + Number(itemQuantity[7].value) +Number(itemQuantity[8].value) + Number(itemQuantity[9].value)  + Number(itemQuantity[10].value)  +Number(itemQuantity[11].value) 
     let currentSum = (+itemQuantity[0].value * +parseInt(price[0].innerHTML)||0) + (+itemQuantity[1].value * +parseInt(price[1].innerHTML)||0) + (+itemQuantity[2].value * +parseInt(price[2].innerHTML)||0) + (+itemQuantity[3].value * +parseInt(price[3].innerHTML)||0) + (+itemQuantity[4].value * +parseInt(price[4].innerHTML)||0) + (+itemQuantity[5].value * +parseInt(price[5].innerHTML)||0) + (+itemQuantity[6].value * +parseInt(price[6].innerHTML)||0) + (+itemQuantity[7].value * +parseInt(price[7].innerHTML)||0) + (+itemQuantity[8].value * +parseInt(price[8].innerHTML)||0)  + (+itemQuantity[9].value * +parseInt(price[9].innerHTML)||0)  + (+itemQuantity[10].value * +parseInt(price[10].innerHTML)||0)  + (+itemQuantity[11].value * +parseInt(price[11].innerHTML)||0)
     basketSum.textContent = currentSum 
     basketQty.textContent = currentQty
   }) })  
}
let modalWindow = document.querySelector('.wrapper_modal_window ')
let btnCheck = document.querySelector('.btn-check')
let btnSend = document.querySelector('.send')
let name = document.querySelector('.name')
let email = document.querySelector('.email')
console.log(btnCheck)
btnCheck.addEventListener('click', function(){
    modalWindow.classList.remove('hide')
})
btnSend.addEventListener('click', function(){
    if(document.querySelector('.name').value == '' || document.querySelector('.name').value == ' '  && email.value == '' || email.value == ' '){
        alert('заповніть поля')
    } else {
        modalWindow.classList.add('hide')
    alert('спасибі за покупку')
    basketSum.textContent = ''
    basketQty.textContent = ''
    }
    
})
