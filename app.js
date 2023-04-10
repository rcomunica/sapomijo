/* Buttons and envelope */
var musicControl = document.getElementById("musicControl");
var imageControl = document.getElementById("imageControl");
var closeXmark = document.getElementById("closeXmark");
var envelope = document.getElementById("envelope");

/* Audio effects and Music */
var music = new Audio("audio.wav");
var kissEffect = new Audio("kiss-effect.wav");
var PhotoEffect = new Audio("photo-effect.wav")
/* Select of my girl */
var firstSelect = document.getElementById("firstSelect");
var secondSelect = document.getElementById("secondSelect");

/* Containers */
var containerPersons = document.querySelector(".container-persons");
var containerMessages = document.querySelector(".container-message");
var containerNotice = document.querySelector(".notice-containers");
var containerHeart = document.querySelector(".container-heart")

/* Buttons of Messages (change view of message) */
var toSecondMessage = document.getElementById("toSecondMessage");
var toThirdMessage = document.getElementById("toThirdMessage");

/* Messages */
var firstMessage = document.querySelector(".first-message");
var secondMessage = document.querySelector(".second-message");
var thirdMessage = document.querySelector(".third-message");

/* Persons */
var firstPerson = document.querySelector(".first-person")  
var secondPerson = document.querySelector(".second-person")
  /*head's person*/
  var headPersonGirl = document.querySelector(".head-person-girl")
  var headPersonBoy = document.querySelector(".head-person-boy")

/* Others */
var noticeText = document.getElementById("Notice-Tittle");
var MiniMessage = document.getElementById("MiniMessage");
var body = document.body;

// Here start the magic!

var primeraPregunta = prompt("Hodi!, pregunta... ¿me kieres dar un beso? (pon el numero) \n 1. Si\n 2. No")

if(primeraPregunta == 1){
  alert("Ta wueno, damelo ya 😎... y sin mas preambulos disfruta esta animacion :D... (recuerda que abajo puedes poner musica)")
} else {
  alert("Ta bien pss... y sin mas preambulos disfruta esta animacion :D... (recuerda que abajo puedes poner musica)")
}

if (music.paused) {
  musicControl.innerHTML =
    '<span class="material-symbols-outlined">music_off</span>';
}

musicControl.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    musicControl.innerHTML =
      '<span class="material-symbols-outlined">music_note</span>';
  } else {
    music.pause();
    musicControl.innerHTML =
      '<span class="material-symbols-outlined">music_off</span>';
  }
});

setTimeout(function () {
  envelope.style.display = "block";
}, 8500);

setTimeout(function () {
  setTimeout(function() {
    noticeText.style.opacity = "1";
  }, 500);
}, 9000);

envelope.addEventListener("click", function () {
  containerNotice.style.display = "none";
  noticeText.style.display = "none";
  containerMessages.style.display = "block";
  firstMessage.style.display = "block";
  firstMessage.classList.add('first-message_animation');
  setTimeout(function() {
    firstMessage.style.transform = "translate(-50%, -50%)";
  }, 10);
});



toSecondMessage.addEventListener("click", function () {
  secondMessage.style.display = "block";

  secondMessage.classList.add('second-message_animation');
  setTimeout(function() {
    secondMessage.style.transform = "translate(-50%, -50%)";
  }, 10);

  setTimeout(function() {
    firstMessage.style.position = "absolute"
    firstMessage.style.transform = "translate(200%, -50%)";
    setTimeout(function(){
      firstMessage.style.display = "none";
    }, 550)
  }, 15);

});

toThirdMessage.addEventListener("click", function () {
  secondMessage.style.display = "none";
  thirdMessage.style.display = "block";
});


secondSelect.addEventListener("click", function () {
  secondSelect.style.top = Math.floor(Math.random() * 100) + "%";
  secondSelect.style.left = Math.floor(Math.random() * 100) + "%";
});

firstSelect.addEventListener("click", function(){
  containerMessages.style.display = "none";
  containerNotice.style.display = "none"
  containerPersons.style.display = "block"

  firstMessage.style.display = "none";
  secondMessage.style.display = "none";
  thirdMessage.style.display = "none";
  music.volume = 0.2;

  yesSelect();

})

// Declaration of functions

function yesSelect() {
  containerHeart.classList.add("in-animation")
  setTimeout(() => {
    envelope.style.display = "none"
  }, 1000);

  
  setTimeout(() => {
    secondPerson.animate([
      {left: '60%'},
      {left: '50%'},
      {left: '46%'},
      {left: '50%'},
      {left: '60%'},
    ],{
      duration: 5000,
    })
    
    setTimeout(() => {
        headPersonBoy.animate([
          {background: '#AB2D2D'},
          {background: '#CE1818'},
          {background: '#B81212'},
        ],{
          duration: 4200,
        })
    }, 2800);
    
    setTimeout(() => {
      containerHeart.style.display = "flex"
      setTimeout(() => {
        containerHeart.style.opacity = "1"
      }, 500);
      if(musicControl.textContent != "music_off"){
        kissEffect.play()
      } else {
        console.log("La musica esta desactivada! :C");
      }
    }, 2400);

  }, 2500);

  setTimeout(() => {
    imageControl.style.display = "inline"
    MiniMessage.style.display = "inline"
  }, 3000);

}

imageControl.addEventListener("click", () =>{
  if(musicControl.textContent != "music_off"){
    PhotoEffect.play()  
  } else {
    console.log("La musica esta desactivada! :C (x2)");
  }
  body.animate([
    {background: '#CACACA'},
    {background: '#FFFFFF'},
    {background: '#CACACA'},
    {background: 'black'},
  ],{
    duration: 500,
    fill: "forwards"
  })
})


function closeMessage() {
  containerPersons.style.display = "block";
  containerNotice.style.display = "block";
  containerMessages.style.display = "none";

  noticeText.style.display = "block";

  firstMessage.style.display = "none";
  secondMessage.style.display = "none";
  thirdMessage.style.display = "none";

  firstMessage.classList.remove('first-message_animation')
}
