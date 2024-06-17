let calculadora = (n1,n2,operacao) =>{

    if (operacao == 'adicao' || operacao == 'adição'){

        return n1 + n2;

    } else if (operacao == 'subtracao' || operacao == 'subtração'){

        return n1 - n2;

    } else if (operacao == 'multiplicacao' || operacao == 'multiplicação'){

        return n1 * n2;

    }else if (operacao == 'divisao' || operacao == 'divisão'){
        if(n2 === 0){
            return 'Erro: Divisão por zero';
        }else{
            return n1/n2;
        }

    }else{

        return "Operação Inválida"

    }
}
let operacao = prompt('Qual a operalçao desejada');
let n1 = Number(prompt('Digite a Primeira Variável:'));
let n2 = Number(prompt('Digite a Segunda Variável:'));
let resultado = calculadora(n1,n2,operacao);
console.log(`A ${operacao} entre ${n1} e ${n2} é: ${resultado}`);