document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('#input');
    const resultado = document.querySelector('.output');


    /*
    @param {string} bin - O número binário como string.
    @returns {boolean} - Retorna true se o número binário for válido, caso contrário, retorna false. 
    */

    function verificarEntrada(bin){
        return /^[01]{1,8}$/.test(bin); // Permite até 8 digitos binários
    }

    /*
    Processa o valor do input, verifica, válida e envia o valor para o elemento resultado.
    */

    function processarDados(){
        const inputValue = input.value; // Pega o valor do input

        // Verifica se a entrada é válida e mostra um erro se necessário
        if(!verificarEntrada(inputValue)){
            resultado.textContent = "Sequência inválida 😕";
            resultado.classList.add('error');
            // alert('Perguntas: A quantidade de digitos está correta? - Está em Formato 0 e 1? - Bin 🤨');
            return;
        } 

        // Converte o valor do input em decimal - base 2
        const decimal = parseInt(inputValue, 2);

        // Mostra o resultado e limpa o valor do input
        resultado.textContent = decimal;
        resultado.classList.remove('error');
        input.value = ''; // Limpa o valor digitado no input
    }

    // Previne o envio do evento do formulario e chama a funcao processarDados.
    form.addEventListener('submit', function(e){
        e.preventDefault();
        processarDados();
    })
});


/*
    Gabriel de Barros - Gabriel Sorrab
*/