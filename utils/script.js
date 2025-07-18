const header = document.getElementById('header');
const socialsWrapper = document.getElementById('socials-wrapper');
const moreInfoBtn = document.getElementById('more-info-btn');
const expandContent = document.getElementById('expand-content');

const links = [
    { id: 'slot2', name: 'instagram', url: 'https://www.instagram.com/nanira_n?igsh=MXhmNGl1bXg2ZGJtYw==', icon: 'bi-instagram' },
    { id: 'slot3', name: 'tiktok', url: 'https://www.tiktok.com/@nanira_studio?_t=ZS-8y5nH0gVKoj&_r=1', icon: 'bi-tiktok' },
    { id: 'slot4', name: 'whatsapp', url: 'https://wa.me/51932944043', icon: 'bi-whatsapp' },
    { id: 'slot5', name: 'spotify', url: 'https://open.spotify.com/user/31pac3vokazdgv7gjztyreowwgcu', icon: 'bi-spotify' }
];

function showSocials() {
    socialsWrapper.style.display = 'block';

    links.forEach(link => {
        const slot = document.getElementById(link.id);
        slot.innerHTML = `<i class="bi ${link.icon}"></i>`;
        slot.onclick = () => window.open(link.url, '_blank');
    });

    // Botón para CV
    document.getElementById('cv-slot').onclick = () => {
        window.open('https://drive.google.com/file/d/1-5bOu-ujs9c7nktNT2buIIwwNQmZBdja/view?usp=sharing', '_blank');
    };
}

header.addEventListener('click', () => {
    if (!header.classList.contains('expanded')) {
        header.classList.add('expanded');
        setTimeout(showSocials, 800);
    }
});

// Botón para expandir/ocultar video
moreInfoBtn.addEventListener('click', () => {
    expandContent.style.display = (expandContent.style.display === 'none' || expandContent.style.display === '') 
        ? 'block' 
        : 'none';
});

// --- LLUVIA DE COMIDA ---

const foodContainer = document.getElementById('food-container');
const foods = [
    'img/donut.png',
    'img/icecream.png',
    'img/middle-strawberry.png',
    'img/milk.png',
    'img/mochi.png',
    'img/one-strawberry.png',
    'img/oni.png',
    'img/pink-mochi.png',
    'img/red-mochi.png',
    'img/shortcake.png',
    'img/strawberry.png',
    'img/toast.png',
];

const maxFoodItems = 50; // Límite máximo en pantalla

function createFood() {
    if (foodContainer.childElementCount >= maxFoodItems) return;

    const food = document.createElement('img');
    food.src = foods[Math.floor(Math.random() * foods.length)];
    food.classList.add('food-item');

    // Posición y tamaño aleatorios
    food.style.left = Math.random() * 100 + 'vw';
    const size = 30 + Math.random() * 40; // Tamaño entre 30 y 70 px
    food.style.width = size + 'px';

    // Velocidad y retraso aleatorios
    const duration = 8 + Math.random() * 6; // 8s a 14s más lento
    const delay = Math.random() * 1; // hasta 1s de espera

    food.style.animationDuration = `${duration}s`;
    food.style.animationDelay = `${delay}s`;
    food.style.opacity = 0; // invisible inicialmente

    foodContainer.appendChild(food);

    // Activar visibilidad justo antes de iniciar la animación
    setTimeout(() => {
        food.style.opacity = 0.2;
    }, delay * 1000);

    food.addEventListener('animationend', () => {
        food.remove();
    });
}

// Genera comida cada 600ms para no saturar
setInterval(createFood, 800);
