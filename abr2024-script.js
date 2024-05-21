document.addEventListener('DOMContentLoaded', function() {


    const AbrSem1 = [
        { title: "A Primeira Profecia", text: "Direção: Arkasha Stevenson" }, 
        { title: "Uma Prova de Coragem", text: "Direção: Roberto Gervitz" }, 
        { title: "Domingo à Noite ", text: "Direção: André Bushatsky" }, 
        { title: "Uma Família Feliz ", text: "Direção: José Eduardo Belmonte" }, 
        { title: "A Matéria Noturna ", text: "Direção: Bernard Lessa" }, 
        { title: "Até o Cair da Noite", text: "Direção: Christoph Hochhäusler" },
    ]
    
    const AbrSem2 = [ 
        { title: "Depois da Morte", text: "Direção: Stephen Gray, Chris Radtke" }, 
        { title: "Ghostbusters: Apocalipse de Gelo", text: "Direção: Gil Kenan" }, 
        { title: "Um Gato de Sorte ", text: "Direção: Chris Jenkins" },
        { title: "A Contadora de Filmes ", text: "Direção: Lone Scherfig" }, 
        { title: "Cinema é Uma Droga Pesada ", text: "Direção: Cédric Kahn" },
        { title: "Evidências do Amor  ", text: "Direção: Pedro Antônio" },
        { title: "20.000 Espécies de Abelhas", text: "Direção: Estibaliz Urresola Solaguren" }, 
        { title: "As Linhas da Minha Mão ", text: "Direção: João Dumans" },
        { title: "O Sabor da Vida", text: "Direção: Tran Anh Hung" },
        { title: "Pearl Jam: Dark Matter", text: "Direção: Todd Haynes" },
    ]

    const AbrSem3 = [
        { title: "Guerra Civil", text: "Direção: Um Tae-hwa" }, 
        { title: "Jorge da Capadócia", text: "Direção: Bryce McGuire" },
        { title: "Head Space", text: "Direção: Mauricio Eça" }, 
        { title: "Abigail", text: "Direção: Pablo Berger" },
        { title: "Vidente Por Acidente", text: "Direção: Mauricio Eça" }, 
        { title: "E a Festa Continua!", text: "Direção: Pablo Berger" },
    ]
    
    const AbrSem4 = [
        { title: "Aespa - World Tour in Cinemas", text: "Direção: Todd Haynes" }, 
        { title: "Ursinho Pooh - Sangue e Mel 2", text: "Direção: Um Tae-hwa" }, 
        { title: "Spy x Family - Código Branco", text: "Direção: Bryce McGuire" },
        { title: "Rivais", text: "Direção: Mauricio Eça" }, 
        { title: "Porto - Uma História de Amor", text: "Direção: Pablo Berger" },
        { title: "Dorival Caymmi - Um Homem de Afetos", text: "Direção: Bryce McGuire" },
        { title: "Contra o Mundo", text: "Direção: Mauricio Eça" }, 
        { title: "Back to Black", text: "Direção: Pablo Berger" },
        { title: "Aumenta Que É Rock'N'Roll", text: "Direção: Mauricio Eça" }, 
        { title: "A Natureza do Amor", text: "Direção: Pablo Berger" },
    ];
    
    
    function createCardsAbril1(AbrSem1) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${AbrSem1.title}</h5>
                        <p class="card-text">${AbrSem1.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    
    function createCardsAbril2(AbrSem2) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${AbrSem2.title}</h5>
                        <p class="card-text">${AbrSem2.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    
    function createCardsAbril3(AbrSem3) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${AbrSem3.title}</h5>
                        <p class="card-text">${AbrSem3.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    
    function createCardsAbril4(AbrSem4) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${AbrSem4.title}</h5>
                        <p class="card-text">${AbrSem4.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
      
    
    function renderCardsAbr1() {
        const cardContainer = document.getElementById("card-container-abr1");
        cardContainer.innerHTML = "";
        AbrSem1.forEach(AbrSem1 => {
            const cardHTML = createCardsAbril1(AbrSem1);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    
    function renderCardsAbr2() {
        const cardContainer = document.getElementById("card-container-abr2");
        cardContainer.innerHTML = "";
        AbrSem2.forEach(AbrSem2 => {
            const cardHTML = createCardsAbril2(AbrSem2);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    
    function renderCardsAbr3() {
        const cardContainer = document.getElementById("card-container-abr3");
        cardContainer.innerHTML = "";
        AbrSem3.forEach(AbrSem3 => {
            const cardHTML = createCardsAbril3(AbrSem3);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    
    function renderCardsAbr4() {
        const cardContainer = document.getElementById("card-container-abr4");
        cardContainer.innerHTML = "";
        AbrSem4.forEach(AbrSem4 => {
            const cardHTML = createCardsAbril4(AbrSem4);
            cardContainer.innerHTML += cardHTML;
        });
    }
      
    
    renderCardsAbr1();
    renderCardsAbr2();
    renderCardsAbr3();
    renderCardsAbr4();
    });