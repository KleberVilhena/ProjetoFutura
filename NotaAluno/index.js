// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Pega as referências dos elementos HTML com os quais vamos interagir
    const notaInput = document.getElementById('notaInput');
    const verificarBtn = document.getElementById('verificarBtn');
    const resultadoP = document.getElementById('resultado');

    // 2. Cria a função que contém a lógica principal
    function verificarAprovacao() {
        // Pega o valor do input e converte para um número com casas decimais (Float)
        const nota = parseFloat(notaInput.value);

        // Limpa classes de cor anteriores para um novo resultado
        resultadoP.className = '';

        // Validação: Verifica se o campo está vazio ou não é um número
        if (isNaN(nota)) {
            resultadoP.textContent = 'Por favor, digite um número válido.';
            resultadoP.classList.add('erro');
            return; // Para a execução da função aqui
        }

        // Validação: Verifica se a nota está no intervalo correto (0 a 10)
        if (nota < 0 || nota > 10) {
            resultadoP.textContent = 'A nota deve estar entre 0 e 10.';
            resultadoP.classList.add('erro');
            return; // Para a execução da função aqui
        }

        // 3. Decisão (Lógica principal do pseudocódigo)
        // SE nota for maior ou igual a 7 ENTÃO...
        if (nota >= 7) {
            resultadoP.textContent = 'Aluno APROVADO!';
            resultadoP.classList.add('aprovado'); // Adiciona a classe de cor verde
        } 
        // SENÃO...
        else {
            resultadoP.textContent = 'Aluno REPROVADO.';
            resultadoP.classList.add('reprovado'); // Adiciona a classe de cor vermelha
        }
    }

    // 4. Adiciona um "escutador de evento" ao botão. 
    // Quando o botão for clicado, a função verificarAprovacao será executada.
    verificarBtn.addEventListener('click', verificarAprovacao);

    // Bônus: Permite que o usuário aperte "Enter" no campo de input para verificar
    notaInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            verificarAprovacao();
        }
    });
});