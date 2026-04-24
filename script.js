const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

function calculateDamage(attack, defense) {
    const result = attack - defense;
    return result < 0 ? 0 : result;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};


function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}

console.log(calculateDamage(attack, defense));
console.log(isAlive(health));
console.log(canCastSpell(mana, 30, false));
console.log(getPresentation(name, characterClass, level));



// ── NAVBAR ──

// Hamburger menu
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
});

// Active link on scroll
const sections = document.querySelectorAll("main section");
const links = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            links.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
}, { threshold: 0.7 });

sections.forEach((section) => observer.observe(section));

// Close menu when a link is clicked (mobile)
links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", false);
    });
});


// ── CHALLENGE FORM ──
const challengeForm = document.getElementById("challenge-form");
const resultCard = document.getElementById("result-card");
const resultName = document.getElementById("result-name");
const resultMessage = document.getElementById("result-message");
const cancelBtn = document.getElementById("cancel-btn");

const zaraMessages = {
    "1": "Zara suspira. '¿Nivel 1? ¿Te perdiste camino a la guardería o viniste directo al torneo?'",

    "4": "Zara sonríe de lado. 'Bueno... al menos sabés sostener un arma. Ya es más de lo que esperaba.'",

    "7": "Zara asiente lentamente. 'Interesante... alguien que no muere en el tutorial. Esto podría durar más de 5 minutos.'",

    "10": "Zara ríe suavemente. 'Al fin alguien serio. Perfecto... me estaba aburriendo de ganar sin esfuerzo.'"
};

challengeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("challenger-name").value.trim();
    const characterClass = document.getElementById("challenger-class").value.trim();
    const level = document.getElementById("challenger-level").value;

    resultName.textContent = `⚔️ ${name} — ${characterClass}`;
    resultMessage.textContent = zaraMessages[level];

    resultCard.classList.add("visible");
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

cancelBtn.addEventListener("click", () => {
    resultCard.classList.remove("visible");
    challengeForm.reset();
});