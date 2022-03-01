// Selectors
let name__input = document.querySelector('#name__input');
let surname__input = document.querySelector('#surname__input');
let email__input = document.querySelector('#email__input');
let number__input = document.querySelector('#number__input');
let next__btn = document.querySelector('#next__btn')




// Listener
next__btn.addEventListener('click',()=>{


    check__inputs()
})







// Functions
function check__inputs(){
    // Name input Check
    if(name__input.value == '' || name__input.value.length <= 2){
        name__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.name__alert').style.visibility = 'visible'
    }else{
        name__input.style.border = '1px solid #525557'
        document.querySelector('.name__alert').style.visibility = 'hidden'
    }
    // Surname input Check
    if(surname__input.value == '' || surname__input.value.length <= 2){
        surname__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.surname__alert').style.visibility = 'visible'
    }else{
        surname__input.style.border = '1px solid #525557'
        document.querySelector('.surname__alert').style.visibility = 'hidden'
    }
    // Email input Check
    if(email__input.avlue == ''){
        email__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.email__alert').style.visibility = 'visible'
    }else if(!isEmail(email__input.value)){
        email__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.email__alert').style.visibility = 'visible'
    }else{
        email__input.style.border = '1px solid #525557'
        document.querySelector('.email__alert').style.visibility = 'hidden'
    }
    // Number
    if(!isPhoneNumber(number__input.value)){
        number__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.number__alert').style.visibility = 'visible'
    }else{
        number__input.style.border = '1px solid #525557'
        document.querySelector('.number__alert').style.visibility = 'hidden'
    }
}




// Check if is email
function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

// Check if is phone number
function isPhoneNumber(number){
    return /^[+995]\d{3}\d{2}\d{2}\d{2}\d{2}$/.test(number)
}



// Get skills from API Doc

let request = new XMLHttpRequest()
request.open('GET','https://bootcamp-2022.devtest.ge/api/skills')
request.send()
request.onload=function(){
    let skillObjParse = JSON.parse(request.responseText)
    for(let i=0; i<skillObjParse.length; i++){
        let skill__text = document.createElement('p')
        skill__text.innerText = skillObjParse[i].title
        skill__text.setAttribute('class','skill__text')
        document.querySelector('#dropdown').appendChild(skill__text)
    }
}



// 
let selectButton = document.querySelector('.fa-angle-down')
selectButton.addEventListener('click',()=>{
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list-toggle')
})
