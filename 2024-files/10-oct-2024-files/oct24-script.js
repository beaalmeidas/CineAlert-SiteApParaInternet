document.addEventListener('DOMContentLoaded', function() {
    const OctSem1 = [
        { title: "Joker: Folie à Deux", text: "Direção: Todd Phillips" },
        { title: "La nouvelle femme", text: "Direção: Léa Todorov" },
        { title: "Nina et le secret du Hérrisson", text: "Direção: Alain Gagnol, Jean-Loup Felicioli" },
    ];

    const OctSem2 = [
        { title: "Arthur's Whisky", text: "Direção: Stephen Cookson" },
        { title: "Chief of Station", text: "Direção: Jesse V. Johnson" },
        { title: "Irena's Vow", text: "Direção: Louise Archambault" },
        { title: "Robot Selvagem", text: "Direção: Chris Sanders" },
    ];

    const OctSem3 = [
        { title: "Little Emma", text: "Elenco e detalhes ainda não disponíveis" },
        { title: "O Jogo da Rainha", text: "Elenco e detalhes ainda não disponíveis" },
    ];

    const OctSem4 = [
        { title: "Ainda não foram confirmados lançamentos específicos para esta semana.", text: "" },
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
