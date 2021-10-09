 var punkt =-1;
 punkt++;
 const elem = document.getElementById("points");
 let myText = points.innerHTML;
 points.innerHTML = punkt;
 alert('Leertaste drücken um zu Starten!')

 function myFunction(){
 punkt++;
 const elem = document.getElementById("points");
 let myText = points.innerHTML;
 points.innerHTML = punkt;
};
   
var myCounter = new Countdown({
    seconds:10,  // number of seconds to count down
    onUpdateStatus: function(sec){
    const elem = document.getElementById("counter");
    let myText = counter.innerHTML;
    counter.innerHTML =(sec);}, // callback for each second
    onCounterEnd: function(){ alert('Counter ist zuende! Deine Clicks/Sekunde durchschnitt lieg bei '+punkt/10+'!');
    location.reload()
}
   
});

myCounter.start();

function Countdown(options) {
    var timer,
    instance = this,
    seconds = options.seconds || 10,
    updateStatus = options.onUpdateStatus || function () {},
    counterEnd = options.onCounterEnd || function () {};
  
    function decrementCounter() {
      updateStatus(seconds);
      if (seconds === 0) {
        counterEnd();
        instance.stop();
      }
      seconds--;
    }
  
    this.start = function () {
      clearInterval(timer);
      timer = 0;
      seconds = options.seconds;
      timer = setInterval(decrementCounter, 1000);
    };
  
    this.stop = function () {
      clearInterval(timer);
    };
  }