document.addEventListener('DOMContentLoaded', function() {


    const MarSem1 = [
        { title: "Os Farofeiros 2", text: "Direção: Roberto Santucci" }, 
        { title: "20 Dias em Mauripol", text: "Direção: Roberto Santucci" }, 
        { title: "Desespero profundo", text: "Direção: Claudio Fäh" }, 
        { title: "Imaginário: Brinquedo Diabólico", text: "Direção: Jeff Wadlow" }, 
        { title: "Apaixonada", text: "Direção: Natalia Warth" }, 
        { title: "As 4 Filhas de Olfa", text: "Direção: Kaouther Ben Hania" },
        { title: "O Último Animal", text: "Direção: DLeonel Vieira" },
        { title: "Ervas Secas", text: "Direção: Nuri Bilge Ceylan" },
        { title: "Pacto Com o Demônio - Não Diga Que Ele Não Te Avisou", text: "Direção: Alex Herron" },
    ]
    
    const MarSem2 = [ 
        { title: "Uma Vida - A História de Nicholas Winton", text: "Direção: James Hawes" }, 
        { title: "Lilith", text: "Direção: Bruno Safadi" }, 
        { title: "O Primeiro Dia da Minha Vida", text: "Direção: Paolo Genovese" },
        { title: "O Livro da Discórdia", text: "Direção: Baya Kasmi" }, 
        { title: "Por Trás da Verdade", text: "Direção: Miles Joris-Peyrafitte" },
    ]

    const MarSem3 = [
        { title: "A Teia", text: "Direção: Adam Cooper" }, 
        { title: "The Chosen - Os Escolhidos", text: "Direção: Dalla Jenkins" }, 
        { title: "Kung Fu Panda 4", text: "Direção: Mike Mitchell" },
        { title: "Saudosa Maloca", text: "Direção: Pedro Soffer Serrano" }, 
        { title: "Tudo ou Nada", text: "Direção: Delphine Deloget" },
    ]
    
    const MarSem4 = [
        { title: "Godzilla e Kong - O Novo Império ", text: "Direção: Adam Wingard" }, 
        { title: "O Homem dos Sonhos", text: "Direção: Kristoffer Borgli" }, 
        { title: "A Paixão Segundo G.H", text: "Direção: Luiz Fernando Carvalho" },
        { title: "Instinto Materno", text: "Direção: Benoît Delhomme" }, 
        { title: "Sem Coração", text: "Direção: Nara Normande, Tião" },
        { title: "Alice no País das Trevas", text: "Direção: Richard John Taylor" },
        { title: "Dois É Demais em Orlando", text: "Direção: Rodrigo Van Der Put" }, 
        { title: "Um Dia Nossos Segredos Serão Revelados", text: "Direção: Emily Atef" },
        { title: "Musik", text: "Direção: Rudy Mancuso" }, 
        { title: "Jango no Exílio", text: "Direção: Pedro Isaias Lucas" },
    ];
    
    
    function createCardsMarco1(MarSem1) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${MarSem1.title}</h5>
                        <p class="card-text">${MarSem1.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    
    function createCardsMarco2(MarSem2) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${MarSem2.title}</h5>
                        <p class="card-text">${MarSem2.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    
    function createCardsMarco3(MarSem3) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${MarSem3.title}</h5>
                        <p class="card-text">${MarSem3.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    
    function createCardsMarco4(MarSem4) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${MarSem4.title}</h5>
                        <p class="card-text">${MarSem4.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
      
    
    function renderCardsMar1() {
        const cardContainer = document.getElementById("card-container-mar1");
        cardContainer.innerHTML = "";
        MarSem1.forEach(MarSem1 => {
            const cardHTML = createCardsMarco1(MarSem1);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    
    function renderCardsMar2() {
        const cardContainer = document.getElementById("card-container-mar2");
        cardContainer.innerHTML = "";
        MarSem2.forEach(MarSem2 => {
            const cardHTML = createCardsMarco2(MarSem2);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    
    function renderCardsMar3() {
        const cardContainer = document.getElementById("card-container-mar3");
        cardContainer.innerHTML = "";
        MarSem3.forEach(MarSem3 => {
            const cardHTML = createCardsMarco3(MarSem3);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    
    function renderCardsMar4() {
        const cardContainer = document.getElementById("card-container-mar4");
        cardContainer.innerHTML = "";
        MarSem4.forEach(MarSem4 => {
            const cardHTML = createCardsMarco4(MarSem4);
            cardContainer.innerHTML += cardHTML;
        });
    }
      
    
    renderCardsMar1();
    renderCardsMar2();
    renderCardsMar3();
    renderCardsMar4();
    });