const DecSem1 = [
    { title: "Kraven: O Caçador", text: "Direção: J.C. Chandor" }, 
    { title: "O Senhor dos Anéis: A Batalha de Rohirrims", text: "Direção:  Kenji Kamiyama" }, 
    { title: "Karatê Kid", text: "Direção: Jonathan Entwistle" }, 
]
const DecSem2 = [ 
    { title: "Mufasa: O Rei Leão", text: "Direção: Barry Jenkins" }, 
]

const DecSem3 = [
    { title: "Até Que a Sorte Nos Separe 4", text: "Direção: Roberto Santucci" }, 
    { title: "O Auto da Compadecida 2", text: "Direção: Guel Arraes, Flávia Lacerda" }, 
]


function createCardsDec1(DecSem1) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${DecSem1.title}</h5>
                    <p class="card-text">${DecSem1.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsDec2(DecSem2) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${DecSem2.title}</h5>
                    <p class="card-text">${DecSem2.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsDec3(DecSem3) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${DecSem3.title}</h5>
                    <p class="card-text">${DecSem3.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function renderCardsDec1() {
    const cardContainer = document.getElementById("card-container-dec1");
    cardContainer.innerHTML = "";
    DecSem1.forEach(DecSem1 => {
        const cardHTML = createCardsDec1(DecSem1);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsDec2() {
    const cardContainer = document.getElementById("card-container-dec2");
    cardContainer.innerHTML = "";
    DecSem2.forEach(decSem2 => {
        const cardHTML = createCardsDec2(DecSem2);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsDec3() {
    const cardContainer = document.getElementById("card-container-dec3");
    cardContainer.innerHTML = "";
    DecSem3.forEach(DecSem3 => {
        const cardHTML = createCardsDec3(DecSem3);
        cardContainer.innerHTML += cardHTML;
    });
}


renderCardsDec1();
renderCardsDec2();
renderCardsDec3();