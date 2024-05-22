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
