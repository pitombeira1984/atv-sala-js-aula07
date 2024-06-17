function calculate() {
    // Obtemos os valores inseridos no formulário
    const var1 = parseFloat(document.getElementById('var1').value);
    const var2 = parseFloat(document.getElementById('var2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Realizamos a operação escolhida
    switch (operation) {
        case 'add':
            result = var1 + var2;
            break;
        case 'subtract':
            result = var1 - var2;
            break;
        case 'multiply':
            result = var1 * var2;
            break;
        case 'divide':
            if (var2 === 0) {
                result = 'Erro: Divisão por zero';
            } else {
                result = var1 / var2;
            }
            break;
        default:
            result = 'Operação inválida';
            break;
    }

    // Exibimos o resultado
    document.getElementById('result').textContent = result;
}
