// Variável da carga atual
let carga = 0;

// Limite máximo permitido
const limite = 400;

// Pegando elementos do HTML
const peso = document.getElementById("peso");
const alerta = document.getElementById("alerta");

const adicionarBtn = document.getElementById("adicionarBtn");
const retirarBtn = document.getElementById("retirarBtn");
const resetarBtn = document.getElementById("resetarBtn");

// Função para atualizar sistema
function atualizarSistema() {

    peso.textContent = carga + " kg";

    // Verifica sobrecarga
    if (carga >= limite) {

        alerta.style.display = "block";

        adicionarBtn.disabled = true;

    } else {

        alerta.style.display = "none";

        adicionarBtn.disabled = false;
    }
}

// Adicionar carga
adicionarBtn.addEventListener("click", () => {

    carga += 100;

    atualizarSistema();
});

// Retirar carga
retirarBtn.addEventListener("click", () => {

    // Evita peso negativo
    if (carga > 0) {

        carga -= 100;
    }

    atualizarSistema();
});

// Resetar sistema
resetarBtn.addEventListener("click", () => {

    carga = 0;

    atualizarSistema();
});