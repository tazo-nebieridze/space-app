let header = document.querySelector(".header");
let currentPage = 0;
let explore = document.querySelector('.explore');
let spanSupra = document.querySelectorAll('.span-supra');
let destinationBar = document.querySelector(".destination-bar");
let curentDestination = "moon";
let circles = document.querySelector(".circles");
let curentCircle = document.querySelector(".circle-1");
let technologyBar = document.querySelector(".technology-steps");
let curentTechnology = document.querySelector(".technology-1");
let info = {
    "destinations": [
        {
          "name": "Moon",
          "images": {
            "png": "./assets/destination/image-moon.png",
            "webp": "./assets/destination/image-moon.webp"
          },
          "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          "distance": "384,400 km",
          "travel": "3 days"
        },
        {
          "name": "Mars",
          "images": {
            "png": "./assets/destination/image-mars.png",
            "webp": "./assets/destination/image-mars.webp"
          },
          "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          "distance": "225 mil. km",
          "travel": "9 months"
        },
        {
          "name": "Europa",
          "images": {
            "png": "./assets/destination/image-europa.png",
            "webp": "./assets/destination/image-europa.webp"
          },
          "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          "distance": "628 mil. km",
          "travel": "3 years"
        },
        {
          "name": "Titan",
          "images": {
            "png": "./assets/destination/image-titan.png",
            "webp": "./assets/destination/image-titan.webp"
          },
          "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          "distance": "1.6 bil. km",
          "travel": "7 years"
        }
      ],
      "crew": [
        {
          "name": "Douglas Hurley",
          "images": {
            "png": "./assets/crew/image-douglas-hurley.png",
            "webp": "./assets/crew/image-douglas-hurley.webp"
          },
          "role": "Commander",
          "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
          "name": "Mark Shuttleworth",
          "images": {
            "png": "./assets/crew/image-mark-shuttleworth.png",
            "webp": "./assets/crew/image-mark-shuttleworth.webp"
          },
          "role": "Mission Specialist",
          "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
          "name": "Victor Glover",
          "images": {
            "png": "./assets/crew/image-victor-glover.png",
            "webp": "./assets/crew/image-victor-glover.webp"
          },
          "role": "Pilot",
          "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
          "name": "Anousheh Ansari",
          "images": {
            "png": "./assets/crew/image-anousheh-ansari.png",
            "webp": "./assets/crew/image-anousheh-ansari.webp"
          },
          "role": "Flight Engineer",
          "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
      ],
      "technology": [
        {
          "name": "Launch vehicle",
          "images": {
            "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
          },
          "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
          "name": "Spaceport",
          "images": {
            "portrait": "./assets/technology/image-spaceport-portrait.jpg",
            "landscape": "./assets/technology/image-spaceport-landscape.jpg"
          },
          "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
          "name": "Space capsule",
          "images": {
            "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
            "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
          },
          "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
      ]
}
let closePage = function(curent){
    if(curent == 0){
        document.querySelector(".home-paige").style.visibility = 'hidden';
        document.querySelector(".home-paige").style.transition = '0s';

        document.querySelector(".explore").style.visibility = 'hidden';
        document.querySelector(".explore").style.transition = '0s';

        document.querySelector(".home-img").style.visibility = 'hidden';
        document.querySelector(".home-img").style.transition = '0s';

        document.querySelector(".home").style.border = "0px";
        document.querySelector(".home").style.transition = "0s";

    }
    if(curent == 1){
        document.querySelector(".distation-div").style.visibility = 'hidden';
        document.querySelector(".distation-div").style.transition = '0s';

        document.querySelector(".distation-img").style.visibility = 'hidden';
        document.querySelector(".distation-img").style.transition = '0s';

        document.querySelector(".planet-div").style.visibility = 'hidden';
        document.querySelector(".planet-div").style.transition = '0s';

        document.querySelector(".destination").style.border = "0px";
        document.querySelector(".destination").style.transition = "0s";


    }
    if(curent == 2){
        document.querySelector(".crew-div").style.visibility = 'hidden';
        document.querySelector(".crew-img").style.visibility = 'hidden';
        document.querySelector(".crew-section").style.visibility = 'hidden';
        document.querySelector(".crew").style.border = "0px";

    }
    if(curent == 3){
        document.querySelector(".technology-div").style.visibility = 'hidden';
        document.querySelector(".technology-img").style.visibility = 'hidden';
        document.querySelector(".technology-section").style.visibility = 'hidden';
        document.querySelector(".technology").style.border = "0px";

    }

}
let openPage = function(next){
    if(next == 0){
        document.querySelector(".home-paige").style.visibility = 'visible';
        document.querySelector(".home-paige").style.transition = '0s';

        document.querySelector(".explore").style.visibility = 'visible';
        document.querySelector(".explore").style.transition = '0s';

        document.querySelector(".home-img").style.visibility = 'visible';
        document.querySelector(".home-img").style.transition = '0s';

        document.querySelector(".home").style.borderBottom = "3px solid white";
        document.querySelector(".home").style.transition = "0s";


    }
    if(next == 1){
    document.querySelector(".distation-div").style.visibility = 'visible';
    document.querySelector(".distation-div").style.transition = '0s';

    document.querySelector(".distation-img").style.visibility = 'visible';
    document.querySelector(".distation-img").style.transition = '0s';

    document.querySelector(".planet-div").style.visibility = 'visible';
    document.querySelector(".planet-div").style.transition = '0s';

    document.querySelector(".destination").style.borderBottom = "3px solid white";
    document.querySelector(".destination").style.transition = "0s";
    }
    if(next == 2){
        document.querySelector(".crew-div").style.visibility = 'visible';
        document.querySelector(".crew-img").style.visibility = 'visible';
        document.querySelector(".crew-section").style.visibility = 'visible';
        document.querySelector(".crew").style.borderBottom = "3px solid white";

    }
    if(next == 3){
        document.querySelector(".technology-div").style.visibility = 'visible';
        document.querySelector(".technology-img").style.visibility = 'visible';
        document.querySelector(".technology-section").style.visibility = 'visible';
        document.querySelector(".technology").style.borderBottom = "3px solid white";

    }
}
header.addEventListener('click',(e)=>{
    if(!e.target.classList.contains("span-supra")){
        console.log(e.target);
        if(currentPage != 0)     explore.classList.remove("animate__zoomOut");
    
        closePage(currentPage);
    
        openPage(e.target.innerText[1]);
        currentPage = e.target.innerText[1];
    }
    
    
})
spanSupra.forEach(el =>{
el.addEventListener('click',()=>{
    if(currentPage != 0)  explore.classList.remove("animate__zoomOut");
    console.log(el.parentElement.innerText[1]);
    closePage(currentPage);
    
    openPage(el.parentElement.innerText[1]);
    currentPage = el.parentElement.innerText[1];
    })
})
    



explore.addEventListener("click",()=>{
    document.querySelector(".explore").classList.add("animate__zoomOut");
    document.querySelector(".explore").style.visibility = "hidden";
    document.querySelector(".explore").style.transition = "0.75s";
    document.querySelector(".home-paige").style.visibility = 'hidden';
    document.querySelector(".home-paige").style.transition = '0.75s';
    document.querySelector(".home-img").style.visibility = 'hidden';
    document.querySelector(".home-img").style.transition = '0.75s';
    document.querySelector(".home").style.transition = "0.75s";
    document.querySelector(".home").style.border = "0px";
   
    
    document.querySelector(".distation-div").style.visibility = 'visible';
    document.querySelector(".distation-div").style.transitionDelay = '0.75s';

    document.querySelector(".distation-img").style.visibility = 'visible';
    document.querySelector(".distation-img").style.transitionDelay = '0.75s';

    document.querySelector(".planet-div").style.visibility = 'visible';
    document.querySelector(".planet-div").style.transitionDelay = '0.75s';

    document.querySelector(".destination").style.borderBottom = "3px solid white";
    document.querySelector(".destination").style.transitionDelay = "0.75s";

    currentPage = 1;
})

destinationBar.addEventListener('click',(e)=>{
    console.log(e.target.innerText.toLowerCase())
    // if(curentDestination == 0){
    //     document.querySelector(".moon").borderBottom = "3px solid white"
    // }
    // if(curentDestination == 1){
    //     document.querySelector(".mars").borderBottom = "3px solid white"
    // }
    // if(curentDestination == 2){
    //     document.querySelector(".europe").borderBottom = "3px solid white"
    // }
    // if(curentDestination == 3){
    //     document.querySelector(".titan").borderBottom = "3px solid white"
    // }
    
    document.querySelector(`.${curentDestination}`).style.border = "0px";
    document.querySelector(`.${e.target.innerText.toLowerCase()}`).style.borderBottom = "2px solid white";
    curentDestination = e.target.innerText.toLowerCase();

    if(e.target.classList.contains("moon")){
        document.querySelector(".planet-img").src ="starter-code/assets/destination/image-moon.png";
        document.querySelector(".planet-info h1").innerText = "MOON";
        document.querySelector(".planet-info p").innerText = info.destinations[0].description;
        document.querySelector(".avg-distance h2").innerText = info.destinations[0].distance;
        document.querySelector(".travel-time h2").innerText = info.destinations[0].travel;
        
    }
    if(e.target.classList.contains("mars")){
        document.querySelector(".planet-img").src ="starter-code/assets/destination/image-mars.png";
        document.querySelector(".planet-info h1").innerText = "MARS";
        document.querySelector(".planet-info p").innerText = info.destinations[1].description;
        document.querySelector(".avg-distance h2").innerText = info.destinations[1].distance;
        document.querySelector(".travel-time h2").innerText = info.destinations[1].travel;
     

    }
    if(e.target.classList.contains("europa")){
        document.querySelector(".planet-img").src ="starter-code/assets/destination/image-europa.png";
        document.querySelector(".planet-info h1").innerText = "EUROPA";
        document.querySelector(".planet-info p").innerText = info.destinations[2].description;
        document.querySelector(".avg-distance h2").innerText = info.destinations[2].distance;
        document.querySelector(".travel-time h2").innerText = info.destinations[2].travel;

    }
    if(e.target.classList.contains("titan")){
        document.querySelector(".planet-img").src ="starter-code/assets/destination/image-titan.png";
        document.querySelector(".planet-info h1").innerText = "TITAN";
        document.querySelector(".planet-info p").innerText = info.destinations[3].description;
        document.querySelector(".avg-distance h2").innerText = info.destinations[3].distance;
        document.querySelector(".travel-time h2").innerText = info.destinations[3].travel;
       

    }


})

circles.addEventListener('click',(e)=>{

  if(e.target.classList.value != "circles"){
    curentCircle.style.backgroundColor = "rgb(159, 154, 154";
    e.target.style.backgroundColor = "white";
    curentCircle = e.target;
  }
  
  if(e.target.classList.value == "circle-1"){
    document.querySelector(".crew-info h2").innerText = info.crew[0].role;
    document.querySelector(".crew-info h1").innerText = info.crew[0].name;
    document.querySelector(".crew-info p").innerText = info.crew[0].bio;
    document.querySelector(".crewmember-img").src = "starter-code/assets/crew/image-douglas-hurley.png";
  }
  if(e.target.classList.value == "circle-2"){
    document.querySelector(".crew-info h2").innerText = info.crew[1].role;
    document.querySelector(".crew-info h1").innerText = info.crew[1].name;
    document.querySelector(".crew-info p").innerText = info.crew[1].bio;
    document.querySelector(".crewmember-img").src = "starter-code/assets/crew/image-mark-shuttleworth.png";
  }
  if(e.target.classList.value == "circle-3"){
    document.querySelector(".crew-info h2").innerText = info.crew[2].role;
    document.querySelector(".crew-info h1").innerText = info.crew[2].name;
    document.querySelector(".crew-info p").innerText = info.crew[2].bio;
    document.querySelector(".crewmember-img").src = "starter-code/assets/crew/image-victor-glover.png";
  }
  if(e.target.classList.value == "circle-4"){
    document.querySelector(".crew-info h2").innerText = info.crew[3].role;
    document.querySelector(".crew-info h1").innerText = info.crew[3].name;
    document.querySelector(".crew-info p").innerText = info.crew[3].bio;
    document.querySelector(".crewmember-img").src = "starter-code/assets/crew/image-anousheh-ansari.png";
  }
})

technologyBar.addEventListener('click',(e)=>{
  console.log(e.target);
  if(e.target.classList.value != "technology-steps"){
    curentTechnology.style.backgroundColor = "rgb(40, 33, 51)";
    curentTechnology.style.color = "white";
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    curentTechnology = e.target;
  }
  if(e.target.classList.value == "technology-1"){
    document.querySelector(".technology-info h1").innerText = info.technology[0].name;
    document.querySelector(".technology-info p").innerText = info.technology[0].description;
    document.querySelector(".vechicle-img").src = "starter-code/assets/technology/image-launch-vehicle-portrait.jpg";

  }
  if(e.target.classList.value == "technology-2"){
    document.querySelector(".technology-info h1").innerText = info.technology[1].name;
    document.querySelector(".technology-info p").innerText = info.technology[1].description;
    document.querySelector(".vechicle-img").src = "starter-code/assets/technology/image-spaceport-portrait.jpg";
  }
  if(e.target.classList.value == "technology-3"){
    document.querySelector(".technology-info h1").innerText = info.technology[2].name;
    document.querySelector(".technology-info p").innerText = info.technology[2].description;
    document.querySelector(".vechicle-img").src = "starter-code/assets/technology/image-space-capsule-portrait.jpg";
  }
})

document.querySelector(".star-img").addEventListener('click',()=>{
  document.querySelector(".star-img").classList.add("animate__heartBeat");
})

