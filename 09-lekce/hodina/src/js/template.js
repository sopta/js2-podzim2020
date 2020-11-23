export default (post) => {
    let template = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.author}</h6>
                <p class="card-text">${post.content}</p>
                <a href="#" class="btn btn-danger">Smazat</a>
            </div>
        </div>
    `
    return template
}