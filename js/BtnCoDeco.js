const btnCo = document.getElementById('co');

let changeCoDeco = localStorage.getItem("coDeco");

let iconeProfil = document.getElementById('logoProfil');

function connexion() {
    localStorage.setItem("coDeco", "true");
}

function deconnexion() {
    localStorage.setItem("coDeco", "false");
}

if (changeCoDeco == "true") {

    btnCo.innerText = "Deconnexion";
    document.documentElement.style.setProperty('--ecritureBtnCo', '#1B1B1B');
    document.documentElement.style.setProperty('--bgBtnCo', '#880000');
    document.documentElement.style.setProperty('--borderBtnCo', '#000000');
    document.documentElement.style.setProperty('--boxShadowBtnCo', '#000000');
    document.documentElement.style.setProperty('--bgBtnCoHover', '#a50000');
    document.documentElement.style.setProperty('--ecritureBtnCoHover', '#999999');
    btnCo.setAttribute("onclick", "deconnexion()");
    iconeProfil.style.display = "block";

} else {

    btnCo.innerText = "Connexion";
    document.documentElement.style.setProperty('--ecritureBtnCo', '#999999');
    document.documentElement.style.setProperty('--bgBtnCo', '#001ca8');
    document.documentElement.style.setProperty('--borderBtnCo', '#000000');
    document.documentElement.style.setProperty('--boxShadowBtnCo', '#000000');
    document.documentElement.style.setProperty('--bgBtnCoHover', '#0023cf');
    document.documentElement.style.setProperty('--ecritureBtnCoHover', '#e2e2e2');
    btnCo.removeAttribute("onclick");
    iconeProfil.style.display = "none";
}
