'use strict'

let birthdate

window.addEventListener('load', () => {
    document.getElementById('formDate').addEventListener('submit', (event) => {
        event.preventDefault()

        birthdate = new Date(document.getElementById('birthdate').value)
        let anyos = age(birthdate)
        let diaTexto = dayName(birthdate)
        let fechaEnAnyoDistinto = birthdateOnYear(birthdate,2030)
        let proximoCumpleanyos = nextBirthdate(birthdate)

    })
})