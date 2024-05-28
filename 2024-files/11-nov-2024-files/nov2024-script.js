const NovSem1 = [
    { title: "Venom 3", text: "Direção: Kelly Marcel" }, 
    
]

const NovSem2 = [ 
    { title: "Hellboy: O Homem Torto", text: "Direção: Brian Taylor" }, 
    { title: "Distante", text: "Direção: Josh Gordon, Will Speck." }, 
    { title: "C.I.C - Central de Inteligência Cearense", text: "Direção: Halder Gomes" },
    
]

const NovSem3 = [
    { title: "Gladiador 2", text: "Direção: Ridley Scott" }, 
    
]


const NovSem4 = [
    { title: "Wicked: Parte 1", text: "Direção: John M. Chu" }, 
    { title: "Moana 2", text: "Direção: Dave Derrick Jr." }, 
    
];


function createCardsNov1(NovSem1) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${NovSem1.title}</h5>
                    <p class="card-text">${NovSem1.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsNov2(NovSem2) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${NovSem2.title}</h5>
                    <p class="card-text">${NovSem2.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsNov3(NovSem3) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${NovSem3.title}</h5>
                    <p class="card-text">$NovSem3.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsNov4(NovSem4) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${NovSem4.title}</h5>
                    <p class="card-text">${NovSem4.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function renderCardsNov1() {
    const cardContainer = document.getElementById("card-container-Nov1");
    cardContainer.innerHTML = "";
    NovSem1.forEach(NovSem1 => {
        const cardHTML = createCardsNov1(NovSem1);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsNov2() {
    const cardContainer = document.getElementById("card-container-Nov2");
    cardContainer.innerHTML = "";
    NovSem2.forEach(NovSem2 => {
        const cardHTML = createCardsNov2(NovSem2);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsNov3() {
    const cardContainer = document.getElementById("card-container-nov3");
    cardContainer.innerHTML = "";
    NovSem3.forEach(NovSem3 => {
        const cardHTML = createCardsNov3(NovSem3);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsNov4() {
    const cardContainer = document.getElementById("card-container-nov4");
    cardContainer.innerHTML = "";
    NovSem4.forEach(NovSem4 => {
        const cardHTML = createCardsNov4(NovSem4);
        cardContainer.innerHTML += cardHTML;
    });
}


renderCardsNov1();
renderCardsNov2();
renderCardsNov3();
renderCardsNov4();