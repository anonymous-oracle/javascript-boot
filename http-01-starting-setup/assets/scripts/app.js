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
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data = null) {
    // PROMISIFYING THE HTTP REQUEST METHOD 
    // const promise = new Promise((resolve, reject) => {
        // const xhr = new XMLHttpRequest();
        // // https://jsonplaceholder.typicode.com/posts
        // xhr.open(method, url);

        // xhr.responseType = 'json';

        // // this error handler kicks in only for network related errors and descrepancies 
        // xhr.onerror = function () {
        //     console.log(xhr.responseType);
        //     console.log(xhr.status);
        // }

        // xhr.onload = function () {
        //     if (xhr.status >= 200 && xhr.status < 300) {
        //         resolve(xhr.response);
        //     }
        //     // onload is handled only for above status codes; for network related errors, .onerror is used
        //     else {
        //         reject(new Error('Something went wrong over the network'));
        //     }
        //     // const listOfPosts = JSON.parse(xhr.response);
        // };

        // xhr.send(JSON.stringify(data));

        // ==========================================================================

        // fetch returns a stream of data; so it does not return everything together
        // in order to get everything at once we use .then()
        // return fetch(JSON_PLACEHOLDER, {
        //     method: method,
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type':'application/json'
        //     }
        // }).then(response => {
        //     // this will give out the entire data instead of a stream
        //     return response.json();
        // }); // fetch() uses promise on it's own

        // ==========================================================================

        return fetch(JSON_PLACEHOLDER).then(response => {
            // this will give out the entire data instead of a stream
            return response.json();
        }); // fetch() uses promise on it's own

        // ==========================================================================





        // });
    // });
    // return promise;
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
    // try {
    const responseData = await sendHttpRequest('GET', JSON_PLACEHOLDER);
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
    }
    // } catch (error) {
    //     alert(error.message)
    // }

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

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
    event.preventDefault(); // browser does not submit the form
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
});

createPost('DUMMY', 'A dummy post!');

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postID = event.target.closest('li').id;
        sendHttpRequest('DELETE', `${JSON_PLACEHOLDER}/${postID}`);
        // console.log('deleted');
    }
});
