const FevSem1 = [
    { title: "Gato Galáctico e o Feitiço do Tempo", text: "Direção: Chris Buck, Fawn Veerasunthorn" }, 
    { title: "Os Colonos", text: "Direção: Benjamin Renner, Guylo Homsy" }, 
    { title: "Pobres Criaturas", text: "Direção: Luc Besson" }, 
    { title: "O Mal Que Nos Habita", text: "Direção: Sofia Coppola" }, 
    { title: "Argylle - O Superespião", text: "Direção: Nanni Moretti" }, 
    { title: "A Viagem de Ernesto e Celestine", text: "Direção: Nanni Moretti" },
    { title: "Peppa Pig - Festa no Cinema", text: "Direção: David Ayer" },
]

const FevSem2 = [ 
    { title: "A Cor Púrpura", text: "Direção: Alexander Payne" }, 
    { title: "Moneyboys", text: "Direção: Samantha Jayne, Arturo Perez Jr." }, 
    { title: "Baghead - A Brux dos Mortos", text: "Direção: Thomas Vincent" },
    { title: "Todo Mundo Ama Jeanne", text: "Direção: Mari Okada" }, 
    { title: "Madame Teia", text: "Direção: David Ayer" },
]

const FevSem3 = [
    { title: "Zona de Interesse", text: "Direção: Todd Haynes" }, 
    { title: "Bob Marley - One Love", text: "Direção: Um Tae-hwa" }, 
    { title: "Horizonte", text: "Direção: Bryce McGuire" },
    { title: "Até o Cair da Noite", text: "Direção: Mauricio Eça" }, 
    { title: "Masha e o Urso", text: "Direção: Pablo Berger" }, 
]


const FevSem4 = [
    { title: "Levante", text: "Direção: Will Gluck" }, 
    { title: "Viver Mal", text: "Direção: Justine Triet" }, 
    { title: "Zona de Risco", text: "Direção: Wagner de Assis" },
    { title: "O Menino e a Garça", text: "Direção: Celine Song" }, 
    { title: "Ferrari", text: "Direção: Leandro Neri" }, 
    { title: "O Jogo da Morte", text: "Direção: Daniel Calparsoro" },
    { title: "Nosso Verão Daria Um Filme", text: "Direção: Siddharth Anand" }, 
    { title: "Cedo Demais", text: "Direção: Charles Stone III" }, 
    { title: "Garra de Ferro", text: "Direção: Rodrigo Sorogoyen" },
    { title: "Demon Slayer: Kimetsu no Yaiba - To The Hashira Training", text: "Direção: Neto Borges, Renato Barbieri" }, 
    { title: "Todos Nós Desconhecidos", text: "Direção: Marcelo Fabri Marão" }, 
    { title: "Nada Será como Antes", text: "Direção: Leonardo Lacca" },
    { title: "Duna: Parte 2", text: "Direção: German Acuña, Cristobal Carvajal" },
    { title: "A Serva", text: "Direção: Neto Borges, Renato Barbieri" }, 
    { title: "Amanhã", text: "Direção: Marcelo Fabri Marão" }, 
    { title: "O Reino Gelado", text: "Direção: Leonardo Lacca" },
    { title: "Dias Perfeitos", text: "Direção: German Acuña, Cristobal Carvajal" },
];


function createCardsFev1(FevSem1) {
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


function createCardsFev2(FevSem2) {
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


function createCardsFev3(FevSem3) {
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


function createCardsFev4(FevSem4) {
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
    const cardContainer = document.getElementById("card-container-jan1");
    cardContainer.innerHTML = "";
    FevSem1.forEach(FevSem1 => {
        const cardHTML = createCardsFev1(FevSem1);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsFev2() {
    const cardContainer = document.getElementById("card-container-fev2");
    cardContainer.innerHTML = "";
    FevSem2.forEach(FevSem2 => {
        const cardHTML = createCardsFev2(FevSem2);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsFev3() {
    const cardContainer = document.getElementById("card-container-fev3");
    cardContainer.innerHTML = "";
    FevSem3.forEach(FevSem3 => {
        const cardHTML = createCardsFev3(FevSem3);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsFev4() {
    const cardContainer = document.getElementById("card-container-fev4");
    cardContainer.innerHTML = "";
    FevSem4.forEach(FevSem4 => {
        const cardHTML = createCardsFev4(FevSem4);
        cardContainer.innerHTML += cardHTML;
    });
}
  

renderCardsFev1();
renderCardsFev2();
renderCardsFev3();
renderCardsFev4();