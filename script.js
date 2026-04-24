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

console.log(canCastSpell(120, 30, false));  // Esperado: true  (mana ok, no aturdido)
console.log(canCastSpell(120, 30, true));   // Esperado: false (mana ok, pero aturdido)
console.log(canCastSpell(10, 30, false));   // Esperado: false (mana insuficiente)
console.log(canCastSpell(10, 30, true));    // Esperado: false (ambas condiciones fallan)