const moviesURL = "https://yielding-ripe-nephew.glitch.me/movies";


$(window).on("load", () => {
    $(".loader").fadeOut("slow");
})

function getMovies() {
    fetch(moviesURL).then(resp => resp.json()).then(data => {
            const movies = document.getElementById('i');
            console.log(data)
            let html = "";
            html += '<div class="d-flex" id ="contain">'
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
                        <div className="card">
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
                                <form>
                                    <input class="title-edit" type="text" placeholder="Edit Movie">
                                    <button data-id=${id} class='editBtn'>Output list characters</button>
                                </form>

                            </div>
                        </div>

                    </section>
                </div>`

            }
            return html
        }
    ).then(data => {
        // let editBtns = document.getElementsByClassName('editBtn')
        let value = title.value;
        let titleEdit = document.getElementsByClassName('title-edit')
        console.log(titleEdit.value);
        let editBtns = $('.editBtn').on('click', function (e) {
                e.preventDefault();
                console.log(e.target.dataset.id);
                console.log(value)
                // let modification = {
                //     title: titleEdit.value
                // }
                //
                // const putOptions = {
                //     method: 'PUT',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(modification)
                // }
                //
                // fetch(moviesURL + '/' + e.target.dataset.id, putOptions).then(getMovies);

            }
        )

    })
    //Foreach edit button node add an event listener
    //the event listener should find the parent element of the button that was clicked and then console.log the value of the text input that is a child of the parent form
    //refactor the event listener to send the api request


}

// function getId(id){
//     let modification = {
//     title: titleEdit.value
// }
//
// const putOptions = {
//     method:'PUT',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify(modification)
// }
//
// fetch(moviesURL + '/' + id, putOptions).then(getMovies);
//
// }

let btn = document.getElementById('title');
let addItem = document.getElementById('characters');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let value = addItem.value;
    console.log(value)
    const movieToPost = {
        title: value,
        rating: 5
    }
    console.log(movieToPost)
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieToPost)
    }
    fetch(moviesURL, postOptions).then(getMovies)
})

getMovies()


// fetch(moviesURL, postOptions).then(getMovies)


// let modification = {
//     title:
// }
//
// const putOptions = {
//     method:'patch',
//     headers: {
//         'Content-Type' : 'application/json'
//     }
//     body: JSON.stringify(modification)
// }
//
// fetch(moviesURL,id, putOptions).htne(getMovies);


// let deleteOptions = {
//     method: 'DELETE', headers: {
//         'content-type': 'application/json'
//     }
// }


// fetch(moviesURL +"/258", deleteOptions).then(getMovies);
// fetch(moviesURL +"/11", deleteOptions).then(getMovies)
// fetch(moviesURL +"/12", deleteOptions).then(getMovies)
// fetch(moviesURL +"/13", deleteOptions).then(getMovies)
// fetch(moviesURL +"/14", deleteOptions).then(getMovies)
// fetch(moviesURL +"/15", deleteOptions).then(getMovies)
// fetch(moviesURL +"/16", deleteOptions).then(getMovies)
// fetch(moviesURL +"/3", deleteOptions).then(getMovies)

// console.log(getMovies())


console.log(moviesURL);
