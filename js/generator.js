
const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (checkbox1.checked) base += numbers;

    if (checkbox2.checked) base += symbols;

    generatedPassword.innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        generate();
    });
});


/* GENERADOR 2 */




const ingreso = document.querySelector("#inputLength")

function anchura(ingreso){
    let largo = Boolean
    console.log(ingreso.value.length)

    if (ingreso.value.length >= "8" ){
        console.log("Suficiente")
        largo = true;
    }else alert("Recuerde que su contraseña tiene que contener 8 caracteres")

    return largo;
}   

function caracteres(ingreso){
    let caractere;
    console.log(ingreso.value)
    if (ingreso.value.includes("@") || ingreso.value.includes("!") || ingreso.value.includes("=")){

        caractere = true;
        console.log("su contraseña es perfecta") 
    }else alert("Recuerde que su contraseña tiene que contener algun caracter especial")
    
    return caractere;
}

function definicion (anchuraRest, caracteresRest){

    const veri = document.querySelector("#generatedPassword")
    console.log(anchuraRest)
    console.log(caracteresRest)

    if (anchuraRest == true && caracteresRest == true){
        veri.innerText='Su contraseña es segura';
        veri.style.color="lime";
    }else if(anchuraRest!= true && caracteresRest != true){
        veri.innerText='Su contraseña no es segura'; 
        veri.style.color="red";
    }
}


window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        definicion (anchura(ingreso), caracteres(ingreso));
    });
});