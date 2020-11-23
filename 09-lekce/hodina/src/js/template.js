export default (post) => {
    let template = `
        <div class="col-md-3 mt-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${post.author}</h6>
                    <p class="card-text">${post.content}</p>
                    <a href="javascript:;" data-id="${post.id}" class="btn btn-danger">Smazat</a>
                </div>
            </div>
        </div>
    `
    return template
}