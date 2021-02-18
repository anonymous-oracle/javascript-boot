// const listElement = document.querySelector('.posts');
// const postTemplate = document.getElementById('new-post');

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xhr.responseType = 'json'; // setting this will automatically parse the response JSON into an array 

// xhr.onload = function () {
//     // JSON.parse parses the json object into a javascript array
//     // const listOfPosts = JSON.parse(xhr.response);
//     const listOfPosts = xhr.response;
//     // console.log(listOfPosts);

//     for (const post of listOfPosts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector('h2').textContent = post.title.toUpperCase();
//         postEl.querySelector('p').textContent = post.body;
//         listElement.append(postEl);
//     }
// };
// xhr.send();

const JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts';
const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url, data=null) {
    // PROMISIFYING THE HTTP REQUEST METHOD 
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // https://jsonplaceholder.typicode.com/posts
        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = function () {
            resolve(xhr.response);
            // const listOfPosts = JSON.parse(xhr.response);
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

// function fetchPosts() {
//     sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(responseData => {
//         const listOfPosts = responseData;
//         for (const post of listOfPosts) {
//             const postEl = document.importNode(postTemplate.content, true);
//             postEl.querySelector('h2').textContent = post.title.toUpperCase();
//             postEl.querySelector('p').textContent = post.body;
//             listElement.append(postEl);
//         }
//     });
// }

async function fetchPosts() {
    const responseData = await sendHttpRequest('GET', JSON_PLACEHOLDER);
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
    }

};


async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    sendHttpRequest('POST', JSON_PLACEHOLDER, post);

}

fetchPosts();
createPost('DUMMY', 'A dummy post!');