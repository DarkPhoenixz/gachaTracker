var daily = document.getElementsByClassName("daily");
var resine = document.getElementsByClassName("resine");


for (const d of daily) {
    d.addEventListener("click", () =>{
        d.classList.toggle("check");
        var id = d.id;
        if (!localStorage.getItem(id) || localStorage.getItem(id) == "false") 
            localStorage.setItem(id, "true");
        else if (localStorage.getItem(id) == "true") localStorage.setItem(id, "false");
        
    })
}

for (const r of resine) {
    r.addEventListener("click", () =>{
        r.classList.toggle("check");
        var id = r.id;
        if (!localStorage.getItem(id) || localStorage.getItem(id) == "false") localStorage.setItem(id, "true");
        else if (localStorage.getItem(id) == "true") localStorage.setItem(id, "false");

    })
}

function load(){

    var daily = document.getElementsByClassName("daily");
    var resine = document.getElementsByClassName("resine");

    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes()
    
    if(hours >= "4"){
        for (const d of daily) {
            var id = d.id;
            localStorage.setItem(id, "false");
        }   
    }


    for (const d of daily) {
        var id = d.id;
        if (localStorage.getItem(id) == "true")
            document.getElementById(id).classList.toggle("check")
    }   


    for (const r of resine) {
        var id = r.id;
        if (localStorage.getItem(id) == "true")
            document.getElementById(id).classList.toggle("check")
    }
}
load();

function checkTime(){
    const now = new Date();
    const hours = now.toLocaleString();
    document.getElementsByClassName("time")[0].innerHTML = hours;
}
setInterval(checkTime, 1000);

function lastLogin(){
    const now = new Date();
    localStorage.setItem("lastLogin", now.toLocaleString());
}
setInterval(lastLogin, 1000);
