const JunSem1 = [
    { title: "Os Observadores", text: "Direção: Ishana Shyamalan - Elenco: Dakota Fanning, Georgina Campbell, Oliver Finnegan." }, 
    { title: "Assassino por Acaso", text: "Direção: Richard Linklater - Elenco: Glen Powell, Adria Arjona, Austin Amelio." }, 
    { title: "Grande Sertão", text: "Direção: Guel Arraes - Elenco: Caio Blat, Luisa Arraes, Rodrigo Lombardi." }, 
    { title: "O Corvo", text: "Direção: Rupert Sanders - Elenco: Bill Skarsgård, FKA Twigs, Danny Huston." }, 
    { title: "Letícia", text: "Direção: Cristiano Vieira - Elenco: Sophia Abrahão, Bernardo Felinto, Paulo Ribeiro." }, 
    { title: "O Cara da Piscina", text: "Direção: Chris Pine - Elenco: Chris Pine, Annette Bening, Danny DeVito." }, 
    { title: "A Musa de Bonnard", text: "Direção: Martin Provost - Elenco: Cécile de France, Vincent Macaigne, Stacy Martin." }, 
    { title: "Vencer ou Morrer", text: "Direção: Vincent Mottez, Paul Mignot - Elenco: Hugo Becker, Damien Jouillerot, Francis Renaud." }
];


const JunSem2 = [
    { title: "Divertida Mente 2", text: "Direção: Kelsey Mann - Elenco: Kensington Tallman, Amy Poehler, Phyllis Smith." },
    { title: "Bad Boys: Até o Fim", text: "Direção: Adil El Arbi, Bilall Fallah - Elenco: Martin Lawrence, Will Smith, Vanessa Hudgens." },
    { title: "Bandida - A Número Um", text: "Direção: João Wainer - Elenco: Maria Bomani, Jean Luis Amorim, Milhem Cortaz." },
    { title: "Uma Vida de Esperança", text: "Direção: Jon Gunn - Elenco: Hilary Swank, Alan Ritchson, Skywalker Hughes." },
    { title: "Avassaladoras 2.0", text: "Direção: Mara Mourão - Elenco: Fefe Schneider, Juliana Baroni, Murilo Bispo." },
    { title: "Mallandro, O Errado Que Deu Certo", text: "Direção: Marco Antonio de Carvalho - Elenco: Sérgio Mallandro, Marianna Alexandre, Guilherme Garcia." },
    { title: "A semente do mal", text: "Direção: Gabriel Abrantes - Elenco: Brigette Lundy-Paine, Carloto Cotta, Anabela Moreira." },
    { title: "13 Sentimentos", text: "Direção: Daniel Ribeiro - Elenco: Artur Volpi, Sidney Santiago, Michel Joelsas." },
    { title: "O Anel de Eva", text: "Direção: Duflair Barradas - Elenco: Suzana Pires, Odilon Wagner, Regina Sampaio." },
    { title: "A Ordem do Tempo", text: "Direção: Liliana Cavani - Elenco: Alessandro Gassman, Claudia Gerini, Ángela Molina." },
    { title: "Rapto", text: "Direção: Iris Kaltenbäck - Elenco: Hafsia Herzi, Alexis Manenti, Nina Meurisse." },
    { title: "Porto Príncipe", text: "Direção: Maria Emília de Azevedo - Elenco: Selma Egrei, Diderot Senat, Leonardo Franco." },
    { title: "A Estação", text: "Direção: Cristina Maure - Elenco: Jimena Castiglioni, Rodolfo Vaz, Bruna Chiaradia." }
];


const JunSem3 = [
    { title: "É Assim Que Acaba", text: "Direção: Justin Baldoni - Elenco: Blake Lively, Justin Baldoni, Brandon Sklenar." },
    { title: "Tipos de Gentileza", text: "Direção: Yorgos Lanthimos - Elenco: Emma Stone, Jesse Plemons, Willem Dafoe." },
    { title: "Clube dos Vândalos", text: "Direção: Jeff Nichols - Elenco: Austin Butler, Jodie Comer, Tom Hardy." },
    { title: "A maldição de Cinderela", text: "Direção: Louisa Warren - Elenco: Kelly Rian Sanson, Chrissie Wunna, Lauren Budd." },
    { title: "Tudo O Que Você Podia Ser", text: "Direção: Ricardo Alves Junior - Elenco: Aisha Brunno, Bramma Bremmer, Igui Leal." }
];


const JunSem4 = [
    { title: "Um Lugar Silencioso: Dia Um", text: "Direção: Michael Sarnoski - Elenco: Lupita Nyong'o, Joseph Quinn (VII), Alex Wolff." },
    { title: "Homem-Aranha: Além do Aranhaverso", text: "Direção: Joaquim Dos Santos, Kemp Powers, Justin Thompson - Elenco: Shameik Moore, Hailee Steinfeld, Brian Tyree Henry." },
    { title: "Meu Malvado Favorito 4", text: "Direção: Chris Renaud, Patrick Delage - Elenco: Steve Carell, Kristen Wiig, Pierre Coffin." },
    { title: "Horizon: An American Saga Chapter 1", text: "Direção: Kevin Costner - Elenco: Kevin Costner, Sienna Miller, Sam Worthington." },
    { title: "O Reencontro da Turma", text: "Direção: Chris Nelson - Elenco: Billy Magnussen, Nina Dobrev, Jamie Chung." },
    { title: "A Grande Fuga", text: "Direção: Oliver Parker - Elenco: Michael Caine, Glenda Jackson, Danielle Vitalis." },
    { title: "Ainda Somos os Mesmos", text: "Direção: Paulo Nascimento - Elenco: Carol Castro, Edson Celulari, Gabrielle Fleck." },
    { title: "Casa Izabel", text: "Direção: Gil Baroni - Elenco: Jorge Neto (IV), Andrei Moscheto, Laura Haddad." },
    { title: "Testamento", text: "Direção: Denys Arcand - Elenco: Rémy Girard, Sophie Lorain, Marie-Mai." }
];


function createCardsJun1(JunSem1) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${JunSem1.title}</h5>
                    <p class="card-text">${JunSem1.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsJun2(JunSem2) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${JunSem2.title}</h5>
                    <p class="card-text">${JunSem2.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsJun3(JunSem3) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${JunSem3.title}</h5>
                    <p class="card-text">${JunSem3.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function createCardsJun4(JunSem4) {
    return `
        <div class="col-sm-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${JunSem4.title}</h5>
                    <p class="card-text">${JunSem4.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}


function renderCardsJun1() {
    const cardContainer = document.getElementById("card-container-jun1");
    cardContainer.innerHTML = "";
    JunSem1.forEach(JunSem1 => {
        const cardHTML = createCardsJun1(JunSem1);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsJun2() {
    const cardContainer = document.getElementById("card-container-jun2");
    cardContainer.innerHTML = "";
    JunSem2.forEach(JunSem2 => {
        const cardHTML = createCardsJun2(JunSem2);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsJun3() {
    const cardContainer = document.getElementById("card-container-jun3");
    cardContainer.innerHTML = "";
    JunSem3.forEach(JunSem3 => {
        const cardHTML = createCardsJun3(JunSem3);
        cardContainer.innerHTML += cardHTML;
    });
}


function renderCardsJun4() {
    const cardContainer = document.getElementById("card-container-jun4");
    cardContainer.innerHTML = "";
    JunSem4.forEach(JunSem4 => {
        const cardHTML = createCardsJun4(JunSem4);
        cardContainer.innerHTML += cardHTML;
    });
}


renderCardsJun1();
renderCardsJun2();
renderCardsJun3();
renderCardsJun4();