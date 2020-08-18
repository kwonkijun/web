const mouse = document.querySelector("#mouse");

function move_mouse(degree){
    const id = setInterval(frame, 5);
    function frame(){
        if(parseFloat(mouse.style.left) > window.innerWidth - mouse.offsetWidth - 50){
            const new_degree = 180 - degree;
            mouse.style.left = (parseFloat(mouse.style.left) - 50) +"px";
            mouse.style.transform = `rotate(-${new_degree}deg)`;
            clearInterval(id);
            move_mouse(new_degree);
        }
        else if(parseFloat(mouse.style.left) < 0){
            const new_degree = 180 - degree;
            mouse.style.left = (parseFloat(mouse.style.left) + 50) +"px";
            mouse.style.transform = `rotate(-${new_degree}deg)`;
            clearInterval(id);
            move_mouse(new_degree);
        }
        else if(parseFloat(mouse.style.top) > window.innerHeight - mouse.offsetHeight -50){
            const new_degree = 360 - degree;
            mouse.style.top = (parseFloat(mouse.style.top) - 50) + "px";
            mouse.style.transform = `rotate(-${new_degree}deg)`;
            clearInterval(id);
            move_mouse(new_degree);
        }
        else if(parseFloat(mouse.style.top) < 0){
            const new_degree = 360 - degree;
            mouse.style.top = (parseFloat(mouse.style.top) + 50) + "px";
            mouse.style.transform = `rotate(-${new_degree}deg)`;
            clearInterval(id);
            move_mouse(new_degree);
        } else{
            mouse.style.top = (parseFloat(mouse.style.top) - 2 * Math.sin(Math.PI/180*degree))+"px";
            mouse.style.left = (parseFloat(mouse.style.left) + 2 * Math.cos(Math.PI/180*degree)) + "px";
        }
    }
}

function init(){
    const degree = Math.floor(Math.random() * 360) + 1;
    mouse.style.top = (window.innerHeight - mouse.offsetHeight) / 2 + "px";
    mouse.style.left = window.innerWidth / 2 + "px";
    mouse.style.transform = `rotate(-${degree}deg)`;
    move_mouse(degree);
}

init()