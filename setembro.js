document.addEventListener('DOMContentLoaded', function() {
    const SepSem1 = [
        { title: "O Protetor: Capítulo Final", text: "Direção: Antoine Fuqua" },
        { title: "Ninguém é de Ninguém", text: "Direção: Wagner de Assis" },
        { title: "Depois do Casamento", text: "Direção: Bart Freundlich" },
        { title: "Jogos Mortais X", text: "Direção: Kevin Greutert" },
        { title: "Os Mercenários 4", text: "Direção: Scott Waugh" },
    ];

    const SepSem2 = [
        { title: "A Freira 2", text: "Direção: Michael Chaves" },
        { title: "Patrulha Canina: Super Filhotes", text: "Direção: Cal Brunker" },
        { title: "Assassino", text: "Direção: David Fincher" },
        { title: "Os Parças 3", text: "Direção: Marcelo Antunez" },
        { title: "Sobrenatural: A Porta Vermelha", text: "Direção: Patrick Wilson" },
    ];

    const SepSem3 = [
        { title: "Retratos Fantasmas", text: "Direção: Kleber Mendonça Filho" },
        { title: "As Marvels", text: "Direção: Nia DaCosta" },
        { title: "Pânico 6", text: "Direção: Matt Bettinelli-Olpin, Tyler Gillett" },
        { title: "Oppenheimer", text: "Direção: Christopher Nolan" },
        { title: "A Pequena Sereia", text: "Direção: Rob Marshall" },
    ];

    const SepSem4 = [
        { title: "Aquaman e o Reino Perdido", text: "Direção: James Wan" },
        { title: "Duna: Parte Dois", text: "Direção: Denis Villeneuve" },
        { title: "Wonka", text: "Direção: Paul King" },
        { title: "Missão Impossível 7", text: "Direção: Christopher McQuarrie" },
        { title: "Guardians of the Galaxy Vol. 3", text: "Direção: James Gunn" },
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

    function renderCardsSep1() {
        renderCards("card-container-sep1", SepSem1);
    }

    function renderCardsSep2() {
        renderCards("card-container-sep2", SepSem2);
    }

    function renderCardsSep3() {
        renderCards("card-container-sep3", SepSem3);
    }

    function renderCardsSep4() {
        renderCards("card-container-sep4", SepSem4);
    }

    renderCardsSep1();
    renderCardsSep2();
    renderCardsSep3();
    renderCardsSep4();
});
