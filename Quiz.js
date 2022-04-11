let resultatFinal = document.getElementById("bouton");

resultatFinal.addEventListener("click", calculer);

function calculer() {
    console.log("calculer !");
    var score = 0;
    if (QR11.checked) {
        score++;
        response1.textContent = "La bonne réponse est A";
        repo1.style.background = "green";
    } else {
        response1.textContent = "La bonne réponse est A";
        repo1.style.background = "red";
    }
    if (QR23.checked) {
        score++;
        response2.textContent = "La bonne réponse est STYLE";
        repo2.style.background = "green";
    } else {
        response2.textContent = "La bonne réponse est STYLE";
        repo2.style.background = "red";
    }
    //alert("Votre score est :" + score);
    //document.write("Votre score est :" + score);
    correction.textContent = "Votre score est : " + score;
    resultat.style.background = "orange";
}
let correction = document.getElementById("resultat");
let response1 = document.getElementById("repo1");
let response2 = document.getElementById("repo2");
let QR23 = document.getElementById("QR23");
let QR11 = document.getElementById("QR11");