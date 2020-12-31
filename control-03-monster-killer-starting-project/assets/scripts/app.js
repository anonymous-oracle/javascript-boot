const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 3 * ATTACK_VALUE * (1 + Math.random());
const PLAYER_STRONG_ATTACK_RELOAD = 3;
// const HEAL_VALUE = 20;

const chosenMaxLife = 150;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;

let rules = `GAME RULES!!\nFor every ${PLAYER_STRONG_ATTACK_RELOAD} uses of attack, strong attack can be used once.\nWhen strong attack is used, player also heals, but takes some random amount of damage.`

alert(rules);

adjustHealthBars(chosenMaxLife);

function monsterHit(monsterAttack) {
    const playerDamage = dealPlayerDamage(monsterAttack);
    currentPlayerHealth -= playerDamage;
}

function playerHit(playerAttack) {
    const damage = dealMonsterDamage(playerAttack);
    currentMonsterHealth -= damage;
}

function checkForWin() {

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        currentPlayerHealth = chosenMaxLife;
        increasePlayerHealth(chosenMaxLife);
        hasBonusLife = false;
        document.getElementById('bonus-life').textContent = 0;
    }

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

function attackType(playerAttackValue) {
    playerHit(playerAttackValue);
    // make the monster hit the player
    monsterHit(MONSTER_ATTACK_VALUE);
}

function attackHandler() {
    attackType(ATTACK_VALUE);
    if (strongAttackUsage > 0) {
        strongAttackUsage--;
        if (strongAttackUsage == 0) {
            strongAttackBtn.style.fontWeight = '900';
            strongAttackBtn.style.background = 'black';
        }
    }
    checkForWin();
}

function strongAttackHandler() {
    if (strongAttackUsage <= 0) {
        healPlayerHandler();
        attackType(ATTACK_VALUE * (1 + Math.random()));
        strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;
        strongAttackBtn.style.fontWeight = 'normal';
        strongAttackBtn.style.background = '#ff0062';
        checkForWin();
    }
}

function healPlayerHandler() {
    healBtn.style.fontWeight = '900';
    healBtn.style.background = 'black';
    healBtn.textContent = 'HEALING...';
    setTimeout(function () {
        healBtn.style.fontWeight = 'normal';
        healBtn.style.background = '#ff0062';
        healBtn.textContent = 'HEAL';
        let healValue = currentMonsterHealth * Math.random();
        if (healValue + currentPlayerHealth > chosenMaxLife) {
            healValue = chosenMaxLife - currentPlayerHealth;
        }
        currentPlayerHealth += healValue;
        increasePlayerHealth(healValue);
        // monsterHit(MONSTER_ATTACK_VALUE);
        checkForWin();
    }, 500);
}







attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);