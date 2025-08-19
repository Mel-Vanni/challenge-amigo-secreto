let amigo = [];

// Valida e adiciona um nome à lista de amigos
function adicionarAmigo() {
    // Pega o valor digitado no campo de texto
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); 

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Adicione o nome de um amigo");
        return; 
    }

    // Verifica se o nome contém apenas letras e espaços
    if (!/^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)*$/.test(nome)) {
        alert("Por favor, digite um nome com apenas letras");
        return; 
    }

    // Adiciona o nome à lista de amigos
    amigo.push(nome);

    // Limpa o campo de texto para o próximo nome
    input.value = "";

    // Atualiza a lista exibida na tela
    atualizarLista();
}

// Mostra todos os nomes adicionados na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de mostrar os nomes

    // Percorre a lista de amigos e cria um item <li> para cada nome
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i]; // Coloca o nome no item
        lista.appendChild(item); 
    }
}

// Sorteia um nome aleatório da lista
function sortearAmigo() {
    // Verifica se a lista está vazia
    if (amigo.length === 0) {
        alert("Adicione pelo menos um amigo para sortear");
        return; 
    }

    // Gera um número aleatório entre 0 e o tamanho da lista
    let indice = Math.floor(Math.random() * amigo.length);
    let sorteado = amigo[indice]; // Pega o nome correspondente ao número sorteado

    // Mostra o resultado do sorteio na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior

    let item = document.createElement("li");
    item.textContent = "O amigo sorteado foi " + sorteado;
    resultado.appendChild(item); // Exibe o nome sorteado
}