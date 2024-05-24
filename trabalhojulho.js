document.addEventListener('DOMContentLoaded', function() {

    const julSem1 = [
        { title: "Tuesday – O Último Abraço ", text: " Elenco: Lola Petticrew, Julia Louis-Dreyfus, Arinzé Kene." }, 
        { title: "A Grande Fuga ", text: "Direção: Oliver Parker - Elenco: Michael Caine, Glenda Jackson, Danielle Vitalis." }, 
    ]
    
        
    const julSem2 = [ 
        { title: "Infestação ", text: "Direção: Sébastien Vaniček - Elenco: Théo Christine, Sofia Lesaffre, Jérôme Niel." }, 
        { title: "Venom: The Last Dance ", text: "Direção: Kelly Marcel - Elenco: Tom Hardy, Juno Temple, Chiwetel Ejiofor." }, 
        { title: "Como Vender a Lua  ", text: "Direção: Greg Berlanti - Elenco: Scarlett Johansson, Channing Tatum, Nick Dillenburg." },
    ]
    
    
    const julSem3 = [
        { title: "Twisters", text: "Direção: Lee Isaac Chung - Elenco: Daisy Edgar-Jones, Glen Powell, Anthony Ramos." }, 
        { title: "Os Inseparáveis ", text: "Direção: Jérémie Degruson - Elenco: Eric Judor, Jean-Pascal Zadi, Ana Girardot." }, 
    ]
        
    const julSem4 = [
        { title: "Deadpool & Wolverine ", text: "Direção: Shawn Levy - Elenco: Ryan Reynolds, Hugh Jackman, Emma Corrin." }, 
        { title: "Cold Storage", text: "Direção: Jonny Campbell - Elenco: Joe Keery, Liam Neeson, Vanessa Redgrave." }, 

    ];
    
    function createCardsjul1(julSem1) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${julSem1.title}</h5>
                        <p class="card-text">${julSem1.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    function createCardsjul2(julSem2) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${julSem2.title}</h5>
                        <p class="card-text">${julSem2.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    function createCardsjul3(julSem3) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${julSem3.title}</h5>
                        <p class="card-text">${julSem3.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    function createCardsjul4(julSem4) {
        return `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${julSem4.title}</h5>
                        <p class="card-text">${julSem4.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    function renderCardsjul1() {
        const cardContainer = document.getElementById("card-container-jul1");
        cardContainer.innerHTML = "";
        julSem1.forEach(julSem1 => {
            const cardHTML = createCardsjul1(julSem1);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    function renderCardsjul2() {
        const cardContainer = document.getElementById("card-container-jul2");
        cardContainer.innerHTML = "";
        julSem2.forEach(julSem2 => {
            const cardHTML = createCardsjul2(julSem2);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    function renderCardsjul3() {
        const cardContainer = document.getElementById("card-container-jul3");
        cardContainer.innerHTML = "";
        julSem3.forEach(julSem3 => {
            const cardHTML = createCardsjul3(julSem3);
            cardContainer.innerHTML += cardHTML;
        });
    }
    
    function renderCardsjul4() {
        const cardContainer = document.getElementById("card-container-jul4");
        cardContainer.innerHTML = "";
        julSem4.forEach(julSem4 => {
            const cardHTML = createCardsjul4(julSem4);
            cardContainer.innerHTML += cardHTML;
        });
    }
    

    
    
    renderCardsmai1();
    renderCardsmai2();
    renderCardsmai3();
    renderCardsmai4();
   
    });