const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');
const userId = 'u123';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Strength training', 'Coding']
};

// LOCAL STORAGE: NOT CLEARED UNTIL USER CLEARS IT OR THE BROWSER CLEARS IT

// SESSION STORAGE: PRESENT UNTIL THE PAGE IS OPEN IN A TAB; EVEN IF THE BROWSER IS RESTARTED WITHOUT CLOSING THE TAB
// THE SESSION STORAGE PERSISTS; ONLY IF THE TAB IS CLOSED THE STORAGE IS CLEARED

// using local storage and session storage
storeBtn.addEventListener('click', () => {
    sessionStorage.setItem(key = 'uid', value = userId);
    localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    if (extractedId) {
        console.log(`Got the id - ${extractedId}`);
        console.log('User details: ');
        console.log(extractedUser);
    } else {
        console.log('Could not find id.');
    }
});