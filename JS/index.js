let welcome__title = document.querySelector('#welcome__title')
let start__button = document.querySelector('.start__button')
let submited = document.querySelector('.submited')
let welcome__image = document.querySelector('.welcome__image')

setTimeout(function(){welcome__title.classList.add('welcome__title-appear')},500) 
setTimeout(function(){start__button.classList.add('start__button-appear')},1000)
setInterval(function(){submited.classList.add('submited-appear')},1500)
setInterval(function(){welcome__image.classList.add('welcome__image-appear')},2000)