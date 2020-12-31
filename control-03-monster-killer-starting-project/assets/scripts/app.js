const PLAYER_STRONG_ATTACK_RELOAD = 3;
// const HEAL_VALUE = 20;

// const DIFFICULTY = Number(prompt('ENTER THE DIFFICULTY OF THE GAME(1 - 10): ', '3'));
const DIFFICULTY = 3;


let rules = 'Click attack to start the game and proceed accordingly.\n'

// const chosenMaxLife = 5000;
// alert(rules);

const chosenMaxLife = Number(prompt(rules + 'Now enter the max life of player and monster: ', '150'));
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;
// alert(rules);

function amplify(value) {
    return value * (1 + Math.random());
}

const ATTACK_VALUE = Math.random() * chosenMaxLife;
const MONSTER_ATTACK_VALUE = amplify(ATTACK_VALUE);

function reloadPage() {
    window.location.reload();
}

if (chosenMaxLife <= 1 || isNaN(chosenMaxLife)) {
    alert('You have not entered a valid health value. Enter a number greater than 1');
    reloadPage();
}

adjustHealthBars(chosenMaxLife);

function monsterHit(monsterAttack) {
    const playerDamage = dealPlayerDamage(monsterAttack);
    currentPlayerHealth -= playerDamage;
}

function playerHit(playerAttack) {
    const damage = dealMonsterDamage(playerAttack);
    currentMonsterHealth -= damage;
}

function bonusLifeCheck() {
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        currentPlayerHealth = chosenMaxLife;
        increasePlayerHealth(chosenMaxLife);
        hasBonusLife = false;
        document.getElementById('bonus-life').textContent = 0;
    }
}

function checkForWin() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        if (!alert('Player Won :)')) {
            reloadPage();
        }
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        if (!alert('Monster Won :(')) {
            reloadPage();
        }
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        if (!alert('It\'s a Draw :|')) {
            reloadPage();
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
    bonusLifeCheck();
    checkForWin();
}

function strongAttackHandler() {
    if (strongAttackUsage <= 0) {
        healPlayerHandler();
        attackType(amplify(MONSTER_ATTACK_VALUE));
        strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;
        strongAttackBtn.style.fontWeight = 'normal';
        strongAttackBtn.style.background = '#ff0062';
        bonusLifeCheck();
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
        // checkForWin();
    }, 500);
}







attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);