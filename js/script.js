const targetElement = document.getElementById('dynamic-text');
const words = ["Business Intelligence", "Analista de Dados", "Entusiasta da Ciência", "Bacharelando de Estatística"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Velocidade de digitação em milissegundos
const deletingSpeed = 50; // Velocidade de apagamento em milissegundos
const delayBetweenWords = 1000; // Tempo de espera entre as palavras em milissegundos

function type() {
    if (!targetElement) return;

    const currentWord = words[wordIndex];
    const currentText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

    targetElement.textContent = currentText;
    targetElement.nextElementSibling.style.display = 'inline-block'; // Garante que o cursor esteja visível

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = delayBetweenWords;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = typingSpeed;
    }

    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    setTimeout(type, speed);
}

// Inicia a animação após um pequeno delay inicial para garantir que o DOM esteja carregado
setTimeout(() => {
    if (targetElement) {
        type();
    }
}, 500);

// Modo claro/escuro
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggleButton.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});
