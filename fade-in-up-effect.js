// Code sourced from the YouTube channel called Beyond Fireship
// This creates an effect where the board games fade in as you scroll down

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // When the board game is visible on screen it does the fade-in animation
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

// This selects all the board games with the hidden class so they can receive the fade in animation
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
