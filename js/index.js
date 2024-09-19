// javaScript for index HTML 
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
    // console.log(term)
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';


    // search
    if (term) {
        uri += `&q=${term}`;
    }
    const res = await fetch(uri);
    // console.log(posts)
    const posts = await res.json()


    console.log(posts)
    let template = '';
    posts.forEach(post => {
        template += `
        <div class='post'>
        <h2>${post.title}</h2>
        <p><small>${post.likes} Likes</small></p>
        <p> ${post.body.slice(0, 200)} </p>
        <a href="/details.html?id=${post.id}"> Read more... </a>
       
        </div>
        `
        container.innerHTML = template;
    })
}
// search in json
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(searchForm.term.value.trim().replace(/\s/g, '').toLowerCase())
    renderPosts(searchForm.term.value.trim())
})
window.addEventListener("DOMContentLoaded", () => renderPosts())