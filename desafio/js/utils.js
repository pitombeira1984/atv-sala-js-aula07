// Função auxiliar para selecionar um único elemento do DOM
export const $ = (selector) => document.querySelector(selector);

// Função auxiliar para selecionar múltiplos elementos do DOM
export const $$ = (selector) => document.querySelectorAll(selector);

// Função para fazer um elemento aparecer com efeito de fade
export function fadeIn(element) {
    if (!element) return;  // Se o elemento não existir, não faz nada
    element.style.display = 'block';  // Torna o elemento visível
    setTimeout(() => {
        element.style.opacity = '1';  // Aumenta a opacidade após um pequeno delay
    }, 10);
}

// Função para fazer um elemento desaparecer com efeito de fade
export function fadeOut(element) {
    if (!element) return;  // Se o elemento não existir, não faz nada
    element.style.opacity = '0';  // Torna o elemento transparente
    setTimeout(() => {
        element.style.display = 'none';  // Esconde o elemento após a animação
    }, 300);  // 300ms é a duração da animação de fade
}