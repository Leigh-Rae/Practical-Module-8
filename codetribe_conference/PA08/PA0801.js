//PA0801 && PA0804
function saveDataLocally(){
    const userName= document.getElementById("userName").value

    localStorage.setItem('userName', userName)

}

function getDataLocally(){
    const getUserName = localStorage.getItem('userName')
    console.log(getUserName)

}

getDataLocally()

function removeDataLocally(){
    const removeUserName = localStorage.removeItem('userName')
    console.log(removeUserName)

}

removeDataLocally()

//PA0805

const registration = {
    name: "Leigh" ,
    email: "Leigh@gmail.com"

}

const convertJavascriptToJson = JSON.stringify(registration)
localStorage.setItem('registration', convertJavascriptToJson)

//RETRIEVE
const retrieveFromStorage = localStorage.getItem('registration');
const retrieveToParse = JSON.parse(retrieveFromStorage);

console.log(retrieveToParse);


