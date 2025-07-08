const header = document.getElementById('header');
const socialsWrapper = document.getElementById('socials-wrapper');

const links = [
    { id: 'slot1', name: 'youtube', url: 'https://www.youtube.com/@tucuenta', icon: 'bi-youtube' },
    { id: 'slot2', name: 'spotify', url: 'https://open.spotify.com/playlist/5e3pMKpeiBQVSLEDssMyIE', icon: 'bi-spotify' },
    { id: 'slot3', name: 'tiktok', url: 'https://www.tiktok.com/@ninara_studios?_t=zm-8wndkyvn09m&_r=1', icon: 'bi-tiktok' },
    { id: 'slot4', name: 'whatsapp', url: 'https://wa.me/51932944043', icon: 'bi-whatsapp' },
    { id: 'slot5', name: 'instagram', url: 'https://www.instagram.com/ninara_.studios?igsh=MXhmNGl1bXg2ZGJtYw%3D%3D', icon: 'bi-instagram' }
];

function showSocials() {
    socialsWrapper.style.display = 'block';
    links.forEach(link => {
    const slot = document.getElementById(link.id);
    slot.innerHTML = `<i class="bi ${link.icon}"></i>`;

    if (link.name === 'spotify') {
        slot.onclick = () => {
        if (!slot.classList.contains('spotify-active')) {
            slot.classList.add('spotify-active');
            const icon = slot.querySelector('i');
            icon.classList.add('spotify-icon-move');

            const iframe = document.createElement('iframe');
            iframe.src = "https://open.spotify.com/embed/playlist/5e3pMKpeiBQVSLEDssMyIE";
            iframe.className = "spotify-player";
            iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
            iframe.loading = "lazy";

            setTimeout(() => slot.appendChild(iframe), 300);
        }
        };
    } else {
        slot.onclick = () => window.open(link.url, '_blank');
    }
    });
}

header.addEventListener('click', () => {
    if (!header.classList.contains('expanded')) {
    header.classList.add('expanded');
    setTimeout(showSocials, 800);
    }
});
