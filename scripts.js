
function addCardMenu() {
  const buttonAdd = document.querySelector(".add-card");
  const ul = document.querySelector(".menu-card-list");
  let cardCounter = 0;

  buttonAdd.addEventListener("click", () => {
    cardCounter++;
    showScreen(formCreateCardMenu, screenEditFormsController, 12);
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

function setupCardControls(cardElement) {
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
  
  btnAddTable.addEventListener("click", () => {
    const btnId = btnAddTable.getAttribute("cards-btn-data-id");
    if (btnId == cardId) {
      tableId++;
      showScreen(formCreateTable, screenEditFormsController, 26);
      const newTable = createTable(cardId, tableId);
      const tableSection = document.querySelector(`.table-section`);
      tableSection.appendChild(newTable);
      addCardTable(newTable);
    }
  });
}


function formCreateTable() {
  const section = document.createElement("section");
  section.classList.add("form-section");
  section.innerHTML = `<form class="form-object-add">
        <h1 class="form-title">Create Table</h1>
        <div class="form-input-container-add">
          <input class="form-input-edit" type="text" placeholder="Title:" />
          <input class="form-input-edit" type="text" placeholder="Description:" />
        </div>
        <button class="form-btn">Edit</button>
      </form>`;

  return section;
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
          <button class="btn-add-card" btn-add-data-id="${tableId}">Add</button>
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

function addCardTable(tableSection) {
  const btnAddCard = tableSection.querySelector(".btn-add-card");
  const ul = tableSection.querySelector(".table-card-list");
  const tableId = tableSection.getAttribute("data-table-id");
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
              <button class="btn-card" id="btn-card-delete">
                <img
                  src="./assets/botao-apagar.png"
                  alt="delete"
                  class="icon-card"
                />
              </button>
              <button class="btn-card" id="btn-card-edit">
                <img src="./assets/pencil.png" alt="pencil" class="icon-card" />
              </button>
              <button class="btn-card"  id="btn-card-view">
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
  btnRemoveCardTb(li);
  btnEditarCardTb(li);
}

function btnRemoveCardTb(li) {
  const btnDeleteCardTb = li.querySelector("#btn-card-delete");
  btnDeleteCardTb.addEventListener("click", () => {
    li.remove();
  });
}

function btnEditarCardTb(li) {
  btnPencil(li);
}

function btnPencil(li) {
  const btnPencil = li.querySelector("#btn-card-edit");
  const btnScreeView = li.querySelector("#btn-card-view");


  btnPencil.addEventListener("click", () => {
    showScreen(createScreenEdit,screenEditFormsController);
  });

  btnScreeView.addEventListener("click", () => {
   showScreen(createScreenView,screenEditFormsController);
  });
}

function showScreen(createScreenFunction,controllerFuncion, length){
  const tableSection = document.querySelector(".table-section");

  const newScrean = createScreenFunction();
    tableSection.appendChild(newScrean);
    
    controllerFuncion(newScrean, length);
}

function screenEditFormsController(newScreen, length){
formSubmit(newScreen, length);

}

function sendingToForm(form){
  const formObject = form.querySelector(".form-object")
    
  if(formObject){
    formObject.addEventListener("submit", function(event){
      event.preventDefault();
    })
  }else{
    form.querySelector(".form-object-add").addEventListener("submit", function(event){
    event.preventDefault();
  })
  }
  
}

function formSubmit(newScreen, length){
  const btnFormSubmit= document.querySelector(".form-btn");
  sendingToForm(newScreen);

  btnFormSubmit.addEventListener("click", (e) => {
  if(length == null){
      newScreen.remove();
    }else{
    if(maxLength(newScreen, length)){
        newScreen.remove();
      }
    }
  });
}

function createScreenEdit() {
  const section = document.createElement("section");
  section.classList.add("form-section");
  section.innerHTML = `<form class="form-object">
        <h1 class="form-title">Edit Card</h1>
        <div class="form-input-container">
          <input class="form-input-edit" type="text" placeholder="Title:" />
          <input class="form-input-edit" type="text" placeholder="ImgUrl:" />
        </div>
        <textarea
          class="form-textarea-content"
          type="text"
          placeholder="Description:"
        ></textarea>
        <button class="form-btn">Edit</button>
      </form>`;

  return section;
}

function createScreenView()
{
  const section = document.createElement("section");
  section.classList.add("form-section");
  section.innerHTML = `<form class="form-object">
        <div class="form-conteudos-container">
          <h1 class="form-title">Titulodawdawd´paw</h1>
          <img
            src={link.url}
            alt={link.title}
            class="form-img-edit">
        </div>
        <div
          class="form-textarea-content"
          type="text"
          placeholder="Description:"
        >dwadwadawdwadawdwadwadwadwadawdawdwadwaawdwadawdwadawdwadwadwadwadawdwaddawdawdwadwa</div>
        <button class="form-btn">Sair</button>
      </form>`;

  return section;
}

function formCreateCardMenu(){
  const section = document.createElement("section");
  section.classList.add("form-section");
  section.innerHTML = `<section class="form-section">
      <form class="form-object-add">
        <h1 class="form-title">Create Card</h1>
        <div class="form-input-container-add">
          <input class="form-input-edit" type="text" placeholder="Title:" />
          <input class="form-input-edit" type="text" placeholder="Description:" />
        </div>
        <button class="form-btn">Create</button>
      </form>
    </section>`;

  return section; 
}

function formLogin(){
  const section = document.createElement("section");
  section.classList.add("form-section");
  section.innerHTML = `<form class="form-login">
        <h1 class="form-title">Login</h1>
          <input class="form-input-edit" type="text" placeholder="Name:" />
        <button class="form-btn">Create</button>
      </form>`

  return section
}

function maxLength(newScreen, length) {
  const input = newScreen.querySelector(".form-input-edit");
  
  if(input.value.length > length) { 
    alert(`O limite de caracter é ${length}`);
    input.focus();
    return false
  }
  return true
}

addCardMenu();