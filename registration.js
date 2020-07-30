function checkIfBothPasswordsAreSame(pass1, pass2){
    if(pass1 === pass2){
        document.getElementById("error-misPsw").style.display = "none";
    }else{
        document.getElementById("error-misPsw").style.display = "inline";
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}
function hasSpecialChar(myString){
    var spclCharSet = /[~`!_#@$%\^&*+=\-\[\]\\';.,/(){}|\\":<>\?]/g;
    return spclCharSet.test(myString)
}

function checkIfValuesAreEmpty(name, email, password, rePassword){
    if (name === ''){
        document.getElementById("error-name").style.display = "inline";
    }else{
        // document.getElementById("error-name").style.display = "none";
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
        document.getElementById("error-email").style.display = "none";
    }

    if (password === ''){
        document.getElementById("error-psw").style.display = "inline";
    }else{
        document.getElementById("error-psw").style.display = "none";
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
  
  