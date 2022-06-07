
let userEmail = document.getElementById('login-email')
let userPassword = document.getElementById('login-password')
let buttonEnter= document.getElementById('btn_enter')
let CheckboxState= document.getElementById('input-check')
function fnLogin() {
    if (userEmail.value!= "" & userPassword.value != "") {
         let UserInfo={
            email: userEmail.value,
            password: userPassword.value,
        }
        console.log(UserInfo)
        localStorage.setItem('user',JSON.stringify({"email":UserInfo.email,"password":UserInfo.password,"Coins":"0"}))
        window.location = "itemmall.html";
    }else{
        alert('the fields are empty');
    }
    
    }
   
buttonEnter.addEventListener('click',fnLogin)
 

