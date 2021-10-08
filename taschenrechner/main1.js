var objPeople = [
    {
       username: "daniel",
       password: "lalaland"
    },
    {
       username: "josel",
       password: "letzer"
    },
    {
       username: "andreas",
       password: "radelman"
    },
    {
       username: "michael",
       password: "Altschutz04"
    }
 ]
 function greetUser(){
     var username = document.getElementById("username").value
     var password = document.getElementById("password").value
     if(password == 'Altschutz04'){
     alert("Hi",username)
     }
 }
 window.onload = greetUser;