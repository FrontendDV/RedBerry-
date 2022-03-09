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



    if(fromOffice.checked){
        localStorage.setItem('work_preference',JSON.stringify('from_office'))
    }
    if(fromHome.checked){
        localStorage.setItem('work_preference',JSON.stringify('from_home'))
    }
    if(hybrid.checked){
        localStorage.setItem('work_preference',JSON.stringify('hybrid'))
    }

    if(covid__yes.checked){
        covid__yes = true
        localStorage.setItem('had_covid',JSON.stringify(covid__yes))
        let had_covid_at = document.querySelector('#covid__date__input').value
        localStorage.setItem('had_covid_at',JSON.stringify(had_covid_at))   
        
    }
    if(covid__no.checked){
        covid__no = false
        localStorage.setItem('had_covid',JSON.stringify(covid__no)) 
        localStorage.setItem('had_covid_at',null)
    }

    if(vaccinated__yes.checked){
        vaccinated__yes = true
        localStorage.setItem('vaccinated',JSON.stringify(vaccinated__yes))
        let vaccinated_at = document.querySelector('#vaccinated_at').value
        localStorage.setItem('vaccinated_at',JSON.stringify(vaccinated_at))
    }
    if(vaccinated__no.checked){
        vaccinated__no = false
        localStorage.setItem('vaccinated',JSON.stringify(vaccinated__no))
        localStorage.setItem('vaccinated_at',null)
    }

  

    if(document.querySelector('input[name=work]:checked') && document.querySelector('input[name=covid]:checked') && document.querySelector('input[name=vaccinated]:checked')){
        location.href = '/about.html'   
    }
    
})


