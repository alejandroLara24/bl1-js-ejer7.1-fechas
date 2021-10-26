'use strict'
let fechaHoy = new Date()

function age(birthdate) {    
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
    nextBirthdate.setFullYear(fechaHoy.getFullYear())
    
    if (nextBirthdate.getTime() < fechaHoy.getTime()){
        nextBirthdate.setFullYear(fechaHoy.getFullYear()+1)
    }

    return nextBirthdate
}

function yearsWithBirthdateOnDay(birthdate,maxYear,dayOfWeek) {
    let yearsWithBirthdateOnDay = []
    let nextBirthdate = new Date(birthdate)
    for (let year = birthdate.getFullYear(); year <= maxYear; year++) {
        if(nextBirthdate.getDay() == dayOfWeek) {
            yearsWithBirthdateOnDay.push(nextBirthdate.getFullYear())
        }
        nextBirthdate.setFullYear(nextBirthdate.getFullYear()+1)
    }
    return yearsWithBirthdateOnDay
}

module.exports = {
    age,
    dayName,
    birthdateOnYear,
    nextBirthdate,
    yearsWithBirthdateOnDay
}