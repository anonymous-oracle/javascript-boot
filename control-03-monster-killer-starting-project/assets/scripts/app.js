const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = ATTACK_VALUE * (1 + (Math.random()));
const PLAYER_STRONG_ATTACK_RELOAD = 3;

let chosenMaxLife = 150;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;


adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    if (strongAttackUsage > 0) {
        strongAttackUsage--;
    }
    // make the monster hit the player
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        if (!alert('Player Won!')) {
            window.location.reload();
        }
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        if (!alert('Monster Won :(')) {
            window.location.reload();
        }
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        if (!alert('It\'s a Draw :|')) {
            window.location.reload();
        }
    }
}

function strongAttackHandler() {
    if (strongAttackUsage <= 0) {
        const damage = dealMonsterDamage(ATTACK_VALUE) * (1 + (Math.random() * (PLAYER_STRONG_ATTACK_RELOAD + 2)));
        currentMonsterHealth -= damage;
        strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;
        // make the monster hit the player
        const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
        currentPlayerHealth -= playerDamage;
        if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
            if (!alert('Player Won!')) {
                window.location.reload();
            }
        } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
            if (!alert('Monster Won :(')) {
                window.location.reload();
            }
        }
        else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
            if (!alert('It\'s a Draw :|')) {
                window.location.reload();
            }
        }
    }
}









attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);