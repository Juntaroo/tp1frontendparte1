let slideIndex = 0;
showSlides();

function showSlides() {//Es la lógica del slider
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000);
}

function togglePanel() {//El panel que estoy tocando, es el boton de telefono
    const panel = document.getElementById('panel');
    panel.classList.toggle('show');
}
document.addEventListener('click', function(event) {//En caso de que el usuario no quiera el panel más, se clickea afuera y se sale
    const panel = document.getElementById('panel');
    const btn = document.querySelector('.header .btn');
    
    if (!panel.contains(event.target) && !btn.contains(event.target)) {
        panel.classList.remove('show');
    }
});