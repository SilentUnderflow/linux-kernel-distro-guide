const titulo = document.querySelector('.titulo_principal');
const texto = titulo.innerHTML;
titulo.innerHTML = '';

function digitar(i) {
    if (i < texto.length) {
        titulo.innerHTML += texto.charAt(i);
        setTimeout(() => digitar(i + 1), 75); // Velocidade em milissegundos
    }
}

digitar(0);

const btn = document.getElementById("btnTop");

window.onscroll = function() {
    // Se rolar mais de 300px para baixo, mostra o botão
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Sobe suavemente
};

const sections = document.querySelectorAll('div.titulo, .conteudo, .kernel');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "all 0.8s ease-out";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    observer.observe(section);
});