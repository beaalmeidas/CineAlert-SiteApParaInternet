document.addEventListener('DOMContentLoaded', function() {

    const junSem1 = [
        { title: "Os Observadores", text: " Direção: Ishana Shyamalan - Elenco: Dakota Fanning, Georgina Campbell, Oliver Finnegan." }, 
        { title: "Assassino por Acaso ", text: " Direção: Richard Linklater - Elenco: Glen Powell, Adria Arjona, Austin Amelio." }, 
        { title: "O Corvo ", text: "Direção: Rupert Sanders - Elenco: Bill Skarsgård, FKA Twigs, Danny Huston." }, 
        { title: "Grande Sertão ", text: "Direção: Guel Arraes - Elenco: Caio Blat, Luisa Arraes, Rodrigo Lombardi." }, 
        { title: "Mallandro, O Errado Que Deu Certo ", text: "Direção: Marco Antonio de Carvalho - Elenco: Sérgio Mallandro, Marianna Alexandre, Guilherme Garcia." }, 
        { title: "Letícia ", text: "Direção: Cristiano Vieira - Elenco: Sophia Abrahão, Bernardo Felinto, Paulo Ribeiro."},
        { title: "O Cara da Piscina", text: "  Direção: Chris Pine - Elenco: Chris Pine, Annette Bening, Danny DeVito."},
    
    ]
    
        
    const junSem2 = [ 
        { title: "Divertida Mente 2 ", text: "Direção: Kelsey Mann - Elenco: Kensington Tallman, Amy Poehler, Phyllis Smith." }, 
        { title: "Bad Boys: Até o Fim  ", text: "Direção: Adil El Arbi, Bilall Fallah - Elenco: Martin Lawrence, Will Smith, Vanessa Hudgens." }, 
        { title: "Bandida - A Número Um  ", text: "Direção: João Wainer - Elenco: Maria Bomani, Jean Luis Amorim, Milhem Cortaz." }, 
        { title: "Uma Vida de Esperança ", text: "Direção: Jon Gunn - Elenco: Hilary Swank, Alan Ritchson, Skywalker Hughes." },
        { title: "Avassaladoras 2.0 ", text: "Direção: Mara Mourão - Elenco: Fefe Schneider, Juliana Baroni, Murilo Bispo." },
        { title: "A semente do mal", text: "Direção: Gabriel Abrantes - Elenco: Brigette Lundy-Paine, Carloto Cotta, Anabela Moreira." },
        { title: "13 Sentimentos", text: "Direção: Daniel Ribeiro - Elenco: Artur Volpi, Sidney Santiago, Michel Joelsas." },
        { title: "O Anel de Eva", text: "Direção: Duflair Barradas - Elenco: Suzana Pires, Odilon Wagner, Regina Sampaio." },
        { title: "A Ordem do Tempo ", text: "Direção: Liliana Cavani - Elenco: Alessandro Gassman, Claudia Gerini, Ángela Molina." },
        
    ]
    
    
    const junSem3 = [
        { title: "É Assim Que Acaba", text: "Direção: Justin Baldoni - Elenco: Blake Lively, Justin Baldoni, Brandon Sklenar." }, 
        { title: "Tipos de Gentileza", text: "Direção: Yorgos Lanthimos - Elenco: Emma Stone, Jesse Plemons, Willem Dafoe." }, 
        { title: "A maldição de Cinderela ", text: "Direção: Louisa Warren - Elenco: Kelly Rian Sanson, Chrissie Wunna, Lauren Budd." },
        { title: "Clube dos Vândalos ", text: "Direção: Jeff Nichols - Elenco: Austin Butler, Jodie Comer, Tom Hardy." }, 
        { title: "Tudo O Que Você Podia Ser ", text: "Direção: Ricardo Alves Junior - Elenco: Aisha Brunno, Bramma Bremmer, Igui Leal." }, 
    
        ]
        
    const junSem4 = [
        { title: "Um Lugar Silencioso: Dia Um ", text: "Direção: Michael Sarnoski - Elenco: Lupita Nyong'o, Joseph Quinn (VII), Alex Wolff." }, 
        { title: "Homem-Aranha: Além do Aranhaverso ", text: "Direção: Joaquim Dos Santos, Kemp Powers, Justin Thompson - Elenco: Shameik Moore, Hailee Steinfeld, Brian Tyree Henry." }, 
        { title: "Meu Malvado Favorito 4 ", text: "Direção: Chris Renaud, Patrick Delage - Elenco: Steve Carell, Kristen Wiig, Pierre Coffin." },
        { title: "Horizon: An American Saga Chapter 1", text: "Direção: Kevin Costner - Elenco: Kevin Costner, Sienna Miller, Sam Worthington." }, 
        { title: "A Grande Fuga ", text: "Direção: Oliver Parker - Elenco: Michael Caine, Glenda Jackson, Danielle Vitalis." }, 
        { title: "Ainda Somos os Mesmos", text: "Direção: Paulo Nascimento - Elenco: Carol Castro, Edson Celulari, Gabrielle Fleck." },
        { title: "O Reencontro da Turma  ", text: "Direção: Chris Nelson - Elenco: Billy Magnussen, Nina Dobrev, Jamie Chung." },
    ]
    
    ;


function createCardsjun1(junSem1) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${junSem1.title}</h5>
                    <p class="card-text">${junSem1.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function createCardsjun2(junSem2) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${junSem2.title}</h5>
                    <p class="card-text">${junSem2.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function createCardsjun3(junSem3) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${junSem3.title}</h5>
                    <p class="card-text">${junSem3.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

function createCardsjun4(junSem4) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${junSem4.title}</h5>
                    <p class="card-text">${junSem4.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function renderCardsjun1() {
    const cardContainer = document.getElementById("card-container-jun1");
    cardContainer.innerHTML = "";
    junSem1.forEach(junSem1 => {
        const cardHTML = createCardsjun1(junSem1);
        cardContainer.innerHTML += cardHTML;
    });
}

function renderCardsjun2() {
    const cardContainer = document.getElementById("card-container-jun2");
    cardContainer.innerHTML = "";
    junSem2.forEach(junSem2 => {
        const cardHTML = createCardsjun2(junSem2);
        cardContainer.innerHTML += cardHTML;
    });
}

function renderCardsjun3() {
    const cardContainer = document.getElementById("card-container-jun3");
    cardContainer.innerHTML = "";
    junSem3.forEach(junSem3 => {
        const cardHTML = createCardsjun3(junSem3);
        cardContainer.innerHTML += cardHTML;
    });
}

function renderCardsjun4() {
    const cardContainer = document.getElementById("card-container-jun4");
    cardContainer.innerHTML = "";
    junSem4.forEach(junSem4 => {
        const cardHTML = createCardsjun4(junSem4);
        cardContainer.innerHTML += cardHTML;
    });
}




renderCardsjun1();
renderCardsjun2();
renderCardsjun3();
renderCardsjun4();

});
