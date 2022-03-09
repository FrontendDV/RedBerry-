// Selectors
let add__skill__btn = document.querySelector('#add__skill-button')
let selected__skills = document.querySelector('.selected__skills')
let skill__input = document.querySelector('#dropdown')
let experience__input = document.querySelector('.experience__input')
let next__btn = document.querySelector('#next__btn')
let skills__error__text = document.querySelector('.skills__error-text')
let experience__error__text = document.querySelector('.experience__error-text')
// GET skills from API Doc

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
        skill__text.setAttribute('id',skillObjParse[i].id)
        document.querySelector('#dropdown').appendChild(skill__text) 
        
    }
}

let skills = []
add__skill__btn.addEventListener('click',()=>{
    if(skill__input.value == ''){
        skills__error__text.innerText = '*Please choose at least 1 skill'
        skills__error__text.style.color = 'var(--color-red)'
        skill__input.style.marginBottom = '20px'
        skill__input.style.border = '1px solid var(--color-red)'
    }else if(experience__input.value == ''){
        experience__error__text.innerText = '*Please enter experience duration'
        experience__error__text.style.color = 'var(--color-red)'
        experience__input.style.marginBottom = '20px'
        experience__input.style.border = '1px solid var(--color-red)'
    }else{
        skills__error__text.style.visibility = 'hidden'
        skill__input.style.border = '1px solid #525557'
        experience__error__text.style.visibility =' hidden'
        experience__input.style.border = '1px solid #525557'
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
        if(skill__input.value == 'HTML'){
            skill__title.setAttribute('id','1')
        }
        if(skill__input.value == 'CSS'){
            skill__title.setAttribute('id','2')
        }
        if(skill__input.value == 'PHP'){
            skill__title.setAttribute('id','3')
        }
        if(skill__input.value == 'Laravel'){
            skill__title.setAttribute('id','4')
        }
        if(skill__input.value == 'React.JS'){
            skill__title.setAttribute('id','5')
        }
        if(skill__input.value == 'Vue.JS'){
            skill__title.setAttribute('id','6')
        }
        if(skill__input.value == 'Svelte'){
            skill__title.setAttribute('id','7')
        }
        if(skill__input.value == 'Angular'){
            skill__title.setAttribute('id','8')
        }
        let obj__skills = {
            id: skill__title.id,
            title: skill__input.value,
            experience: experience__input.value
        }
        skills.push(obj__skills)
    }
    // Select options selectors
    let skill__html = document.getElementById('1')
    let skill__css = document.getElementById('2')
    let skill__php = document.getElementById('3')
    let skill__laravel = document.getElementById('4')
    let skill__ReactJS = document.getElementById('5')
    let skill__VueJS = document.getElementById('6')
    let skill__Svelte = document.getElementById('7')
    let skill__Angular = document.getElementById('8')
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


next__btn.addEventListener('click',(e)=>{
    e.preventDefault()
    checkSkillInputs()
})


// check function

function checkSkillInputs(){
    if(selected__skills.childElementCount == 0){
        skills__error__text.innerText = '*Please choose at least 1 skill'
        skills__error__text.style.color = 'var(--color-red)'
        skill__input.style.marginBottom = '20px'
        skill__input.style.border = '1px solid var(--color-red)'
    }else if(experience__input.value == null){
        experience__error__text.innerText = '*Please enter experience duration'
        experience__error__text.style.color = 'var(--color-red)'
        experience__input.style.marginBottom = '20px'
        experience__input.style.border = '1px solid var(--color-red)'
    }
    else{
        let skills__localStrg = localStorage.setItem('skills',JSON.stringify(skills))
        location.href="/covid.html"
    }
}