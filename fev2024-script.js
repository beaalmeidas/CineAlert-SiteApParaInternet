document.addEventListener('DOMContentLoaded', function() {


const FevSem1 = [
    { title: "Gato Galáctico e o Feitiço do Tempo", text: "Direção: Rodrigo Zanforlin" }, 
    { title: "Pobres Criaturas", text: "Direção: Yorgos Lanthimos" }, 
    { title: "O Mal Que Nos Habita", text: "Direção: Demián Rugna" }, 
    { title: "Argylle - O Superespião", text: "Direção: Matthew Vaughn" }, 
]

const FevSem2 = [ 
    { title: "A Cor Púrpura", text: "Direção: Blitz the Ambassador" }, 
    { title: "A Viagem de Ernesto e Celine", text: "Direção: Julien Chheng, Jean Christophe Roger" }, 
    { title: "Moneyboys", text: "Direção: C.B. Yi" }, 
    { title: "Baghead - A Bruxa dos Mortos", text: "Direção: Alberto Corredor" },
    { title: "Madame Teia", text: "Direção: S. J. Clarkson" },
    { title: "Bob Marley - One Love", text: "Direção: Reinaldo Marcus Green" },
]

const FevSem3 = [
    { title: "Zona de Interesse", text: "Direção: Jonathan Glazer" },  
    { title: "Até o Cair da Noite", text: "Direção: Christoph Hochhäusler" }, 
    { title: "Masha e o Urso", text: "Direção: Oleg Kuzovkov" }, 
]


const FevSem4 = [
    { title: "Viver Mal", text: "Direção: João Canijo" }, 
    { title: "Zona de Risco", text: "Direção: William Eubank" },
    { title: "O Menino e a Garça", text: "Direção: Hayao Miyazaki" }, 
    { title: "Ferrari", text: "Direção: Michael Mann" }, 
    { title: "O Jogo da Morte", text: "Direção: Alaa Morsy" },
    { title: "Cedo Demais", text: "Direção: José Lavigne" }, 
    { title: "Garra de Ferro", text: "Direção: Sean Durkin" },
    { title: "Demon Slayer: Kimetsu no Yaiba - To The Hashira Training", text: "Direção: Haruo Sotozaki" }, 
    { title: "Todos Nós Desconhecidos", text: "Direção: Andrew Haigh" },
    { title: "Duna: Parte 2", text: "Direção: Denis Villeneuve" },
    { title: "O Reino Gelado", text: "Direção: Vladlen Barbe, Maksim Sveshnikov" },
    { title: "Dias Perfeitos", text: "Direção: Wim Wenders" },
];


function createCardsFevereiro1(FevSem1) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${FevSem1.title}</h5>
                    <p class="card-text">${FevSem1.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsFevereiro2(FevSem2) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${FevSem2.title}</h5>
                    <p class="card-text">${FevSem2.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsFevereiro3(FevSem3) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${FevSem3.title}</h5>
                    <p class="card-text">${FevSem3.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsFevereiro4(FevSem4) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${FevSem4.title}</h5>
                    <p class="card-text">${FevSem4.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}
  

function renderCardsFev1() {
    const cardContainer = document.getElementById("card-container-fev1");
    cardContainer.innerHTML = "";
    FevSem1.forEach(FevSem1 => {
        const cardHTML = createCardsFevereiro1(FevSem1);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsFev2() {
    const cardContainer = document.getElementById("card-container-fev2");
    cardContainer.innerHTML = "";
    FevSem2.forEach(FevSem2 => {
        const cardHTML = createCardsFevereiro2(FevSem2);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsFev3() {
    const cardContainer = document.getElementById("card-container-fev3");
    cardContainer.innerHTML = "";
    FevSem3.forEach(FevSem3 => {
        const cardHTML = createCardsFevereiro3(FevSem3);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsFev4() {
    const cardContainer = document.getElementById("card-container-fev4");
    cardContainer.innerHTML = "";
    FevSem4.forEach(FevSem4 => {
        const cardHTML = createCardsFevereiro4(FevSem4);
        cardContainer.innerHTML += cardHTML;
    });
}
  

renderCardsFev1();
renderCardsFev2();
renderCardsFev3();
renderCardsFev4();
});
