// Devtalk Validation
let devtalk__yes = document.querySelector('#devtalk__yes')
let devtalk__no = document.querySelector('#devtalk__no')
let next__btn = document.querySelector('#next__btn')
let devtalk__textarea = document.querySelector('#devtalk__textarea')
let something__special__textarea = document.querySelector('#something__special__textarea')

devtalk__yes.addEventListener('click',() => {
    document.querySelector('#textarea__box1').style.display = 'block'
    document.querySelector('#textarea__box2').style.display = 'block'
})

devtalk__no.addEventListener('click',() => {
    document.querySelector('#textarea__box1').style.display = 'none'
    document.querySelector('#textarea__box2').style.display = 'none'
})

next__btn.addEventListener('click',() => {
    if(!devtalk__yes.checked && !devtalk__no.checked){
        document.querySelector('.devtalk__question__error').innerText = '*Please answer the question'
        document.querySelector('.devtalk__question__error').style.color = 'var(--color-red)'
        document.querySelector('.devtalk__question__error').style.fontSize = '13px'
    }else{
        document.querySelector('.devtalk__question__error').style.display = 'none'
    }

    if(devtalk__textarea.value == '' ){
        document.querySelector('.devtalk__textarea__error').innerText = '*Please answer the question'
        document.querySelector('.devtalk__textarea__error').style.color = 'var(--color-red)'
        document.querySelector('.devtalk__textarea__error').style.fontSize = '13px'
    }else{
        document.querySelector('.devtalk__textarea__error').style.display = 'none'
    }

    if(something__special__textarea.value == '' ){
        document.querySelector('.something__textarea__error').innerText = '*Please tell us something special'
        document.querySelector('.something__textarea__error').style.color = 'var(--color-red)'
        document.querySelector('.something__textarea__error').style.fontSize = '13px'
    }else{
        document.querySelector('.something__textarea__error').style.display = 'none'
    }

    if(devtalk__yes.checked && devtalk__textarea.value && something__special__textarea.value){
        devtalk__yes = true
        localStorage.setItem('will_organize_devtalk',JSON.stringify(devtalk__yes))
        localStorage.setItem('devtalk_topic', JSON.stringify(devtalk__textarea.value))
        localStorage.setItem('something_special',JSON.stringify(something__special__textarea.value))
        location.href = '/submit.html'
    }
    if(devtalk__no.checked){
        devtalk__no = false
        localStorage.setItem('will_organize_devtalk',JSON.stringify(devtalk__no))
        localStorage.setItem('devtalk_topic', JSON.stringify("string"))
        localStorage.setItem('something_special',JSON.stringify("string"))
        location.href = '/submit.html'
    }
})

