'use strict'

let birthdate

window.addEventListener('load', () => {
    document.getElementById('formDate').addEventListener('submit', (event) => {
        event.preventDefault()

        birthdate = new Date(document.getElementById('birthdate').value)

        const divMsgs = document.getElementById('msgs')
        divMsgs.innerHTML = `
            <p>Tu edad es ${age(birthdate)}</p>
            <p>Naciste un ${dayName(birthdate)}</p>
            <p<Tu próximo cumpleaños será un ${dayName(nextBirthdate(birthdate))}</p>
            <p>Tu 100 cumpleaños será un ${dayName(birthdateOnYear(birthdate,birthdate.getFullYear()+100))}</p>
            <p>Tu cumpleaños del año 2024 será ${dayName(birthdateOnYear(birthdate,2024))}</p>
            <p>De aquí a x tu cumpleaños caerá en viernes los años: ${yearsWithBirthdateOnDay(birthdate,2100,0)}</p>
        `
    })
})