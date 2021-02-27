const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userID = 'u123';
    const user = { name: 'Max', age: 30 };
    // determines how long a cookie lasts
    document.cookie = `uid=${userID}; max-age=2`;
    document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim().split('=');
    });
    console.log(data);
});

console.log(document.cookie);