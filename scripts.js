function addCardMenu() {
  const buttonAdd = document.querySelector(".add-card");
  const ul = document.querySelector(".menu-card-list");
  let cardCounter = 0;

  buttonAdd.addEventListener("click", () => {
    cardCounter++;

    const newCard = createCard(cardCounter);
    ul.appendChild(newCard);
    setupCardControls(newCard, cardCounter);
  });
}

function createCard(id_cards) {
  const li = document.createElement("li");
  li.classList.add("menu-card");
  li.setAttribute("cards-data-id", id_cards);

  li.innerHTML = `
    <div class="menu-text-card">
        <h3>Titulo</h3>
        <p>Descrição</p>
    </div>
    <button class="btn-delete-card-menu">Delete</button>`;

  li.addEventListener("click", (e) => {
    if (!e.target.closest("button")) {
      showTables(id_cards);
      addIdButtonAddTable(id_cards);
    }
  });

  return li;
}

function addIdButtonAddTable(id) {
  const btnAddTable = document.querySelector(".btn-add-table");
  btnAddTable.setAttribute("cards-btn-data-id", id);
}

function setupCardControls(cardElement, cardId) {
  const btn_delete = cardElement.querySelector(".btn-delete-card-menu");
  let countTable = 0;

  btn_delete.addEventListener("click", () => {
    cardElement.remove();
    removeTables(cardElement);
  });

  buttonAddTable(cardElement, countTable);
}
function buttonAddTable(cardElement, tableId) {
  const btnAddTable = document.querySelector(".btn-add-table");
  const cardId = cardElement.getAttribute("cards-data-id");
  const btnId = btnAddTable.getAttribute("cards-btn-data-id");

  btnAddTable.addEventListener("click", () => {
    const btnId = btnAddTable.getAttribute("cards-btn-data-id");
    if (btnId == cardId) {
      tableId++;
      const newTable = createTable(cardId, tableId);

      const tableSection = document.querySelector(`.table-section`);
      tableSection.appendChild(newTable);
      addCardTable(tableId);
    }
  });
}
function removeTables(cardElement) {
  const tables = document.querySelectorAll("[data-tables-for]");
  const cardId = cardElement.getAttribute("cards-data-id");

  tables.forEach((tables) => {
    if (tables.getAttribute("data-tables-for") == cardId) {
      tables.remove();
    }
  });
}

function hideAllTables() {
  const tables = document.querySelectorAll("[data-tables-for]");
  tables.forEach((table) => {
    table.style.display = "none";
  });
}

function showTables(id) {
  addIdTable(id);
  hideAllTables();
  addShowTablesForId(id);
}

function addIdTable(id) {
  const btnAddTable = document.querySelector(".btn-add-table");
  btnAddTable.setAttribute("cards-btn-data-id", id);
}

function addShowTablesForId(id) {
  const tables = document.querySelectorAll("[data-tables-for]");

  tables.forEach((table) => {
    if (table.getAttribute("data-tables-for") == id) {
      table.style.display = "grid";
    }
  });
}

function ButtonRemoveCardMenu(id, li) {
  const buttonDeleteCardMenu = li.querySelector(".btn-delete-card-menu");
  buttonDeleteCardMenu.addEventListener("click", () => {
    li.remove();
  });
}

function createTable(cardId, tableId) {
  const div = document.createElement("div");
  div.classList.add("table");
  div.setAttribute("data-tables-for", cardId);
  div.setAttribute("data-table-id", tableId);

  div.innerHTML = `<div class="btn-exit">
          <button class="btn-exit-table">
            <img src="./assets/exit.png" alt="exit" class="icon-exit" />
          </button>
        </div>
        <div class="title-table">
          <h3>Titulo</h3>
          <p>Descrição</p>
        </div>
        <ul class="table-card-list">
  
        </ul>
        <div class="btn-add-card-container">
          <button class="btn-add-card">Add</button>
        </div> `;

  btnExitTable(div);

  return div;
}

function btnExitTable(div) {
  const btnExitTable = div.querySelector(".btn-exit-table");
  btnExitTable.addEventListener("click", () => {
    div.remove();
  });
}

function addCardTable(tableId) {
  const btnAddCard = document.querySelector(".btn-add-card");
  const ul = document.querySelector(".table-card-list");
  let countCardTb = 0;

  btnAddCard.addEventListener("click", () => {
    countCardTb++;
    const newCard = createCardTb(tableId, countCardTb);
    ul.appendChild(newCard);
  });
}

function createCardTb(tableId, countCardTb) {
  const li = document.createElement("li");
  li.classList.add("card-table");
  li.setAttribute("data-card-tb-for", tableId);
  li.setAttribute("data-card-tb-id", countCardTb);

  li.innerHTML = `
            <div class="text-card-table">
              <h3>Titulo</h3>
              <p>
                Descriçãooooooooooooooooooooooooooooooooooooooooooooooooooooo
                oooooooooooooooooooooooooo
              </p>
            </div>
            <div class="btn-card-tb">
              <button class="btn-card">
                <img
                  src="./assets/botao-apagar.png"
                  alt="delete"
                  class="icon-card"
                />
              </button>
              <button class="btn-card">
                <img src="./assets/pencil.png" alt="pencil" class="icon-card" />
              </button>
              <button class="btn-card">
                <img
                  src="./assets/clipboard.png"
                  alt="clipboard"
                  class="icon-card"
                />
              </button>
            </div>`;

  btnControlerCardTb(li);
  return li;
}
function btnControlerCardTb(li) {
  btnremoveCardTb(li);
}

function btnremoveCardTb(li) {
  const btnDeleteCardTb = li.querySelector(".btn-card");
  btnDeleteCardTb.addEventListener("click", () => {
    li.remove();
  });
}

addCardMenu();
