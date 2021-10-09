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
       password: "altschutz"
    },
    {
      username: "1",
      password: "1"
    },
 ]

 function clearBox(form){
     var username = document.getElementById("username").value
     var password = document.getElementById("password").value
     for(i =0;i<objPeople.length; i++){
        if(username==objPeople[i].username && password == objPeople[i].password){
         alert("Hi"+" "+username);
         location.href = "http://culu.live/taschenrechner.html"
         return
        }
        else{
           
        }
     }alert("Falscher Benutzername oder falsches Passwort")
     location.reload()

 }
 