function checkIfValuesAreEmpty(name, email, password, rePassword){
    if (name === '' || typeof name === 'undefined' || email === '' || typeof email === 'undefined' || password === '' || typeof password === 'undefined' || rePassword === '' || typeof rePassword === 'undefined'){
      return false;
    }
    else{
      return true;
    }
  }
  function validateData(){
      var name = document.getElementById("name").value;
      var email = document.getElementById("emailid").value;
      var password = document.getElementById("pswd").value;
      var rePassword = document.getElementById("repswd").value;
      var checkVal = checkIfValuesAreEmpty(name, email, password, rePassword);
    console.log("the value is:", checkVal);
    if( checkVal == false){
      document.getElementById("error-div").style.display = "inline";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function(){
      document.getElementById("submit-btn").addEventListener("click", validateData);
    });
  
  