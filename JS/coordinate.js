// Selectors
let name__input = document.querySelector('#name__input');
let surname__input = document.querySelector('#surname__input');
let email__input = document.querySelector('#email__input');
let number__input = document.querySelector('#number__input');
let next__btn = document.querySelector('#next__btn')

// Listener
next__btn.addEventListener('click',(e)=>{
    e.preventDefault()
    check__inputs()
})
 

// Functions
function check__inputs(){
    // Name input Check
    if(name__input.value == ''){
        name__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.name__alert').innerText = '* first name is required'
        document.querySelector('.name__alert').style.visibility = 'visible'
    }else if(name__input.value.length < 2){
        name__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.name__alert').innerText = '* Must be at least 2 letters '
        document.querySelector('.name__alert').style.visibility = 'visible'
    }else{
        name__input.style.border = '1px solid #525557'
        document.querySelector('.name__alert').style.visibility = 'hidden'
    }
    // Surname input Check
    if(surname__input.value == ''){
        surname__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.surname__alert').innerText = '*last name is required'
        document.querySelector('.surname__alert').style.visibility = 'visible'
    }else if(surname__input.value.length < 2){
        surname__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.surname__alert').innerText = '*Must be at least 2 letters'
        document.querySelector('.surname__alert').style.visibility = 'visible'
    }else{
        surname__input.style.border = '1px solid #525557'
        document.querySelector('.surname__alert').style.visibility = 'hidden'
    }
    // Email input Check
    if(email__input.value == ''){
        email__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.email__alert').innerText = '*Email is required'
        document.querySelector('.email__alert').style.visibility = 'visible'
    }else if(!isEmail(email__input.value)){
        email__input.style.border = '1px solid var(--color-red)'
        document.querySelector('.email__alert').innerText = '*Email must be the mail format '
        document.querySelector('.email__alert').style.visibility = 'visible'
    }else{
        email__input.style.border = '1px solid #525557'
        document.querySelector('.email__alert').style.visibility = 'hidden'
    }
    let first_name = localStorage.setItem('first_name',JSON.stringify(name__input.value))
    let last_name = localStorage.setItem('last_name',JSON.stringify(surname__input.value))
    let email = localStorage.setItem('email',JSON.stringify(email__input.value))
    let phone = localStorage.setItem('phone',JSON.stringify(number__input.value))
    // Phone number check function is in index.html file    
    if(name__input.value && surname__input.value && email__input.value){
        location.href="/skill.html"
    }
}


// Check if is email format valid
function isEmail(email){
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)
}



