const moviesURL = "https://successful-eight-stew.glitch.me/movies";


$(window).on("load", () => {
    $(".loader").fadeOut("slow");
})

function getMovies() {
    fetch(moviesURL).then(resp => resp.json()).then(data => {
            const movies = document.getElementById('i');
            // console.log(data)
            let html = "";
            html += '<div class="d-flex justify-content-center mt-5" id ="contain">'
            for (let i = 0; i < data.length; i++) {
                let title = data[i].title;
                let year = data[i].year;
                let rating = data[i].rating;
                let actors = data[i].actors;
                let image = data[i].poster;
                let director = data[i].director;
                let plot = data[i].plot;
                let id = data[i].id;
                movies.innerHTML = html +=

                    `<div className="container-fluid">
                    <section className="mx-auto my-5" style="max-width: 23rem;">
                        <div className="card" class="mx-5">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src=${image}
                                     className="img-fluid"/>
                                <a href="#!">
                                    <div className="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold"><a>${title}</a></h5>
                                <ul className="list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <p className="text-muted">${rating} (413)</p>
                                    </li>
                                </ul>
                                <p className="mb-2">${actors}</p>
                                <p className="mb-2">${director}</p>
                                <p className="card-text">
                                    ${plot}
                                </p>
                                <hr className="my-4"/>
                                <p className="lead"><strong>${year}</strong></p>
                                <form class="">
                                    <input class="title-edit" type="text" placeholder="Edit movies">
                                    <input class="rating-edit" type="text" placeholder="Edit rating">
                                    <button data-id=${id} class='editBtn'>Output list characters</button>
                                </form>
                                <button class="deleteBtn bg-danger" data-id =${id}>Delete Button</button>
                            </div>
                        </div>

                    </section>
                </div>`

            }
            return html
        }
    ).then(data => {

        $('.editBtn').on('click', function (e) {
                e.preventDefault();
                console.log(e.target.previousElementSibling.value)
                let editTheTitle = document.getElementsByClassName('title-edit');
                for (let i = 0; i < editTheTitle.length; i++) {
                    let value = e.target.previousElementSibling.value;
                    // let ratingValue = e.target
                    // console.log(value)
                    let modification = {
                        title: value
                        // rating:
                    }
                    const putOptions = {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(modification)
                    }
                    fetch(moviesURL + '/' + e.target.dataset.id, putOptions).then(getMovies);
                }
            }
        )

    }).then(data => {
        $('.deleteBtn').on('click', function (e) {
                e.preventDefault();
                let erase = document.getElementsByClassName('deleteBtn');
                for(let i = 0; i <= erase.length; i++){
                    let eraseTheTitle = e.target.parentElement;
                    console.log(eraseTheTitle)
                let deleteOptions = {
                    method: 'DELETE', headers: {
                        'content-type': 'application/json'
                    }
                }
                fetch(moviesURL + "/" + e.target.dataset.id, deleteOptions).then(getMovies);
                }
            }
        )

    })
}

let btn = document.getElementById('title');
let addItem = document.getElementById('characters');
let div = document.getElementById('characters-list');
let ratings = document.getElementById('rating')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let value = addItem.value;
    console.log(value)
    const movieToPost = {
        title: value,
        rating: ratings.value
    }
    // console.log(movieToPost)
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieToPost)
    }
    fetch(moviesURL, postOptions).then(getMovies)
})

getMovies();