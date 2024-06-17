// Importa funções úteis do arquivo utils.js
import { $, $$, fadeIn, fadeOut } from './utils.js';

// Função principal para inicializar o modal
export function initModal() {
    // Seleciona elementos do DOM
    const modal = $('#myModal');     // O modal em si
    const btn = $('#openModal');     // Botão para abrir o modal
    const span = $('.close');        // Botão (X) para fechar o modal

    // Adiciona event listeners (ouvintes de eventos) aos elementos

    // Abre o modal quando o botão é clicado
    if (btn) btn.addEventListener('click', openModal);
    
    // Fecha o modal quando o (X) é clicado
    if (span) span.addEventListener('click', closeModal);
    
    // Fecha o modal se clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Função para abrir o modal
    function openModal() {
        if (modal) fadeIn(modal);
    }

    // Função para fechar o modal
    function closeModal() {
        if (modal) fadeOut(modal);
    }
}