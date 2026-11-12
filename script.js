const planetData = {
  sun:{name:"Sun",type:"G-type star",diameter:"1,392,700 km",day:"About 27 Earth days",year:"—",moons:"0",distance:"Center of system",description:"The star at the center of our solar system. Its gravity holds the planets in orbit and its energy makes life on Earth possible."},
  mercury:{name:"Mercury",type:"Terrestrial planet",diameter:"4,879 km",day:"58.6 Earth days",year:"88 Earth days",moons:"0",distance:"57.9 million km",description:"The smallest planet and the closest planet to the Sun. Its cratered surface experiences extreme temperature changes."},
  venus:{name:"Venus",type:"Terrestrial planet",diameter:"12,104 km",day:"243 Earth days",year:"225 Earth days",moons:"0",distance:"108.2 million km",description:"A rocky world with a dense carbon-dioxide atmosphere. Its powerful greenhouse effect makes it the hottest planet."},
  earth:{name:"Earth",type:"Terrestrial planet",diameter:"12,742 km",day:"24 hours",year:"365.25 days",moons:"1",distance:"149.6 million km",description:"Our home planet and the only known world to support life. Liquid water covers about 71 percent of its surface."},
  mars:{name:"Mars",type:"Terrestrial planet",diameter:"6,779 km",day:"24.6 hours",year:"687 Earth days",moons:"2",distance:"227.9 million km",description:"The Red Planet is a cold desert world with giant volcanoes, ancient river features and two small moons."},
  jupiter:{name:"Jupiter",type:"Gas giant",diameter:"139,820 km",day:"9.9 hours",year:"11.86 Earth years",moons:"95 confirmed",distance:"778.6 million km",description:"The largest planet in our solar system. Jupiter has powerful storms, including the Great Red Spot, and many moons."},
  saturn:{name:"Saturn",type:"Gas giant",diameter:"116,460 km",day:"10.7 hours",year:"29.4 Earth years",moons:"146 confirmed",distance:"1.43 billion km",description:"Known for its spectacular rings, Saturn is a gas giant surrounded by icy and rocky moons."},
  uranus:{name:"Uranus",type:"Ice giant",diameter:"50,724 km",day:"17.2 hours",year:"84 Earth years",moons:"28 confirmed",distance:"2.87 billion km",description:"An ice giant with a blue-green atmosphere and an extreme axial tilt, making it rotate almost on its side."},
  neptune:{name:"Neptune",type:"Ice giant",diameter:"49,244 km",day:"16.1 hours",year:"164.8 Earth years",moons:"16 confirmed",distance:"4.5 billion km",description:"The most distant known planet from the Sun. Neptune is a cold ice giant with supersonic winds."}
};
const order=["sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
const el=id=>document.getElementById(id);
function selectPlanet(key){
  const p=planetData[key]; if(!p)return;
  el("planetName").textContent=p.name;
  el("planetDescription").textContent=p.description;
  el("type").textContent=p.type;
  el("diameter").textContent=p.diameter;
  el("day").textContent=p.day;
  el("year").textContent=p.year;
  el("moons").textContent=p.moons;
  el("distance").textContent=p.distance;
  const n=order.indexOf(key)+1;
  el("planetIndex").textContent=`${String(n).padStart(2,"0")} / 09`;
  document.querySelectorAll("[data-select]").forEach(b=>{
    const active=b.dataset.select===key;
    b.classList.toggle("selected",active);
    b.setAttribute("aria-pressed",String(active));
  });
}
document.querySelectorAll("[data-planet]").forEach(b=>b.addEventListener("click",()=>selectPlanet(b.dataset.planet)));
document.querySelectorAll("[data-select]").forEach(b=>b.addEventListener("click",()=>selectPlanet(b.dataset.select)));
selectPlanet("earth");
