function calculerINC() {

    const poids = document.getElementById("poids");
    const taille = document.getElementById("taille");

    const imc = poids.value / Math.pow(taille.value, 2);
    let interpretation = "Vous etes en etat : ";

    if (imc <16.5){
        interpretation += "de dénutrition";

    }
    else if(imc < 18.5) {
        interpretation += "de maigreur";
    }
    else if(imc < 25) {
        interpretation = "Vous avez un poids normal";
    }
    else if(imc < 30) {
        interpretation += "de surpoids";
    }
    else if(imc < 35) {
        interpretation += "d'obesité modéré";
    }
    else if(imc < 40) {
        interpretation += "d'obesité severe";
    }
    else{
        interpretation += "d'obesité morbide ou massove";
    }

    let message = `votre IMC est ${imc.toFixed(2)} <hr> ${interpretation}`
    const resultatArea = document.querySelector("span")
    resultatArea.innerHTML = message;
    resultatArea.parentNode.hidden = false;
}