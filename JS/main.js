// Selectors
let name__input = document.querySelector('#name__input');
let surname__input = document.querySelector('#surname__input');
let email__input = document.querySelector('#email__input');
let number__input = document.querySelector('#number__input');
let next__btn = document.querySelector('#next__btn')
let add__skill__btn = document.querySelector('#add__skill-button')
let selected__skills = document.querySelector('.selected__skills')


// Listener
next__btn.addEventListener('click',()=>{


    check__inputs()
})

add__skill__btn.addEventListener('click',(e)=>{
    // on click this button , create skill item boxes
    let selected__skills__box = document.createElement('div')
    selected__skills__box.setAttribute('class','selected__skills-box')
    selected__skills.appendChild(selected__skills__box)
    // then create titles div
    let selected__skills__title = document.createElement('div')
    selected__skills__title.setAttribute('class','selected__skills-title')
    selected__skills__box.appendChild(selected__skills__title)
    // then add titles in titles div
    // skill title
    let skill__title = document.createElement('p')
    skill__title.setAttribute('class','skill__title')
    skill__title.innerText = document.querySelector('#dropdown').value
    selected__skills__title.appendChild(skill__title)
    // experience title
    let experience__title = document.createElement('p')
    experience__title.setAttribute('class','experience__title')
    experience__title.innerHTML = 'Years of Experience : ' + document.querySelector('.experience__input').value
    selected__skills__title.appendChild(experience__title)
    // then add minus icon
    let minus__icon = document.createElement('span')
    minus__icon.setAttribute('class','minus__icon')
    minus__icon.innerHTML = '<i class="fa-solid fa-minus"></i>'
    selected__skills__box.appendChild(minus__icon)

    minus__icon.addEventListener('click',(e)=>{
        let parentElement = e.currentTarget.parentElement
        parentElement.remove()
    })

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
    // Phone number check function is in index.html file
}

// Check if is email format valid
function isEmail(email){
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)
}


// Get skills from API Doc

let request = new XMLHttpRequest()
request.open('GET','https://bootcamp-2022.devtest.ge/api/skills')
request.send()
request.onload=function(){
    let skillObjParse = JSON.parse(request.responseText)
    for(let i=0; i<skillObjParse.length; i++){
        let skill__text = document.createElement('option')
        skill__text.innerText = skillObjParse[i].title
        skill__text.setAttribute('class','skill__text')
        skill__text.setAttribute('value',skillObjParse[i].title)
        document.querySelector('#dropdown').appendChild(skill__text)
    }
}








