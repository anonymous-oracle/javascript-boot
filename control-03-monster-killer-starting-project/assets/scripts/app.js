// const HEAL_VALUE = 20;

let rules = 'Click attack to start the game and proceed accordingly.\n'

// const chosenMaxLife = 5000;
// alert(rules);


function getMaxLifeValues() {
    const enteredValue = prompt(rules + 'Now enter the max life of player and monster: ', '150');

    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw { message: 'Invalid user input, not a number' }
    }
    return parsedValue;
};

let chosenMaxLife;

try {
    // can only assign values to variables inside try block; cannot create variables here
    chosenMaxLife = getMaxLifeValues();
} catch (error) {
console.log(error);
chosenMaxLife = 100;
alert('you entered something wrong, default value of 100 was used.');

// // re-throwing the error can also be done
// throw error;
} finally {

// handle clean up code here

}



const PLAYER_STRONG_ATTACK_RELOAD = Math.ceil(Math.log10(chosenMaxLife));
let currentMonsterHealth = amplify(chosenMaxLife);
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;
let battleLog = [];
// alert(rules);

function amplify(value) {
    return value * (1 + Math.random());
}


function writeToLog(event) {
    battleLog.push(event);
}

const ATTACK_VALUE = chosenMaxLife ** 0.5;
const MONSTER_ATTACK_VALUE = amplify(amplify(ATTACK_VALUE));

function reloadPage() {
    window.location.reload();
}

// if (chosenMaxLife <= 1 || isNaN(chosenMaxLife)) {
//     alert('You have not entered a valid health value. Enter a number greater than 1');
//     reloadPage();
// }

adjustHealthBars(chosenMaxLife);

function monsterHit() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
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
    monsterHit();
    bonusLifeCheck();
    checkForWin();
    writeToLog({ mode: 'attack', playerHealth: currentPlayerHealth, monsterHealth: currentMonsterHealth });
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
}

function strongAttackHandler() {
    if (strongAttackUsage <= 0) {
        healPlayerHandler();
        attackType(amplify(MONSTER_ATTACK_VALUE));
        strongAttackUsage = PLAYER_STRONG_ATTACK_RELOAD;
        strongAttackBtn.style.fontWeight = 'normal';
        strongAttackBtn.style.background = '#ff0062';
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
        let healValue = currentMonsterHealth ** 0.5;
        if (healValue + currentPlayerHealth > chosenMaxLife) {
            healValue = chosenMaxLife - currentPlayerHealth;
        }
        currentPlayerHealth += healValue;
        increasePlayerHealth(healValue);
    }, 500);
    writeToLog({ mode: 'heal', playerHealth: currentPlayerHealth, monsterHealth: currentMonsterHealth });

}











attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);