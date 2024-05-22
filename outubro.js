document.addEventListener('DOMContentLoaded', function() {
    const OctSem1 = [
        { title: "Halloween Ends", text: "Direção: David Gordon Green" },
        { title: "Black Panther: Wakanda Forever", text: "Direção: Ryan Coogler" },
        { title: "Aquaman and the Lost Kingdom", text: "Direção: James Wan" },
        { title: "Thor: Love and Thunder", text: "Direção: Taika Waititi" },
        { title: "Spider-Man: Across the Spider-Verse (Part One)", text: "Direção: Joaquim Dos Santos, Kemp Powers, Justin K. Thompson" },
    ];

    const OctSem2 = [
        { title: "Doctor Strange in the Multiverse of Madness", text: "Direção: Sam Raimi" },
        { title: "Black Widow", text: "Direção: Cate Shortland" },
        { title: "Eternals", text: "Direção: Chloé Zhao" },
        { title: "Shang-Chi and the Legend of the Ten Rings", text: "Direção: Destin Daniel Cretton" },
        { title: "Blade", text: "Direção: Bassam Tariq" },
    ];

    const OctSem3 = [
        { title: "Mission: Impossible 8", text: "Direção: Christopher McQuarrie" },
        { title: "Fantastic Beasts: The Secrets of Dumbledore", text: "Direção: David Yates" },
        { title: "The Flash", text: "Direção: Andy Muschietti" },
        { title: "John Wick: Chapter 5", text: "Direção: Chad Stahelski" },
        { title: "Avatar 3", text: "Direção: James Cameron" },
    ];

    const OctSem4 = [
        { title: "The Marvels", text: "Direção: Nia DaCosta" },
        { title: "Spider-Man: Beyond the Spider-Verse (Part Two)", text: "Direção: Joaquim Dos Santos, Kemp Powers, Justin K. Thompson" },
        { title: "Guardians of the Galaxy Vol. 4", text: "Direção: James Gunn" },
        { title: "A Quiet Place Part III", text: "Direção: Jeff Nichols" },
        { title: "Joker: Folie à Deux", text: "Direção: Todd Phillips" },
    ];

    function createCard(movie) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.text}</p>
                        <a href="#" class="btn btn-primary">Saiba mais</a>
                    </div>
                </div>
            </div>
        `;
    }

    function renderCards(containerId, movies) {
        const cardContainer = document.getElementById(containerId);
        cardContainer.innerHTML = "";
        movies.forEach(movie => {
            cardContainer.innerHTML += createCard(movie);
        });
    }

    function renderCardsOct1() {
        renderCards("card-container-oct1", OctSem1);
    }

    function renderCardsOct2() {
        renderCards("card-container-oct2", OctSem2);
    }

    function renderCardsOct3() {
        renderCards("card-container-oct3", OctSem3);
    }

    function renderCardsOct4() {
        renderCards("card-container-oct4", OctSem4);
    }

    renderCardsOct1();
    renderCardsOct2();
    renderCardsOct3();
    renderCardsOct4();
});
