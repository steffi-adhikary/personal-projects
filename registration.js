function checkIfBothPasswordsAreSame(pass1, pass2){
    if(pass1 === pass2){
        document.getElementById("error-misPsw").style.display = "none";
    }else{
        document.getElementById("error-misPsw").style.display = "inline";
    }
}

function checkPswLen(password){
    var passLen = password.length;
    if(passLen >= 8){
        if(hasNumber(password)){
            // document.getElementById("error-misPsw").style.display = "none";
            if(hasSpecialChar(password)){
                if(hasLowerCase(password)){
                    if(hasUpperCase(password)){
                        document.getElementById("error-psw").style.display = "none";
                    }else{
                        document.getElementById("error-psw").style.display = "inline";
                        document.getElementById("error-psw").innerHTML = "Password should have at least 1 upper case character";
                    }
                }else{
                    document.getElementById("error-psw").style.display = "inline";
                    document.getElementById("error-psw").innerHTML = "Password should have at least 1 lower case character";
                }
            }else{
                document.getElementById("error-psw").style.display = "inline";
                document.getElementById("error-psw").innerHTML = "Password should have at least 1 special character";
            }
        }else{
            document.getElementById("error-psw").style.display = "inline";
            document.getElementById("error-psw").innerHTML = "Password should have at least 1 number";
        };
    }else{
        document.getElementById("error-psw").style.display = "inline";
        document.getElementById("error-psw").innerHTML = "Password should be at least 8 characters";
    }
}

function hasUpperCase(myString){
    return /[A-Z]/.test(myString);
}

function hasLowerCase(myString){
    return /[a-z]/.test(myString);
}

function hasNumber(myString) {
    return /\d/.test(myString);
}
function hasSpecialChar(myString){
    var spclCharSet = /[~`!_#@$%\^&*+=\-\[\]\\';.,/(){}|\\":<>\?]/g;
    return spclCharSet.test(myString)
}

function validateEmail(myEmail){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(myEmail) == false) 
    {
        return false;
    }
    return true;
}

function checkIfValuesAreEmpty(name, email, password, rePassword){
    if (name === ''){
        document.getElementById("error-name").style.display = "inline";
    }else{
        if(hasNumber(name)){
            document.getElementById("error-name").style.display = "inline";
            document.getElementById("error-name").innerHTML = "Name can't have numbers. Please re-enter your name";
        }else if(hasSpecialChar(name)){
            document.getElementById("error-name").style.display = "inline";
            document.getElementById("error-name").innerHTML = "Name can't have special characters. Please re-enter your name";
        }else{
            document.getElementById("error-name").style.display = "none";
        }
    }

    if (email === ''){
        document.getElementById("error-email").style.display = "inline";
    }else{
        if(!validateEmail(email)){
            document.getElementById("error-email").style.display = "inline";
            document.getElementById("error-email").innerHTML = "Invalid email. Please re-enter your name";
        }else{
            document.getElementById("error-email").style.display = "none";
        }
    }

    if (password === ''){
        document.getElementById("error-psw").style.display = "inline";
    }else{
        //document.getElementById("error-psw").style.display = "none";
        checkPswLen(password);
    }

    if (rePassword === ''){
        document.getElementById("error-repsw").style.display = "inline";
    }else{
        document.getElementById("error-repsw").style.display = "none";
        checkIfBothPasswordsAreSame(password, rePassword);
    }
}

  function validateData(){
      var name = document.getElementById("name").value;
      var email = document.getElementById("emailid").value;
      var password = document.getElementById("pswd").value;
      var rePassword = document.getElementById("repswd").value;
      checkIfValuesAreEmpty(name, email, password, rePassword);
  }
  
  document.addEventListener("DOMContentLoaded", function(){
      document.getElementById("submit-btn").addEventListener("click", validateData);
    });
  
  