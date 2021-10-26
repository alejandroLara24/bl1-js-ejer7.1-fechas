'use strict'

function age(birthdate) {
    let fechaHoy = new Date()
    var edad = fechaHoy.getFullYear() - birthdate.getFullYear();
    var meses = fechaHoy.getMonth() - birthdate.getMonth();

    if (meses < 0 || (meses === 0 && fechaHoy.getDate() < birthdate.getDate())) {
        edad--;
    }
    return parseInt(edad)
}

function dayName(birthdate) {
    const dias = ["Domingo","Lunes","Martes","Mirécoles","Jueves","Viernes","Sábado"]
    return dias[birthdate.getDay()]
}

function birthdateOnYear(birthdate,year) {
    let birthdateOnYear = new Date(birthdate)
    birthdateOnYear.setFullYear(year)
    return birthdateOnYear
}

function nextBirthdate(birthdate) {
    let nextBirthdate = new Date(birthdate)
    return nextBirthdate.setFullYear(nextBirthdate.getFullYear()+1)
}

function yearsWithBirthdateOnDay(birthdate,maxYear,dayOfWeek) {
    
}

module.exports = {
    age,
    dayName,
    birthdateOnYear,
    nextBirthdate,
    yearsWithBirthdateOnDay
}