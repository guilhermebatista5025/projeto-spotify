/* ====================================================
   SPOTIFY CLONE — script.js
   ==================================================== */

'use strict';

// ==================================================
// DATA — substitua os caminhos de imagem pelos seus
// ==================================================

const musicasEmAlta = [
    {
        name: 'Famoso Ímã | O poderoso chatão',
        artist: 'Mc Lele JP, Mc Poze do Rodo, MC Leozinho ZS, D...',
        img: './img/album-famoso-ima.jpg',
        explicit: false,
    },
    {
        name: 'Loira Gelada',
        artist: 'Luísa Sonza',
        img: './img/album-loira-gelada.jpg',
        explicit: true,
    },
    {
        name: 'Bola Uma Vela (Trava Chip)',
        artist: 'MC Meno K, Dj Yuri Pedrada',
        img: './img/album-bola-uma-vela.jpg',
        explicit: false,
    },
    {
        name: 'Caminhonete Inteira - Ao Vivo',
        artist: 'Diego & Arnaldo, Rionegro & Solimões',
        img: './img/album-caminhonete.jpg',
        explicit: false,
    },
    {
        name: 'Beatriz',
        artist: '2ZDinizz, Leborato, HHR',
        img: './img/album-beatriz.jpg',
        explicit: false,
    },
    {
        name: 'Pirocada Quente 2',
        artist: 'MC Jvila, Mc Negão Original, DJ Dael',
        img: './img/album-pirocada.jpg',
        explicit: true,
    },
    {
        name: 'PRÊMIO MULTISHOW',
        artist: 'Ryu, The Runner, Neckklace,...',
        img: './img/album-premio-multishow.jpg',
        explicit: false,
    },
    {
        name: '200 Anos',
        artist: 'Yasmin Sat',
        img: './img/album-200-anos.jpg',
        explicit: false,
    },
];

const artistas = [
    { name: 'Henrique & Juliano', img: './img/artista-henrique-juliano.jpg' },
    { name: 'Diego & Victor Hugo', img: './img/artista-diego-victor-hugo.jpg' },
    { name: 'Grupo Menos É Mais', img: './img/artista-grupo-menos.jpg' },
    { name: 'Jorge & Mateus', img: './img/artista-jorge-mateus.jpg' },
    { name: 'Zé Neto & Cristiano', img: './img/artista-ze-neto.jpg' },
    { name: 'Matheus & Kauan', img: './img/artista-mateus-kauan.jpg' },
    { name: 'Murilo Huff', img: './img/artista-murilo-huff.jpg' },
    { name: 'Luan Santana', img: './img/artista-luan-santana.jpg' },
];

const albums = [
    { name: 'White Noise', artist: 'Sleepy John', img: './img/album-white-noise.jpg' },
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', img: './img/album-ceu-explica.jpg' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais', img: './img/album-vida-loka.jpg' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', img: './img/album-hit-me.jpg' },
    { name: 'Caju', artist: 'Liniker', img: './img/album-caju.jpg' },
    { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', img: './img/album-escandalo.jpg' },
    { name: 'Gustavo Lima', artist: 'Gustavo Lima', img: './img/artista-gustavo-limma.jpg' },
    { name: 'Sertanejo Hits', artist: 'Vários artistas', img: './img/album-sertanejo.jpg' },
];

// ==================================================
// FALLBACK — gera uma cor de placeholder quando a
// imagem não existir (útil durante o desenvolvimento)
// ==================================================
const PLACEHOLDER_COLORS = [
    '#1a4a2e','#4a1a1a','#1a1a4a','#4a3a1a',
    '#2e1a4a','#1a4a4a','#4a1a3a','#3a4a1a',
];

function placeholderStyle(index) {
    return PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length];
}

function buildImgElement(src, alt, index) {
    const img = document.createElement('img');
    img.alt = alt;
    img.loading = 'lazy';

    // Tenta carregar a imagem; se falhar usa um fundo colorido
    img.src = src;
    img.onerror = function () {
        this.style.display = 'none';
        this.parentElement.style.backgroundColor = placeholderStyle(index);
        this.parentElement.style.display = 'flex';
        this.parentElement.style.alignItems = 'center';
        this.parentElement.style.justifyContent = 'center';

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-music';
        icon.style.cssText = 'font-size:36px;color:rgba(255,255,255,0.3)';
        this.parentElement.appendChild(icon);
    };
    return img;
}

// ==================================================
// RENDER — Músicas em Alta
// ==================================================
function renderMusicasEmAlta() {
    const grid = document.getElementById('musicasGrid');
    if (!grid) return;

    musicasEmAlta.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Reproduzir ${item.name}`);

        const imgWrap = document.createElement('div');
        imgWrap.className = 'music-card__img-wrap';
        imgWrap.appendChild(buildImgElement(item.img, item.name, i));

        const playBtn = document.createElement('button');
        playBtn.className = 'music-card__play-btn';
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.setAttribute('aria-label', `Play ${item.name}`);
        playBtn.addEventListener('click', e => {
            e.stopPropagation();
            onPlay(item.name);
        });
        imgWrap.appendChild(playBtn);

        const info = document.createElement('div');
        info.className = 'music-card__info';

        const titleRow = document.createElement('div');
        titleRow.className = 'music-card__title-row';

        if (item.explicit) {
            const badge = document.createElement('span');
            badge.className = 'music-card__explicit';
            badge.textContent = 'E';
            titleRow.appendChild(badge);
        }

        const nameEl = document.createElement('span');
        nameEl.className = 'music-card__name';
        nameEl.textContent = item.name;
        titleRow.appendChild(nameEl);

        const artistEl = document.createElement('p');
        artistEl.className = 'music-card__artist';
        artistEl.textContent = item.artist;

        info.appendChild(titleRow);
        info.appendChild(artistEl);

        card.appendChild(imgWrap);
        card.appendChild(info);

        // animate in with stagger
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        card.style.transition = `opacity 0.35s ease ${i * 0.06}s, transform 0.35s ease ${i * 0.06}s, background-color 0.2s ease`;

        grid.appendChild(card);

        // trigger reflow for stagger
        requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    });
}

// ==================================================
// RENDER — Artistas Populares
// ==================================================
function renderArtistas() {
    const grid = document.getElementById('artistasGrid');
    if (!grid) return;

    artistas.forEach((artist, i) => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', artist.name);

        const imgWrap = document.createElement('div');
        imgWrap.className = 'artist-card__img-wrap';
        imgWrap.appendChild(buildImgElement(artist.img, artist.name, i + 10));

        const playBtn = document.createElement('button');
        playBtn.className = 'artist-card__play-btn';
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.setAttribute('aria-label', `Play ${artist.name}`);
        playBtn.addEventListener('click', e => {
            e.stopPropagation();
            onPlay(artist.name);
        });
        // play fora do imgWrap para não ser cortado pelo overflow:hidden
        card.appendChild(imgWrap);
        card.appendChild(playBtn);

        const nameEl = document.createElement('p');
        nameEl.className = 'artist-card__name';
        nameEl.textContent = artist.name;

        const typeEl = document.createElement('p');
        typeEl.className = 'artist-card__type';
        typeEl.textContent = 'Artista';

        card.appendChild(imgWrap);
        card.appendChild(nameEl);
        card.appendChild(typeEl);

        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        card.style.transition = `opacity 0.35s ease ${0.2 + i * 0.06}s, transform 0.35s ease ${0.2 + i * 0.06}s, background-color 0.2s ease`;

        grid.appendChild(card);
        requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    });
}

// ==================================================
// RENDER — Álbuns
// ==================================================
function renderAlbums() {
    const grid = document.getElementById('albumsGrid');
    if (!grid) return;

    albums.forEach((album, i) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${album.name} - ${album.artist}`);

        const imgWrap = document.createElement('div');
        imgWrap.className = 'music-card__img-wrap';
        // albums have square corners
        imgWrap.style.borderRadius = '4px';
        imgWrap.appendChild(buildImgElement(album.img, album.name, i + 20));

        const playBtn = document.createElement('button');
        playBtn.className = 'music-card__play-btn';
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.setAttribute('aria-label', `Play ${album.name}`);
        playBtn.addEventListener('click', e => {
            e.stopPropagation();
            onPlay(album.name);
        });
        imgWrap.appendChild(playBtn);

        const info = document.createElement('div');
        info.className = 'music-card__info';

        const nameEl = document.createElement('p');
        nameEl.className = 'music-card__name';
        nameEl.textContent = album.name;

        const artistEl = document.createElement('p');
        artistEl.className = 'music-card__artist';
        artistEl.textContent = album.artist;

        info.appendChild(nameEl);
        info.appendChild(artistEl);

        card.appendChild(imgWrap);
        card.appendChild(info);

        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        card.style.transition = `opacity 0.35s ease ${0.35 + i * 0.06}s, transform 0.35s ease ${0.35 + i * 0.06}s, background-color 0.2s ease`;

        grid.appendChild(card);
        requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    });
}

// ==================================================
// PLAY FEEDBACK (simula player sem áudio real)
// ==================================================
function onPlay(name) {
    // flash green glow on the Spotify logo
    const logo = document.querySelector('.top-nav__logo');
    if (logo) {
        logo.style.filter = 'drop-shadow(0 0 12px #1DB954)';
        setTimeout(() => logo.style.filter = '', 600);
    }
    console.log(`▶ Reproduzindo: ${name}`);
}

// ==================================================
// SEARCH — filtra cards visíveis em tempo real
// ==================================================
function initSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();

        document.querySelectorAll('.music-card, .artist-card').forEach(card => {
            const text = card.getAttribute('aria-label') || '';
            const match = text.toLowerCase().includes(query);
            card.style.display = match || query === '' ? '' : 'none';
        });
    });

    // keyboard shortcut: / focuses search
    document.addEventListener('keydown', e => {
        if (e.key === '/' && document.activeElement !== input) {
            e.preventDefault();
            input.focus();
        }
        if (e.key === 'Escape') input.blur();
    });
}

// ==================================================
// BANNER CLOSE
// ==================================================
function initBanner() {
    const closeBtn = document.getElementById('closeBanner');
    const banner = document.getElementById('premiumBanner');
    if (!closeBtn || !banner) return;

    closeBtn.addEventListener('click', () => {
        banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(100%)';
        setTimeout(() => {
            banner.remove();
            document.body.style.setProperty('--banner-height', '0px');
        }, 300);
    });
}

// ==================================================
// KEYBOARD NAVIGATION on cards
// ==================================================
function initCardKeyboard() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Enter' && document.activeElement.classList.contains('music-card') ||
            e.key === 'Enter' && document.activeElement.classList.contains('artist-card')) {
            const label = document.activeElement.getAttribute('aria-label') || '';
            onPlay(label);
        }
    });
}

// ==================================================
// INIT
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    renderMusicasEmAlta();
    renderArtistas();
    renderAlbums();
    initSearch();
    initBanner();
    initCardKeyboard();
});