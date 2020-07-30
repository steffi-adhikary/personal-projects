function checkIfValuesAreEmpty(name, email, password, rePassword){
    
    if (name === ''){
        document.getElementById("error-name").style.display = "inline";
    }else{
        document.getElementById("error-name").style.display = "none";
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
  
  