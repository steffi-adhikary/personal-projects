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

function validateName(name){
    if (name === ''){
        document.getElementById("error-name").style.display = "inline";
        return false;
    }else{
        if(hasNumber(name)){
            document.getElementById("error-name").style.display = "inline";
            document.getElementById("error-name").innerHTML = "* Name can't have numbers. Please re-enter your name";
            return false;
        }else if(hasSpecialChar(name)){
            document.getElementById("error-name").style.display = "inline";
            document.getElementById("error-name").innerHTML = "* Name can't have special characters. Please re-enter your name";
            return false;
        }else{
            document.getElementById("error-name").style.display = "none";
            return true;
        }
    }
}

function validateEmail(email){
    if (email === ''){
        document.getElementById("error-email").style.display = "inline";
        return false;
    }else{
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) == false) 
        {
            document.getElementById("error-email").style.display = "inline";
            document.getElementById("error-email").innerHTML = "* Invalid email. Please re-enter your name";
            return false;
        }else{
            document.getElementById("error-email").style.display = "none";
            return true;
        }
    }
}

function validatePassword(password){
    if (password === ''){
        document.getElementById("error-psw").style.display = "inline";
        return false;
    }else{
        var passLen = password.length;
        if(passLen >= 8){
            if(hasNumber(password)){
                if(hasSpecialChar(password)){
                    if(hasLowerCase(password)){
                        if(hasUpperCase(password)){
                            document.getElementById("error-psw").style.display = "none";
                            return true;
                        }else{
                            document.getElementById("error-psw").style.display = "inline";
                            document.getElementById("error-psw").innerHTML = "* Password should have at least 1 upper case character";
                            return false;
                        }
                    }else{
                        document.getElementById("error-psw").style.display = "inline";
                        document.getElementById("error-psw").innerHTML = "* Password should have at least 1 lower case character";
                        return false;
                    }
                }else{
                    document.getElementById("error-psw").style.display = "inline";
                    document.getElementById("error-psw").innerHTML = "* Password should have at least 1 special character";
                    return false;
                }
            }else{
                document.getElementById("error-psw").style.display = "inline";
                document.getElementById("error-psw").innerHTML = "* Password should have at least 1 number";
                return false;
            };
        }else{
            document.getElementById("error-psw").style.display = "inline";
            document.getElementById("error-psw").innerHTML = "* Password should be at least 8 characters";
            return false;
        }
    }
}

function validateConfirmPassword(password, rePassword){
    if (rePassword === ''){
        document.getElementById("error-repsw").style.display = "inline";
        document.getElementById("error-repsw").innerHTML = "* Confirm password can't be empty. Please enter your confirm password"
        return false;
    }else if(password !== rePassword){  
        document.getElementById("error-repsw").style.display = "inline";
        document.getElementById("error-repsw").innerHTML = "* Passwords do not match. Please re-enter.";
        return false;
    }else{
        document.getElementById("error-repsw").style.display = "none";
            return true;
    }
}

  function validateData(name, email, password, rePassword){
      // console.log("getting inside validateData");
      // console.log("the name is::", name);
      var name = document.getElementById("name").value;
      var email = document.getElementById("emailid").value;
      var password = document.getElementById("pswd").value;
      var rePassword = document.getElementById("repswd").value;
      if(validateName(name) && validateEmail(email) && validatePassword(password) && validateConfirmPassword(password, rePassword)){
        document.getElementById("registrationLoader").style.display = "inline";
        document.getElementById("form-container").classList.add("hazyForm");
        let req = new XMLHttpRequest();
        var dataToBeSent = {name: name, email:email, password:password, rePassword:rePassword};
        var dataToBeSentJSON = JSON.stringify(dataToBeSent);
        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
              
            document.getElementById("registrationLoader").style.display = "none";
            var obj = JSON.parse(req.responseText);
            //console.log("obj::", obj);
            if(obj.hasOwnProperty('success')){
                if(obj.success){
                    window.location.href = "welcome.html";
                    document.getElementById("reg-error").style.display = "none";
                }else{
                    document.getElementById("reg-error").style.display = "inline";
                    document.getElementById("reg-error").innerHTML = obj.message;
                }
            }
          }
        };
        
        req.open("POST", "https://api.jsonbin.io/b", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("secret-key", "$2b$10$cfwhBocLWBsVPp3blRQlUeTjy/2gAOzKH/6qL7VbprraM4SayGcJO");
        req.send(dataToBeSentJSON);
      }
    }
  
  document.addEventListener("DOMContentLoaded", function(){
    //document.getElementById("submit-btn").onblur()`
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("emailid").value;
    // var password = document.getElementById("pswd").value;
    // var rePassword = document.getElementById("repswd").value;
    document.getElementById("name").addEventListener('blur', (event) => {
        var name = document.getElementById("name").value;
        validateName(name);
    });
    document.getElementById("emailid").addEventListener('blur', (event) => {
        var email = document.getElementById("emailid").value;
        validateEmail(email);
    });
    document.getElementById("pswd").addEventListener('blur', (event) => {
        var password = document.getElementById("pswd").value;
        validatePassword(password);
    });
    document.getElementById("repswd").addEventListener('blur', (event) => {
        var password = document.getElementById("pswd").value;
        var rePassword = document.getElementById("repswd").value;
        validateConfirmPassword(password, rePassword)
    });
    
      // document.getElementById("submit-btn").addEventListener("click", validateData);
      document.getElementById("submit-btn").addEventListener("click", function(){
        validateData(name, email, password, rePassword);
      });
    });
  
  