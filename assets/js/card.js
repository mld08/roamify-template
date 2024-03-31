document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".recommendation-card"); // Sélectionnez toutes les cartes
    const cardGroup = document.getElementById("cardGroup");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const buttonWrapper = document.getElementById("buttonWrapper");
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);

    let currentIndex = 0;
    const maxIndex = Math.ceil(cards.length / 4) ;

    

    function showCards(startIndex) {
        cardGroup.innerHTML = ""; // Réinitialiser le contenu
        const visibleCards = Array.from(cards).slice(startIndex, startIndex + 4);
        visibleCards.forEach(card => {
            card.classList.add('recommendation-card'); // Ajouter la classe parente
            cardGroup.appendChild(card); // Ajouter la carte
    
            // Ajouter un délai pour forcer le redessin
            setTimeout(() => {
                card.style.transform = 'translateX(0)'; // Réinitialiser la position
            }, 100);
        });
    }
    showCards(currentIndex);

    nextBtn.addEventListener("click", function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            showCards(currentIndex);
        }
        if (currentIndex === maxIndex) {
            nextBtn.style.display = "none";
        }
        prevBtn.style.display = "block";
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            showCards(currentIndex);
        }
        if (currentIndex === 0) {
            prevBtn.style.display = "none";
        }
        nextBtn.style.display = "block";
    });
});