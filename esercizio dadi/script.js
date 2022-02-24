let btnLaunch = document.querySelector("#launch")
let result = document.querySelector("#result")
let text = document.querySelector("#text")

btnLaunch.addEventListener("click", function(){
    
    let pcLaunch = Math.floor(Math.random() * 6 + 1);
    let playerLaunch = Math.floor(Math.random() * 6 + 1);
    result.innerHTML="Dado del PC <br>" + ' ' + pcLaunch + ' <br>' + "Dado dell'utente" + ' <br>' + playerLaunch
    
    if(pcLaunch > playerLaunch){   
        text.innerHTML="Ah ah! Ho vinto io!";
    } else if (pcLaunch < playerLaunch){
        text.innerHTML="E' solo fortuna..";
    } else{
        text.innerHTML="Pareggio!";
    }

})
