const btn=document.getElementById('btn');
const container=document.getElementById('container');

btn.addEventListener('click',()=>{
createNotification();
});

Function createNotification(){

const note=document.createElement('div');
note.classList.add('toast');
note.innerText="This is web development bootcamp!";
container.appendChild(note);
setTimeout(()=>{
    note.remove();
},
    3000);
}
