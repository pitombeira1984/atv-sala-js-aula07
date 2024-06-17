// Importa a função initModal do arquivo modal.js
import { initModal } from './modal.js';

// Aguarda o DOM (estrutura da página) ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Chama a função initModal para configurar o modal
    initModal();
});