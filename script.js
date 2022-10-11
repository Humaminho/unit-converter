const inputEl = document.querySelector(".input-el") ;
const convertEl = document.querySelector(".convert-el") ; //BUTTON

let lengthEl = document.querySelector(".length-el") ; //LENGTH 
let volumeEl = document.querySelector(".volume-el") ; //VOLUME 
let massEl = document.querySelector(".mass-el") ; //MASS 

let yourInput = inputEl.value ; //input target

let meterToFeet = (Number(inputEl.value) * 3.281).toFixed(2)

convertEl.addEventListener("click", function () { //RENDER FUNCTION
    if (isNaN(inputEl.value ) ) {
        lengthEl.textContent = volumeEl.textContent = massEl.textContent = `${inputEl.value} f kerrek`
    } else if (inputEl.value === "") {
        alert("Insert a value please")
    } else {
        let meterToFeet = (Number(inputEl.value) * 3.281).toFixed(2)
    let feetToMeter = (Number(inputEl.value) * 0.304).toFixed(2)

    let leterToGallon = (Number(inputEl.value) * 0.264).toFixed(2)
    let gallonToLeter = (Number(inputEl.value) * 3.785).toFixed(2)

    let kiloToPound = (Number(inputEl.value) * 2.204).toFixed(2)
    let poundToKilo = (Number(inputEl.value) * 0.453).toFixed(2)
    
    lengthEl.textContent = `${inputEl.value} meters = ${meterToFeet} feet | ${inputEl.value} feet = ${feetToMeter} meters`

    volumeEl.textContent = `${inputEl.value} meters = ${leterToGallon} feet | ${inputEl.value} feet = ${gallonToLeter} meters`

    massEl.textContent = `${inputEl.value} meters = ${kiloToPound} feet | ${inputEl.value} feet = ${poundToKilo} meters`
    }
    
})
