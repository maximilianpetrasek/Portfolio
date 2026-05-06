const button = document.getElementById("menu-toggle");

const toggle = () => {
  document.body.classList.toggle("menu-toggled");
  let sound = new Audio('warioPortal.mp3');
    sound.play();

}

button.onclick = () => toggle();



const selectors = document.querySelectorAll(".selector");
const inputer = document.querySelectorAll("input");

inputer.forEach((input, what) => {

  
  

  function handleClick(){
    var WhatToDo = input.name;
    console.log(input.name);

    let sound = new Audio('warpzone.mp3');
    sound.play();


    switch(WhatToDo){
      case "Email":
      window.open('mailto:maximilianpetrasek@gmail.com', '_blank');
      break;
      case "Youtube":
      window.open('https://www.youtube.com/@Lettucechips', '_blank');
      break;
      case "Discord":
      window.open('https://discord.gg/6tpmVeuVr8', '_blank');
      break;
      case "Github":
      window.open('https://github.com/maximilianpetrasek', '_blank');
      break;
      case "LinkedIn":
      window.open('https://www.linkedin.com/in/maximilian-petrasek-690672197/', '_blank');
      break;
      case "Funny":
      window.open('https://youtu.be/4CO1GOHKjDM', '_blank');
      break;
      default:

      break;
    }

  }
  input.addEventListener("click", handleClick);
})

selectors.forEach((selector, quePasa) => {
  const knob = selector.querySelector(".knob");
  const ul = selector.querySelector("ul");
  const radios = selector.querySelectorAll('input[type="radio"]');
  console.log(quePasa);
  
  function handleClick() {
    selector.classList.toggle("active");

    if (selector.classList.contains("active")) {
      selector.style.removeProperty("--angle");
      let sound = new Audio('warpdrive.mp3');
    sound.play();
    } else {
      selector.style.setProperty("--angle", "-90deg");
      // Check the first one on close
      radios.forEach((radio, index) => {
        if (index !== 0) {
          radio.checked = false;
        } else {
          radio.checked = true;
        }
        
      });
      
    }

      
    

    

  }


  knob.addEventListener("click", handleClick);
});





