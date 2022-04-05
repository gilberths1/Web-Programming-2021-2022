var button = document.getElementById("save-button");
var username = document.getElementById("uname");
var firstName = document.getElementById("fname");
var lastname = document.getElementById("lname");
var password = document.getElementById("pwd");
var retypePassword = document.getElementById("repwd");
var age = document.getElementById("age");
var radioSelect = document.querySelectorAll('input[name="gender"]');

function displayInfo(){
    var gender_value;
    for(var i=0; i<radioSelect.length; i++){
        if(radioSelect[i].checked){
            gender_value = radioSelect[i].id;
    }
}

    var display=document.getElementById("tabelkosong");
    var newRow=display.insertRow(1)

    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    
    cell1.style.border = '1px solid black';
    cell2.style.border = '1px solid black';
    cell3.style.border = '1px solid black';
    
    cell1.innerHTML = firstName.value+" "+lastname.value;
    cell2.innerHTML = gender_value;
    cell3.innerHTML = age.value;
}

button.addEventListener("click", validateFunc)

function validateFunc(){
    if(username.value.length === 0){
        alert("Username cannot be empty !");
    }
    if(firstName.value.length === 0){
        alert("Firstname cannot be empty !");
    }
    if(lastname.value.length === 0){
        alert("Lastname cannot be empty !");
    }
    if(password.value.length < 5){
        alert("Password must be greater than 5 character !");
    }
    if(retypePassword.value != password.value){
        alert("Retype password doesnt match !");
    }
    if(parseInt(age.value) < 17){
        alert("Age must be at least 17 years old !");
    }

    if(username.value.length > 0 && firstName.value.length > 0 && lastname.value.length > 0
       && parseInt(age.value) >= 17 && password.value.length > 5){
        displayInfo();
    }
}