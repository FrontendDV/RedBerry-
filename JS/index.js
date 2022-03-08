// Selectors
let name__input = document.querySelector('#name__input');
let surname__input = document.querySelector('#surname__input');
let email__input = document.querySelector('#email__input');
let number__input = document.querySelector('#number__input');
let next__btn = document.querySelector('#next__btn')
let add__skill__btn = document.querySelector('#add__skill-button')
let selected__skills = document.querySelector('.selected__skills')
let skill__input = document.querySelector('#dropdown')
let experience__input = document.querySelector('.experience__input')


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
    // Phone number check function is in index.html file    
    if(name__input.value && surname__input.value && email__input.value){
        location.href="/skill.html"
    }
}






// Check if is email format valid
function isEmail(email){
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)
}


// GET skills from API Doc

let request = new XMLHttpRequest()
request.open('GET','https://bootcamp-2022.devtest.ge/api/skills')
request.send()
let id =1
request.onload=function(){
    let skillObjParse = JSON.parse(request.responseText)
    for(let i=0; i<skillObjParse.length; i++){
        let skill__text = document.createElement('option')
        skill__text.innerText = skillObjParse[i].title
        skill__text.setAttribute('class','skill__text')
        skill__text.setAttribute('value',skillObjParse[i].title)
        skill__text.setAttribute('id',`index` + id++)
        document.querySelector('#dropdown').appendChild(skill__text) 
    }
}




let counter = 1
let skills = []
add__skill__btn.addEventListener('click',()=>{
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
    skill__title.innerText = skill__input.value
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
        let togglefunctiont = e.currentTarget.previousSibling.firstChild.innerText
        if(togglefunctiont == 'HTML'){
            skill__html.classList.remove('hidden')
        }
        if(togglefunctiont == 'CSS'){
            skill__css.classList.remove('hidden')
        }
        if(togglefunctiont == 'PHP'){
            skill__php.classList.remove('hidden')
        }
        if(togglefunctiont == 'Laravel'){
            skill__laravel.classList.remove('hidden')
        }
        if(togglefunctiont == 'React.JS'){
            skill__ReactJS.classList.remove('hidden')
        }
        if(togglefunctiont == 'Vue.JS'){
            skill__VueJS.classList.remove('hidden')
        }
        if(togglefunctiont == 'Svelte'){
            skill__Svelte.classList.remove('hidden')
        }
        if(togglefunctiont == 'Angular'){
            skill__Angular.classList.remove('hidden')
        }
    
    })
    let obj__skills = {
        id: skill__title.innerText,
        experience: experience__input.value
    }
    skills.push(obj__skills)
    // Select options selectors
    let skill__html = document.querySelector('#index1')
    let skill__css = document.querySelector('#index2')
    let skill__php = document.querySelector('#index3')
    let skill__laravel = document.querySelector('#index4')
    let skill__ReactJS = document.querySelector('#index5')
    let skill__VueJS = document.querySelector('#index6')
    let skill__Svelte = document.querySelector('#index7')
    let skill__Angular = document.querySelector('#index8')
    if(skill__input.value == 'HTML'){
        skill__html.classList.add('hidden')
    }
    if(skill__input.value == 'CSS'){
        skill__css.classList.add('hidden')
    }
    if(skill__input.value == 'PHP'){
        skill__php.classList.add('hidden')
    }
    if(skill__input.value == 'Laravel'){
        skill__laravel.classList.add('hidden')
    }
    if(skill__input.value == 'React.JS'){
        skill__ReactJS.classList.add('hidden')
    }
    if(skill__input.value == 'Vue.JS'){
        skill__VueJS.classList.add('hidden')
    }
    if(skill__input.value == 'Svelte'){
        skill__Svelte.classList.add('hidden')
    }
    if(skill__input.value == 'Angular'){
        skill__Angular.classList.add('hidden')
    }
    skill__input.value = ''
    experience__input.value = ' '
})












// Question js
let covid__yes = document.querySelector('#covid__yes')
let covid__no = document.querySelector('#covid__no')
let vaccinated__yes = document.querySelector('#vaccinated__yes')
let vaccinated__no = document.querySelector('#vaccinated__no')
let covid__date__box = document.querySelector('#covid__date__box')
let vaccinated__date__box = document.querySelector('#vaccinated__date__box')


covid__yes.addEventListener('click',()=>{
    covid__date__box.style.display='block'
})
covid__no.addEventListener('click',()=>{
    covid__date__box.style.display='none'
})


vaccinated__yes.addEventListener('click',()=>{
    vaccinated__date__box.style.display='block'
})
vaccinated__no.addEventListener('click',()=>{
    vaccinated__date__box.style.display='none'
})



//================== Covid Stuff Validation
// Selectors
let fromOffice = document.querySelector('#fromOffice')
let fromHome = document.querySelector('#fromHome')
let hybrid = document.querySelector('#hybrid')
let covid__stuff = document.querySelector('.covid__stuff')

// Function

covid__stuff.addEventListener('click',()=>{
    if(!fromOffice.checked && !fromHome.checked && !hybrid.checked){
        document.querySelector('.work__question__error').innerText = '*Please answer the question'
        document.querySelector('.work__question__error').style.color = 'var(--color-red)'
        document.querySelector('.work__question__error').style.fontSize = '15px'
    }else{
        document.querySelector('.work__question__error').style.display = 'none'
    }  

    if(!covid__yes.checked && !covid__no.checked){
        document.querySelector('.covid__question__error').innerText = '*Please answer the question'
        document.querySelector('.covid__question__error').style.color = 'var(--color-red)'
        document.querySelector('.covid__question__error').style.fontSize = '15px'
    }else{
        document.querySelector('.covid__question__error').style.display = 'none'
    }

    if(!vaccinated__yes.checked && !vaccinated__no.checked){
        document.querySelector('.vaccinated__question__error').innerText = '*Please answer the question'
        document.querySelector('.vaccinated__question__error').style.color = 'var(--color-red)'
        document.querySelector('.vaccinated__question__error').style.fontSize = '15px'
    }else{
        document.querySelector('.vaccinated__question__error').style.display = 'none'
    }
})



// Devtalk Validation
let devtalk__yes = document.querySelector('#devtalk__yes')
let devtalk__no = document.querySelector('#devtalk__no')
let about__you = document.querySelector('.about__you')
let devtalk__textarea = document.querySelector('#devtalk__textarea')
let something__special__textarea = document.querySelector('#something__special__textarea')


about__you.addEventListener('click',()=>{
    if(!devtalk__yes.checked && !devtalk__no.checked){
        document.querySelector('.devtalk__question__error').innerText = '*Please answer the question'
        document.querySelector('.devtalk__question__error').style.color = 'var(--color-red)'
        document.querySelector('.devtalk__question__error').style.fontSize = '15px'
    }else{
        document.querySelector('.devtalk__question__error').style.display = 'none'
    }

    if(devtalk__textarea.value == '' ){
        document.querySelector('.devtalk__textarea__error').innerText = '*Please answer the question'
        document.querySelector('.devtalk__textarea__error').style.color = 'var(--color-red)'
        document.querySelector('.devtalk__textarea__error').style.fontSize = '15px'
    }else{
        document.querySelector('.devtalk__textarea__error').style.display = 'none'
    }

    if(something__special__textarea.value == '' ){
        document.querySelector('.something__textarea__error').innerText = '*Please tell us something special'
        document.querySelector('.something__textarea__error').style.color = 'var(--color-red)'
        document.querySelector('.something__textarea__error').style.fontSize = '15px'
    }else{
        document.querySelector('.something__textarea__error').style.display = 'none'
    }
})



let form = document.querySelector('#form')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let data = {
        "token":"b77584bc-41e6-4b23-8f09-ae1f3264c1c2",
        "first_name":name__input.value,
        "last_name": surname__input.value,
        "email":email__input.value,
        "phone":number__input.value,
        "skills": skills,
        "work_preference":'from_home',
        "had_covid": true,
        "had_covid_at":"2022-02-23",
        "vaccinated":true,
        "vaccinated_at":"2022-02-23",
        "will_organize_devtalk":true,
        "something_special":"i am special."
    }
    fetch("https://bootcamp-2022.devtest.ge/api/application",{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'accept' : 'application/json',
            "Content-Type":"application/json"
        }
    })
    .then(data => console.log(data))
})


let submited = document.querySelector('#submited')

submited.addEventListener('click',()=>{
    let myHeaders = new Headers({
        'Authorization':'Token' + 'b77584bc-41e6-4b23-8f09-ae1f3264c1c2',
        'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    
    fetch('https://bootcamp-2022.devtest.ge/api/applications?token=b77584bc-41e6-4b23-8f09-ae1f3264c1c2',{
        headers:myHeaders,
        method: 'GET'
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
})


