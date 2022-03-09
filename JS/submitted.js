let request = new XMLHttpRequest()
request.open("GET","https://bootcamp-2022.devtest.ge/api/applications?token=4317e2ac-24ab-49d9-aa38-3e5e6e035a94")
request.send()
let counter = 1
request.onload=function(){
    let applicationObeParse = JSON.parse(request.responseText)
    for(let i=0; i < applicationObeParse.length; i++){
        let first_name = applicationObeParse[i].first_name
        let last_name = applicationObeParse[i].last_name
        let email = applicationObeParse[i].email
        let phone = applicationObeParse[i].phone
        let skills = applicationObeParse.skills

        // Main application box
        let submitted__application__box = document.createElement('div')
        submitted__application__box.setAttribute('class','submitted__application-box')
        document.querySelector('.submitted__applications').appendChild(submitted__application__box)

        // Header wich is red color
        let header = document.createElement('div')
        header.setAttribute('class','header')
        submitted__application__box.appendChild(header)

        let numeric_title = document.createElement('p')
        numeric_title.setAttribute('class','numeric_title')
        numeric_title.innerText = counter++
        header.appendChild(numeric_title)

        let down_arrow = document.createElement('p')
        down_arrow.setAttribute('class','down_arrow')
        down_arrow.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`
        header.appendChild(down_arrow)

        // Application body
        let application_body = document.createElement('div')
        application_body.setAttribute('class','application_body')
        submitted__application__box.appendChild(application_body)

        // Personal Information box
        let personal_information = document.createElement('div')
        personal_information.setAttribute('class','personal_information')
        personal_information.innerHTML = `
                <p class="info_title">Personal Information</p>
                <p class="sub_info_title">First Name <span class="sub_info" id="first_name">${first_name}</span></p>
                <p class="sub_info_title">Last Name <span class="sub_info" id="last_name">${last_name}</span></p>
                <p class="sub_info_title">E Mail <span class="sub_info" id="email">${email}</span></p>
                <p class="sub_info_title">Phone <span class="sub_info" id="phone">${phone}</span></p>
        `
        application_body.appendChild(personal_information)

        let skillset = document.createElement('div')
        skillset.setAttribute('class','skillset')
        skillset.innerHTML = `
                        <p class="info_title">Skillset</p>
                        <p class="sub_info_title" id="skill_title">PHP <span class="sub_info" id="skill_experience">Years of experience :3</span></p>
                        <p class="sub_info_title">React <span class="sub_info">Years of experience :3</span></p>
        `
        application_body.appendChild(skillset)
        
        let covid_situation = document.createElement('div')
        covid_situation.setAttribute('class','covid_situation')
        covid_situation.innerHTML = `
        <p class="info_title">Covid Situation</p>
                        <div class="qusetion__box">
                            <p class="question__title">how would you prefer to work?</p>
                            <div class="radio">
                                <input type="radio" name="work" disabled id="fromOffice">
                                <label for="fromOffice"  id="fromOffice__label">From Sairme Office</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="work" disabled id="fromHome">
                                <label for="fromHome" id="fromHome__label">From Home</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="work" disabled id="hybrid">
                                <label for="hybrid" id="hybrid__label">Hybrid</label>
                            </div>
                            <p class="work__question__error"></p>
                        </div>
                        <div class="qusetion__box">
                            <p class="question__title">Did you contact covid 19? :(</p>
                            <div class="radio">
                                <input type="radio" name="covid" disabled id="covid__yes">
                                <label for="covid__yes">Yes</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="covid" disabled id="covid__no">
                                <label for="covid__no">No</label>
                            </div>
                            <p class="covid__question__error"></p>
                        </div>
                        <div class="qusetion__box covid__date__box " >
                            <p class="question__title">When?</p>
                            <div class="radio submitted-radio">
                                <input type="date" readonly name="had_covit_at" id="covid__date__input">
                                <span class="calendar__icon"><i class="fa-regular fa-calendar-days"></i></span>
                            </div>
                        </div>
                        <div class="qusetion__box">
                            <p class="question__title">Have you been vaccinated?</p>
                            <div class="radio">
                                <input type="radio" name="vaccinated" disabled id="vaccinated__yes">
                                <label for="vaccinated__yes">Yes</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="vaccinated" disabled id="vaccinated__no">
                                <label for="vaccinated__no">No</label>
                            </div>
                              <p class="vaccinated__question__error"></p>
                        </div>
                        <div class="qusetion__box vaccinated__date__box">
                            <p class="question__title">When did you get your last covid vaccine?</p>
                            <div class="radio submitted-radio">
                                <input type="date" readonly placeholder="Date" class="submitted_date" id="vaccinated_at" >
                                <span class="calendar__icon"><i class="fa-regular fa-calendar-days"></i></span>
                            </div>
                        </div>
        `
        application_body.appendChild(covid_situation)


        let insigts = document.createElement('div')
        insigts.setAttribute('class','Insigts')
        insigts.innerHTML = `
                        <p class="info_title">Insigts</p>
                        <div class="qusetion__box">
                            <p class="question__title">Would you attend Devtalks and maybe also organize your own?</p>
                            <div class="radio">
                                <input type="radio" name="devtalks" disabled id="devtalk__yes">
                                <label for="devtalk__yes">Yes</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="devtalks" disabled id="devtalk__no">
                                <label for="devtalk__no">No</label>
                            </div>
                            <p class="devtalk__question__error"></p>
                        </div>
                        <div class="qusetion__box" >
                            <p class="question__title">What would you speak about at Devtalk?</p>
                            <div class="radio">
                               <textarea readonly  id="devtalk__textarea" cols="30"  rows="10" ></textarea>
                            </div>
                            <p class="devtalk__textarea__error"></p>
                        </div>
                        <div class="qusetion__box textarea__box"  >
                            <p class="question__title">Tell us something special</p>
                            <div class="radio">
                               <textarea  readonly id="something__special__textarea" class="readonly_textarea" cols="30"  rows="10"></textarea>
                            </div>
                            <p class="something__textarea__error"></p>
                        </div>
        `
        application_body.appendChild(insigts)

        
        document.querySelector('input[name=work]').checked = applicationObeParse[i].work_preference
        document.querySelector('input[name=covid]').checked = applicationObeParse[i].had_covid
        document.querySelector('input[name=vaccinated]').checked = applicationObeParse[i].vaccinated
        document.querySelector('#vaccinated_at').value = applicationObeParse[i].vaccinated_at
        document.querySelector('input[name=devtalks]').checked = applicationObeParse[i].will_organize_devtalk
        document.querySelector('#devtalk__textarea').value = applicationObeParse[i].devtalk_topic
        document.querySelector('#something__special__textarea').value = applicationObeParse[i].something_special

        down_arrow.addEventListener('click',()=>{
            application_body.classList.toggle('application_body-toggle')
        })
    }
}



