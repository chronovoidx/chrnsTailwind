const msg = document.getElementById("msg");
document.getElementById("btn").addEventListener("click",
() => {
    msg.textContent ="Manager Esquire!!!!!!!!!";
});

const box = document.getElementById("box");
if(!box){
    console.error("Element with id 'box' where");
}
if (box){
    document.getElementById("1btn").addEventListener("click",
        () => {
            box.style.backgroundColor = "purple";
        });
    
}