// Get elements from localstorage to post on API 
let first_name = localStorage.getItem('first_name')
let last_name = localStorage.getItem('last_name')
let email = localStorage.getItem('email')
let phone = localStorage.getItem('phone')
let skills = localStorage.getItem('skills')
let work_preference = localStorage.getItem('work_preference')
let had_covid = localStorage.getItem('had_covid')
let had_covid_at = localStorage.getItem('had_covid_at')
let vaccinated = localStorage.getItem('vaccinated')
let vaccinated_at = localStorage.getItem('vaccinated_at')
let will_organize_devtalk = localStorage.getItem('will_organize_devtalk')
let devtalk_topic = localStorage.getItem('devtalk_topic')
let something_special = localStorage.getItem('something_special')





// POST metohd on click submit__button

let submit__button = document.querySelector('#submit__button')

submit__button.addEventListener('click', (e) => {
    e.preventDefault()
    if(localStorage.getItem('had_covid_at','')){
        let data = {
            "token":"4317e2ac-24ab-49d9-aa38-3e5e6e035a94",
            "first_name":JSON.parse(first_name),
            "last_name": JSON.parse(last_name),
            "email":JSON.parse(email),
            "phone":JSON.parse(phone),
            "skills": JSON.parse(skills),
            "work_preference":JSON.parse(work_preference),
            "had_covid": JSON.parse(had_covid),
            "vaccinated":JSON.parse(vaccinated),
            "vaccinated_at":JSON.parse(vaccinated_at),
            "will_organize_devtalk":JSON.parse(will_organize_devtalk),
            "devtalk_topic":JSON.parse(devtalk_topic),
            "something_special":JSON.parse(something_special)
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
        location.href = '/thanks.html'
    }else if(localStorage.getItem('vaccinated_at',null)){
        let data = {
            "token":"4317e2ac-24ab-49d9-aa38-3e5e6e035a94",
            "first_name":JSON.parse(first_name),
            "last_name": JSON.parse(last_name),
            "email":JSON.parse(email),
            "phone":JSON.parse(phone),
            "skills": JSON.parse(skills),
            "work_preference":JSON.parse(work_preference),
            "had_covid": JSON.parse(had_covid),
            "had_covid_at":JSON.parse(had_covid_at),
            "vaccinated":JSON.parse(vaccinated),
            "will_organize_devtalk":JSON.parse(will_organize_devtalk),
            "devtalk_topic":JSON.parse(devtalk_topic),
            "something_special":JSON.parse(something_special)
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
        location.href = '/thanks.html'
    }else{
        let data = {
            "token":"4317e2ac-24ab-49d9-aa38-3e5e6e035a94",
            "first_name":JSON.parse(first_name),
            "last_name": JSON.parse(last_name),
            "email":JSON.parse(email),
            "phone":JSON.parse(phone),
            "skills": JSON.parse(skills),
            "work_preference":JSON.parse(work_preference),
            "had_covid": JSON.parse(had_covid),
            "had_covid_at":JSON.parse(had_covid_at),
            "vaccinated":JSON.parse(vaccinated),
            "vaccinated_at":JSON.parse(vaccinated_at),
            "will_organize_devtalk":JSON.parse(will_organize_devtalk),
            "devtalk_topic":JSON.parse(devtalk_topic),
            "something_special":JSON.parse(something_special)
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
        location.href = '/thanks.html'
    }
})

