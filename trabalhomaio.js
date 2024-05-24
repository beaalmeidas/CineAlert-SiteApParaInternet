document.addEventListener('DOMContentLoaded', function() {

const maiSem1 = [
    { title: "O Dublê", text: " Direção: David Leitch - Elenco: Ryan Gosling, Emily Blunt, Aaron Taylor-Johnson." }, 
    { title: "Férias Trocadas", text: "Direção: Bruno Barreto - Elenco: Edmilson Filho, Klara Castanho, Aline Campos." }, 
    { title: "A Teia", text: "Direção: Adam Cooper - Elenco: Russell Crowe, Karen Gillan, Marton Csokas." }, 
    { title: "Guadalupe - Mãe da Humanidade ", text: "Direção: Andrés Garrigó, Pablo Moreno - Elenco: Mario Alberto, Karyme Lozano, Alejandro Márquez." }, 
    { title: "Love Lies Bleeding - O Amor Sangra ", text: "Direção: Rose Glass - Elenco: Kristen Stewart, Katy O'Brian, Anna Baryshnikov." }, 
    { title: "Transe", text: "Direção: Carolina Jabor, Anne Pinheiro Guimarães - Elenco: Luisa Arraes, Johnny Massaro, Ravel Andrade."},
    { title: "Verissimo", text: " Direção: Angelo Defanti - Elenco: Luís Fernando Veríssimo, Lúcia Helena, Erico Verissimo."},
    { title: "Conduzindo Madeleine", text: "Direção: Christian Carion - Elenco: Line Renaud, Dany Boon, Alice Isaaz."},
    { title: "Clube Zero", text: "Direção: Jessica Hausner - Elenco: Mia Wasikowska, Sidse Babett Knudsen, Amir El-Masry."},
    { title: "Here ", text: " Direção: Bas Devos - Elenco: Stefan Gota, Liyo Gong, Teodor Corban." }, 
]

    
const maiSem2 = [ 
    { title: "Planeta dos Macacos: O Reinado", text: "Direção: Wes Ball - Elenco: Owen Teague, Freya Allan, Peter Macon." }, 
    { title: "Vermelho Monet ", text: "Direção: Halder Gomes - Elenco: Maria Fernanda Cândido, Chico Diaz, Samantha Heck Müller." }, 
    { title: "Foram os Sussurros que me Mataram ", text: "Direção: Arthur Tuoto - Elenco: Mel Lisboa, Otávio Linhares, Patrick Sampaio." }, 
    { title: "Diálogos com Ruth de Souza", text: "Direção: Juliana Vicente - Elenco: Ruth de Souza." },
]


const maiSem3 = [
    { title: "Amigos Imaginários", text: "Direção: John Krasinski - Elenco: Cailey Fleming, Ryan Reynolds, John Krasinski." }, 
    { title: "Belo Desastre - O Casamento ", text: "Direção: Roger Kumble - Elenco: Dylan Sprouse, Virginia Gardner, Austin North." }, 
    { title: "Back To Black ", text: "Direção: Sam Taylor-Johnson - Elenco: Marisa Abela, Jack O'Connell, Eddie Marsan." },
    { title: "O Tarô da Morte  ", text: "Direção: Anna Halberg, Spenser Cohen - Elenco: Harriet Slater, Adain Bradley, Avantika Vandanapu." }, 
    { title: "Um Dia Nossos Segredos Serão Revelados ", text: "Direção: Emily Atef - Elenco: Marlene Burow, Felix Kramer, Cedric Eich." }, 
    { title: "A Hora da Estrela", text: "Direção: Suzana Amaral - Elenco: Marcelia Cartaxo, José Dumont, Tamara Taxman." }, 
    { title: "A Estrela Cadente ", text: "Direção: Dominique Abel, Fiona Gordon - Elenco: Fiona Gordon, Dominique Abel, Kaori Ito." }, 
    { title: "Maestro(s)", text: "Direção: Bruno Chiche - Elenco: Yvan Attal, Pierre Arditi, Miou-Miou." }, 
    ]
    
const maiSem4 = [
    { title: "Furiosa: Uma Saga Mad Max ", text: "Direção: George Miller - Elenco: Anya Taylor-Joy, Chris Hemsworth, Tom Burke." }, 
    { title: "Fúria Primitiva ", text: "Direção: Dev Patel - Elenco: Dev Patel, Sikandar Kher, Sharlto Copley." }, 
    { title: "Morando com o Crush ", text: "Direção: Hsu Chien - Elenco: Giulia Benite, Vitor Figueiredo, Marcos Pasquim." },
    { title: "De Repente, Miss! ", text: "Direção: Hsu Chien - Elenco: Fabiana Karla, Giulia Benite, João Baldasserini." }, 
    { title: "The Shift - O Deslocamento", text: "Direção: Brock Heasley - Elenco: Kristoffer Polaha, Neal McDonough, Elizabeth Tabish." }, 
    { title: "Às Vezes Quero Sumir ", text: "Direção: Rachel Lambert - Elenco: Daisy Ridley, Dave Merheje, Parvesh Cheena." },
    { title: "Conto de Fadas ", text: "Direção: Alexandre Sokourov - Elenco: Igor Gromov, Vakhtang Kuchava, Lothar Deeg." },
    { title: "Mundo Novo ", text: "Direção: Álvaro Campos - Elenco: Nino Bastida, Polly Marinho, Tati Vilela." },
    { title: "A Alegria é a Prova dos Nove ", text: "Direção: Helena Ignêz - Elenco: Helena Ignêz, Ney Matogrosso, Thais de Almeida Prado." },
]

const maiSem5 = [
    { title: "Imaculada", text: "Direção: Michael Mohan - Elenco: Sydney Sweeney, Álvaro Morte, Simona Tabasco." }, 
    { title: "Os Estranhos: Capítulo 1 ", text: "Direção: Renny Harlin - Elenco: Madelaine Petsch, Froy Gutierrez, Rachel Shenton." }, 
    { title: "Meu Sangue Ferve Por Você ", text: "Direção: Paulo Machline - Elenco: Filipe Bragança, Giovana Cordeiro, Emanuelle Araújo." },
    { title: "A Filha do Palhaço ", text: "Direção: Pedro Diógenes - Elenco: Jesuíta Barbosa, Mateus Honori, Démick Lopes." }, 
    { title: "Por Trás da Verdade", text: "Direção: Miles Joris-Peyrafitte - Elenco: Jack Reynor, Hilary Swank, Olivia Cooke." }, 
    { title: "A Festa de Léo", text: "Direção: Luciana Bezerra, Gustavo Melo - Elenco: Nego Ney, Cintia Rosa, Jonathan Haagensen." },
    { title: "Toda Noite Estarei Lá ", text: "Direção: Tati Franklin, Suellen Vasconcelos - Elenco: Mel Rosário." }, 
    { title: "Empirion: Uma Aventura com Einstein ", text: "Direção: Michael Ruman - Elenco: Davi Campolongo, Kevin Vechiatto, Lívia Silva." }, 
    { title: "A metade de nós ", text: "Direção: Flávio Botelho - Elenco: Denise Weinberg, Cacá Amaral, Kelner Macêdo" },
    { title: "Terra Revolta  ", text: "Direção: Barbara Goulart, Caio Bortolotti - Elenco: Almino Afonso, Denise Goulart, Henrique João Pinheiro." },
    { title: "Crônicas do Irã", text: "Direção: Ali Asgari, Alireza Khatami - Elenco: Servin Zabetiyan, Sadaf Asgari, Faezeh Rad." },
    { title: "1798 - Revolta dos Búzios ", text: " Direção: Antônio Olavo." },
    { title: "The Hunted", text: "Direção: Louis Lagayette - Elenco: Lily Banda, Alec Newman, Raj Bajaj." },
    { title: "Disfarce Divino", text: "Direção: Virginie Sauveur - Elenco: Karin Viard, François Berléand, Maxime Bergeron." },
    
];


    


function createCardsmai1(maiSem1) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${maiSem1.title}</h5>
                    <p class="card-text">${maiSem1.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function createCardsmai2(maiSem2) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${maiSem2.title}</h5>
                    <p class="card-text">${maiSem2.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function createCardsmai3(maiSem3) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${maiSem3.title}</h5>
                    <p class="card-text">${maiSem3.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function createCardsmai4(maiSem4) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${maiSem4.title}</h5>
                    <p class="card-text">${maiSem4.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function createCardsmai5(maiSem5) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${maiSem5.title}</h5>
                    <p class="card-text">${maiSem5.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function renderCardsmai1() {
    const cardContainer = document.getElementById("card-container-mai1");
    cardContainer.innerHTML = "";
    maiSem1.forEach(maiSem1 => {
        const cardHTML = createCardsmai1(maiSem1);
        cardContainer.innerHTML += cardHTML;
    });
}

function renderCardsmai2() {
    const cardContainer = document.getElementById("card-container-mai2");
    cardContainer.innerHTML = "";
    maiSem2.forEach(maiSem2 => {
        const cardHTML = createCardsmai2(maiSem2);
        cardContainer.innerHTML += cardHTML;
    });
}

function renderCardsmai3() {
    const cardContainer = document.getElementById("card-container-mai3");
    cardContainer.innerHTML = "";
    maiSem3.forEach(maiSem3 => {
        const cardHTML = createCardsmai3(maiSem3);
        cardContainer.innerHTML += cardHTML;
    });
}

function renderCardsmai4() {
    const cardContainer = document.getElementById("card-container-mai4");
    cardContainer.innerHTML = "";
    maiSem4.forEach(maiSem4 => {
        const cardHTML = createCardsmai4(maiSem4);
        cardContainer.innerHTML += cardHTML;
    });
}

function renderCardsmai5() {
    const cardContainer = document.getElementById("card-container-mai5");
    cardContainer.innerHTML = "";
    maiSem5.forEach(maiSem5 => {
        const cardHTML = createCardsmai5(maiSem5);
        cardContainer.innerHTML += cardHTML;
    });
}

renderCardsmai1();
renderCardsmai2();
renderCardsmai3();
renderCardsmai4();
renderCardsmai5();
});