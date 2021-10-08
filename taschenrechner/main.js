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

 function getInfo(){
     var username = document.getElementById("username").value
     var password = document.getElementById("password").value
     for(i =0;i<objPeople.length; i++){
        if(username==objPeople[i].username && password == objPeople[i].password){
           window.location="http://culu.live/taschenrechner.html"
           return
        }
        else{
           
        }
     }alert("Falscher Benutzername oder falsches Passwort")
     location.reload()

 }
 