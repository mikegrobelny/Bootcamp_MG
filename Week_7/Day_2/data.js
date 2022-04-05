 
 const surfboards = {
        name: "log"},
        {name: "fish"},
        name: "midLength",
        name: "egg" ,
        name: "thruster",
        name: "miniSimmons",
        name: "hotCurl",
        name: "bonzer",
        brand: "pyzel",
        brand: "anderson",
        brand: "haydenShapes",
        brand: "alMerric",
        brand: "aloha",
        brand: "super",
        brand: "jsIndustries",
        brand: "firewire",
}

function printSurfboardNames(){
    surfboards.forEach((surfboard)=>{
        console.log(surfboard.name);
        const p = document.createElement('p');
        console.log(p);
        p.innerHTML = surfboard.name;
        document.getElementById('demo').appendChild(p)
    })
}
printSurfboardNames();