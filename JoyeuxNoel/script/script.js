window.onload = () => {
    const giftImage = document.querySelector("#giftContainer");

    let texteClique = document.createElement("p");
    texteClique.textContent = "Clique sur le cadeau !";
    texteClique.style = "color: #fff; text-align: center; font-size: 200%";
    giftImage.appendChild(texteClique);
    const body = document.body;

    let paragraphe = document.querySelector("#messageFenetre");
    paragraphe.style.visibility = "hidden";

    // Ajout de la classe rebound pour que l'image commence à rebondir
    const img = document.querySelector("#giftImage");
    img.classList.add("rebound");

    giftImage.addEventListener("click", () => {
        paragraphe.style.visibility = "visible";
        giftImage.style.opacity = "0";
        setTimeout(() => {
            giftImage.style.display = "none";  // Masque complètement l'image après la transition
        }, 300); // Le temps de la transition de l'opacité

        // Lance l'animation des fleurs en retirant la classe "not-loaded"
        body.classList.remove("not-loaded");

        // Arrêter l'animation de rebond une fois que l'image est cliquée
        img.classList.remove("rebound");
    });
};
