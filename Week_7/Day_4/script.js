const url = 'https://swapi.dev/api/planets';

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.results);
    const planets = data.results;
    planets.map((planet)=>{
        console.log(planet);
        createPlanetDiv(planet);
    })
})
.catch((error)=>console.log(error.message))


function createPlanetDiv(planet) {
    console.log(planet.name);
    const target = document.getElementById('target');
    
   const div = document.createElement('div');
   div.className = ('bg-gray-200 p-10 text-left');
   const h3Name = document.createElement('h3');
   const pName = document.createElement('h3');
   pName.innerHTML = planet.name;
   const h3Pop = document.createElement('h3');
   const pPop = document.createElement('h3');
   pPop.innerHTML = planet.population;
   const h3Terr = document.createElement('h3');
   const pTerr = document.createElement('h3');
   pTerr.innerHTML = planet.terrain;

   div.appendChild(pName)
   div.appendChild(pPop)
   div.appendChild(pTerr)
}