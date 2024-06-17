function somar(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    let nome = document.getElementById('nome').value;
    let saudacao = document.getElementById('saudacao').value;

    console.log('Nome:', nome);
    console.log('Saudação:', saudacao);
}

document.getElementById('form').addEventListener('submit', somar);