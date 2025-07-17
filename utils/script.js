const header = document.getElementById('header');
const socialsWrapper = document.getElementById('socials-wrapper');
const moreInfoBtn = document.getElementById('more-info-btn');
const expandContent = document.getElementById('expand-content');

const links = [
    { id: 'slot2', name: 'instagram', url: 'https://www.instagram.com/nanira_n?igsh=MXhmNGl1bXg2ZGJtYw==', icon: 'bi-instagram' },
    { id: 'slot3', name: 'tiktok', url: 'https://www.tiktok.com/@nanira_studio?_t=ZS-8y5nH0gVKoj&_r=1', icon: 'bi-tiktok' },
    { id: 'slot4', name: 'whatsapp', url: 'https://wa.me/qr/UJBD4BFV4SWVJ1', icon: 'bi-whatsapp' },
    { id: 'slot5', name: 'spotify', url: 'https://open.spotify.com/user/31pac3vokazdgv7gjztyreowwgcu', icon: 'bi-spotify' }
];

function showSocials() {
    socialsWrapper.style.display = 'block';

    links.forEach(link => {
        const slot = document.getElementById(link.id);
        slot.innerHTML = `<i class="bi ${link.icon}"></i>`;
        slot.onclick = () => window.open(link.url, '_blank');
    });

    document.getElementById('cv-slot').onclick = () => {
        window.open('/docs/cv.pdf', '_blank');
    };
}

header.addEventListener('click', () => {
    if (!header.classList.contains('expanded')) {
        header.classList.add('expanded');
        setTimeout(showSocials, 800);
    }
});

moreInfoBtn.addEventListener('click', () => {
    if (expandContent.style.display === 'none' || expandContent.style.display === '') {
        expandContent.style.display = 'block';
    } else {
        expandContent.style.display = 'none';
    }
});
