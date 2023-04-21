let btnAdd = document.querySelector("button")
let table = document.querySelector("table")

let fnameInput = document.querySelector("#fname")
let lnameInput = document.querySelector("#lname")
let ageInput = document.querySelector("#age")

btnAdd.addEventListener("click", () => {
    let vardas = fnameInput.value;
    let pavarde = lnameInput.value;
    let amzius = ageInput.value;

    let template = `
        <tr class="data">
            <td>${vardas}</td>    
            <td>${pavarde}</td>    
            <td>${amzius}</td>    
        </tr>`;
        
        table.innerHTML += template;
})