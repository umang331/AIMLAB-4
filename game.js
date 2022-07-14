AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#bullet" },    
  },

  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    var timer = setInterval(countDown, 1000);

    function countDown() {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
      else {
        console.log("hi")
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
        var gun = document.querySelector("#weapon")

        gun.setAttribute("dynamic-body",{mass:20})

      
        var bullet=document.querySelector("#bullet")
        bullet.removeAttribute("bullets")
        console.log(bullet)
      
              }
    }
    function gameOver(){
      var element = document.querySelector("#game_over_text")
      element.setAttribute("visible",true)
      var gun = document.querySelector("#gun")
      gun.setAttribute("dynamic-body")

      var bullet=document.querySelector("#bullet")

      var sceneEl=document.querySelector("#scene")
      sceneEl.removeChild(bullet)
    }
  },
  gameOver: function(){
   var element = document.querySelector("#game_over_text")
   element.setAttribute("visible",true)
   var gun = document.querySelector("#gun")
   gun.setAttribute("dynamic-body")

   var bullet=document.querySelector("#bullet")

   var sceneEl=document.querySelector("#scene")
   sceneEl.removeChild(bullet)
   
 }
});