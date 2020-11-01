var timeline = gsap.timeline();

// première animation




var timelineven = gsap.timeline();

timelineven.to("#ven",{
  duration: 7,
 
    motionPath: {
    path: "#ringone",
    align: "#ringone"
  },
  ease: Linear.easeNone,
  repeat: -1,
});
var timelinemerc = gsap.timeline();
timelinemerc.to("#merc",{
    duration: 10,
    motionPath: {
      path: "#ringtwo",
      align: "#ringtwo"
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  var timelineterre = gsap.timeline();
timelineterre.to("#terre",{
    duration: 16    ,
    motionPath: {
      path: "#ringfour",
      align: "#ringfour"
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  var timelinemars = gsap.timeline();
  timelinemars.to("#mars",{
    duration: 16    ,
    motionPath: {
      path: "#ringfive",
      align: "#ringfive"
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  var timelinejupiter = gsap.timeline();
  timelinejupiter.to("#jupiter",{
    duration: 20    ,
    motionPath: {
      path: "#ringsix",
      align: "#ringsix"
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  var timelinesaturn = gsap.timeline();
 timelinesaturn.to("#saturn",{
    duration: 22    ,
    motionPath: {
      path: "#ringseven",
      align: "#ringseven"
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  var timelineuranus = gsap.timeline();
 timelineuranus.to("#uranus",{
    duration: 24    ,
    motionPath: {
      path: "#ringeight",
      align: "#ringeight"
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  var timelineneptune = gsap.timeline();
 timelineneptune.to("#neptune",{
    duration: 26    ,
    motionPath: {
      path: "#ringnine",
      align: "#ringnine"
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  var timelineneowisetw= gsap.timeline();
 timelineneowisetw.to("#neowisetw",{
    duration: 26    ,
    motionPath: {
      path: "#comet",
      align: "#comet" ,
      autoRotate: true ,
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  
  function commencer() {
    timelineven.pause()
    timelinemerc.pause()
    timelineterre.pause()
    timelinemars.pause()
    timelinejupiter.pause()
    timelinesaturn.pause()
    timelineneptune.pause()
    timelineuranus.pause()
    timelineneowisetw.pause()
 }
  button.addEventListener("click",commencer);
    
   
  
  
  function reponse() {
    if("mercure" == answer.value ) {
     timelinemerc.play()
    }
    else
      if ("venus" == answer.value ) {
      timelineven.play()
     }
     else
      if ("terre" == answer.value ) {
      timelineterre.play()
     }
     else
     if ("mars" == answer.value ) {
     timelinemars.play()
    }
    else
     if ("jupiter" == answer.value ) {
     timelinejupiter.play()
    }
    else
     if ("saturne" == answer.value ) {
     timelinesaturn.play()
    }
    else
     if ("uranus" == answer.value ) {
     timelineuranus.play()
    }
    else
     if ("neptune" == answer.value ) {
     timelineneptune.play()
    }
   }
 answer.addEventListener("change",reponse);