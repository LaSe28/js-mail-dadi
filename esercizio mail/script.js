let inputMail = document.querySelector(`#mailAddress`)
let btnStart = document.querySelector(`#start`)
let mailList = [`a@gmail.com`,`b@gmail.com`,`c@gmail.com`,`d@gmail.com`,`e@gmail.com`,`f@gmail.com`,`g@gmail.com`,`h@gmail.com`]
let result = document.querySelector(`#result`)

let authorized = false

btnStart.addEventListener('click', function(){
    
    for (let i = 0; i < mailList.length; i++){
        if (mailList[i] == inputMail.value ){
            authorized = true
        }
    }

    if (authorized == false){
        result.innerHTML = "Non sei autorizzato!"
    } else {
        result.innerHTML = "Bene, sei autorizzato!";
    }
}
)






