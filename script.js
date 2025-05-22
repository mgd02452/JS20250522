//Ejercicio 1: crear la lista de la compra
function addItem() {
    const input = document.getElementById('itemInput');
    const value = input.value.trim();
    const list = document.getElementById('itemsList');

    if (value === '') {
        alert('Por favor, introduce un artículo.');
        return;
    }
    // Creamos un nuevo elemento <li>
    const li = document.createElement('li');
    li.innerHTML = `${value}
        <div class="buttons">
            <span class="completeButton material-icons">done</span>
            <span class="deleteButton material-icons">delete</span>
            </div>`;
   const completeBtn = li.querySelector('.completeButton');
    const deleteBtn = li.querySelector('.deleteButton');

    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
            li.remove();
        }
    });

    list.appendChild(li);
    input.value = '';
}

// Ejercicio 2: Cambio de idioma
const traducciones = {
  "es": {
    "title": "Lista de la compra",
    "add": "Agregar",
    "placeholder": "Escribe un artículo...",
    "confirmDelete": "¿Estás seguro de que quieres eliminar este elemento?",
    "emptyWarning": "Por favor, introduce un artículo."
  },
    "en": {
    "title": "Shopping List",
    "add": "Add",
    "placeholder": "Enter an item...",
    "confirmDelete": "Are you sure you want to delete this item?",
    "emptyWarning": "Please enter an item."
    }
};
function changeLenguaje() {
    const lang = document.getElementById("lenguajeSelect").value;
    const t = traducciones[lang];

    // Cambiar textos
    document.querySelector("h1").textContent = t.title;
    document.getElementById("addItemBtn").textContent = t.add;
    document.getElementById("itemInput").placeholder = t.placeholder;

    // Actualizar mensajes globales para otros usos
    window.mensajes = {
        confirmDelete: t.confirmDelete,
        emptyWarning: t.emptyWarning
    };
}
window.onload = () => {
    changeLenguaje();
};

