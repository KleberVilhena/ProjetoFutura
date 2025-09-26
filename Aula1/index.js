// Aguarda o DOM ser totalmente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Função para limpar e exibir o resultado em uma div específica
    function displayResult(elementId, content) {
        const outputElement = document.getElementById(elementId);
        outputElement.innerHTML = content;
    }

    // --- LÓGICA DO...WHILE ---

    // Exemplo 1: Validação de Senha
    document.getElementById('doWhileBtn1').addEventListener('click', () => {
        let senhaCorreta = "1234";
        let senhaDigitada;
        do {
            senhaDigitada = prompt("A senha correta é '1234'. Tente adivinhar:");
            if (senhaDigitada === null) break; // Usuário clicou em cancelar
        } while (senhaDigitada !== senhaCorreta);
        
        if (senhaDigitada === senhaCorreta) {
            displayResult('doWhileOutput1', "Acesso concedido!");
        } else {
            displayResult('doWhileOutput1', "Operação cancelada.");
        }
    });

    // Exemplo 2: Menu de Opções
    document.getElementById('doWhileBtn2').addEventListener('click', () => {
        let opcao;
        let resultado = "";
        do {
            opcao = prompt("Escolha uma opção:\n1. Ver Saldo\n2. Fazer Transferência\n3. Sair");
            if (opcao === null) {
                resultado += "Operação cancelada.<br>";
                break;
            }
            switch (opcao) {
                case '1': resultado += "Seu saldo é R$ 1.000,00<br>"; break;
                case '2': resultado += "Transferência realizada com sucesso.<br>"; break;
                case '3': resultado += "Saindo do sistema...<br>"; break;
                default: resultado += "Opção inválida. Tente novamente.<br>";
            }
        } while (opcao !== '3');
        displayResult('doWhileOutput2', resultado);
    });
    
    // Exemplo 3: Jogo de Adivinhação
    document.getElementById('doWhileBtn3').addEventListener('click', () => {
        const numeroSecreto = 7;
        let palpite;
        let tentativas = 0;
        do {
            palpite = prompt("Adivinhe o número secreto (entre 1 e 10):");
            tentativas++;
            if (palpite === null) break;
        } while (parseInt(palpite) !== numeroSecreto);
        
        if (parseInt(palpite) === numeroSecreto) {
            displayResult('doWhileOutput3', `Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
        } else {
            displayResult('doWhileOutput3', 'Você cancelou o jogo.');
        }
    });

    // Exemplo 4: Acumulando Valores
    document.getElementById('doWhileBtn4').addEventListener('click', () => {
        let soma = 0;
        let resultado = "";
        do {
            let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
            soma += numeroAleatorio;
            resultado += `Número sorteado: ${numeroAleatorio}. Soma atual: ${soma}<br>`;
        } while (soma <= 50);
        resultado += "<b>A soma final ultrapassou 50.</b>";
        displayResult('doWhileOutput4', resultado);
    });

    // Exemplo 5: Processando Carrinho
    document.getElementById('doWhileBtn5').addEventListener('click', () => {
        let carrinho = ["Maçã", "Banana", "Laranja"];
        let resultado = "";
        if (carrinho.length > 0) {
            do {
                let item = carrinho.shift(); // Remove o primeiro item do array
                resultado += `Processando o item: ${item}<br>`;
            } while (carrinho.length > 0);
        }
        resultado += "<b>Todos os itens foram processados.</b>";
        displayResult('doWhileOutput5', resultado);
    });

    // --- LÓGICA WHILE ---

    // Exemplo 1: Contagem Regressiva
    document.getElementById('whileBtn1').addEventListener('click', () => {
        let contagem = 10;
        let resultado = "";
        while (contagem > 0) {
            resultado += `${contagem}...<br>`;
            contagem--;
        }
        resultado += "<b>Lançar!</b>";
        displayResult('whileOutput1', resultado);
    });

    // Exemplo 2: Percorrendo Array
    document.getElementById('whileBtn2').addEventListener('click', () => {
        let frutas = ["Maçã", "Uva", "Pera", "Abacaxi"];
        let i = 0;
        let resultado = "";
        while (i < frutas.length) {
            resultado += `Fruta: ${frutas[i]}<br>`;
            i++;
        }
        displayResult('whileOutput2', resultado);
    });

    // Exemplo 3: Simulação de Carregamento
    document.getElementById('whileBtn3').addEventListener('click', () => {
        let progresso = 0;
        let resultado = "";
        while (progresso < 100) {
            progresso += 10;
            resultado += `Carregando... ${progresso}%<br>`;
        }
        resultado += "<b>Carregamento completo!</b>";
        displayResult('whileOutput3', resultado);
    });
    
    // Exemplo 4: Múltiplo de 7
    document.getElementById('whileBtn4').addEventListener('click', () => {
        let numero = 0;
        let resultado = "";
        while (numero % 7 !== 0 || numero === 0) {
            numero = Math.floor(Math.random() * 100) + 1;
            resultado += `Número testado: ${numero}<br>`;
        }
        resultado += `<b>Encontramos um múltiplo de 7: ${numero}</b>`;
        displayResult('whileOutput4', resultado);
    });

    // Exemplo 5: Consumindo Fila
    document.getElementById('whileBtn5').addEventListener('click', () => {
        let filaAtendimento = ["Cliente A", "Cliente B", "Cliente C"];
        let resultado = "";
        while (filaAtendimento.length > 0) {
            let clienteAtual = filaAtendimento.shift();
            resultado += `Atendendo agora: ${clienteAtual}<br>`;
        }
        resultado += "<b>Não há mais clientes na fila.</b>";
        displayResult('whileOutput5', resultado);
    });
    
    // --- LÓGICA FOR ---

    // Exemplo 1: Tabuada
    document.getElementById('forBtn1').addEventListener('click', () => {
        const numero = 8;
        let resultado = `<b>Tabuada do ${numero}:</b><br>`;
        for (let i = 1; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i}<br>`;
        }
        displayResult('forOutput1', resultado);
    });
    
    // Exemplo 2: Iterando sobre Array
    document.getElementById('forBtn2').addEventListener('click', () => {
        let cores = ["Vermelho", "Verde", "Azul", "Amarelo"];
        let resultado = "";
        for (let i = 0; i < cores.length; i++) {
            resultado += `A cor na posição ${i} é ${cores[i]}<br>`;
        }
        displayResult('forOutput2', resultado);
    });
    
    // Exemplo 3: Soma dos Números
    document.getElementById('forBtn3').addEventListener('click', () => {
        let somaTotal = 0;
        for (let i = 1; i <= 100; i++) {
            somaTotal += i;
        }
        displayResult('forOutput3', `A soma dos números de 1 a 100 é: <b>${somaTotal}</b>`);
    });

    // Exemplo 4: Números Pares
    document.getElementById('forBtn4').addEventListener('click', () => {
        let resultado = "<b>Números pares de 2 a 20:</b><br>";
        for (let i = 2; i <= 20; i += 2) {
            resultado += `${i}<br>`;
        }
        displayResult('forOutput4', resultado);
    });
    
    // Exemplo 5: Iteração Reversa
    document.getElementById('forBtn5').addEventListener('click', () => {
        let countdown = ["Três", "Dois", "Um"];
        let resultado = "";
        for (let i = countdown.length - 1; i >= 0; i--) {
            resultado += `${countdown[i]}...<br>`;
        }
        resultado += "<b>Decolar!</b>";
        displayResult('forOutput5', resultado);
    });
});