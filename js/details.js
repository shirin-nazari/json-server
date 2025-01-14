// javaScript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete')

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();
    // console.log(post)
    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
    container.innerHTML = template
}
deleteBtn.addEventListener('click', async (e) => {

    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: "DELETE"
    })
    // go to home page
    window.location.replace('/index.html')
})
window.addEventListener('DOMContentLoaded', () => renderDetails())