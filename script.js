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

console.log(calculateDamage(45, 30)); // Esperado: 15
console.log(calculateDamage(10, 50)); // Esperado: 0
console.log(isAlive(80));             // Esperado: true
console.log(isAlive(0));              // Esperado: false
console.log(isAlive(-10));            // Esperado: false