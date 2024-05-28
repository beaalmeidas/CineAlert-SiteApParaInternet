document.addEventListener('DOMContentLoaded', function() {
    const SepSem1 = [
        { title: "Os Fantasmas se Divertem 2", text: "Direção: Tim Burton" }
    ];

    const SepSem2 = [
        { title: "A Ordem do Tempo", text: "Direção: Liliana Cavani" },
        { title: "Avassaladoras 2.0", text: "Direção: Mara Mourão" }
    ];

    const SepSem3 = [
        { title: "Bandida – A Número Um", text: "Direção: Marcos Baldini" },
        { title: "Rapto", text: "Direção: Marco Bellocchio" }
    ];

    const SepSem4 = [
        { title: "A Semente do Mal", text: "Direção: David Chuang" },
        { title: "Uma Vida de Esperança", text: "Direção: Frank Darabont" }
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

    renderCards("card-container-sep1", SepSem1);
    renderCards("card-container-sep2", SepSem2);
    renderCards("card-container-sep3", SepSem3);
    renderCards("card-container-sep4", SepSem4);
});
