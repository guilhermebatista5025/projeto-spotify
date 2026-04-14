/* ====================================================
   SPOTIFY CLONE — script.js  (versão com player real)
   ==================================================== */

'use strict';

// ==================================================
// DATA — Álbuns com faixas e áudio real
// Os links de áudio são samples gratuitos (SoundHelix).
// Substitua pelos seus próprios arquivos de áudio.
// ==================================================

const albumsData = [
    {
        id: 0,
        name: 'Para Todas que Finjir Amar',
        artist: 'Alee & Klisman',
        img: './img/albuns/PQTFA.jpg',
        year: 2026,
        genre: 'Trap',
        tracks: [
            { id: 0, name: 'INTRO', duration: '0:46', audio: './audios/PQTFA/intro.mpeg' },
            { id: 1, name: 'MINA', duration: '2:01', audio: './audios/PQTFA/mina.mpeg' },
            { id: 2, name: 'CLARA', duration: '2:41', audio: './audios/PQTFA/clara.mpeg' },
            { id: 3, name: 'JENNIFER', duration: '2:47', audio: './audios/PQTFA/jennifer.mpeg' },
            { id: 4, name: 'ROBERTA', duration: '2:31', audio: './audios/PQTFA/roberta.mpeg' },
            { id: 5, name: 'DIANA', duration: '2:25', audio: './audios/PQTFA/diana.mpeg' },
            { id: 6, name: 'DANDARA', duration: '1:52', audio: './audios/PQTFA/dandara.mpeg' },
            { id: 7, name: 'EDUARDA', duration: '3:07', audio: './audios/PQTFA/eduarda.mpeg' },
            { id: 8, name: 'JULIANA', duration: '2:18', audio: './audios/PQTFA/juliana.mpeg' },
            { id: 9, name: 'REBECA', duration: '2:27', audio: './audios/PQTFA/rebeca.mpeg' },
            { id: 10, name: 'LORENA (INTERLÚDIO)', duration: '2:10', audio: './audios/PQTFA/lorena.mpeg' },
            { id: 11, name: 'GABRIELA', duration: '2:59', audio: './audios/PQTFA/gabriela.mpeg' },
            { id: 12, name: 'ISABELA', duration: '4:37', audio: './audios/PQTFA/isabela.mpeg' },
            { id: 13, name: 'PARA:TODAS QUE FINGI AMAR', duration: '2:47', audio: './audios/PQTFA/pqtfa.mpeg' },
        ],
    },
    {
        id: 1,
        name: 'Meu Dinheiro, Minhas Regras',
        artist: 'LPT Zlatan',
        img: './img/albuns/MDMR.jpg',
        year: 2025,
        genre: 'Trap',
        tracks: [
            { id: 0, name: 'Jogar o Jogo', duration: '2:49', audio: './audios/MDMR/jogar-o-jogo.mpeg' },
            { id: 1, name: 'Quem Diria Nois', duration: '3:02', audio: './audios/MDMR/quem-diria-nois.mpeg' },
            { id: 2, name: 'Vou Continuar', duration: '2:27', audio: './audios/MDMR/vou-continuar.mpeg' },
            { id: 3, name: 'Interlúdio', duration: '0:52', audio: './audios/MDMR/interludio.mpeg' },
            { id: 4, name: 'Meu Dinheiro,Minhas Regras', duration: '3:15', audio: './audios/MDMR/meu-dinheiro-minhas-regras.mpeg' },
            { id: 5, name: 'Atiradores', duration: '2:11', audio: './audios/MDMR/atiradores.mpeg' },
            { id: 6, name: 'Bebeto e Romário', duration: '2:01', audio: './audios/MDMR/bebeto-e-romario.mpeg' },
            { id: 7, name: 'Pra Ter Conversa', duration: '2:15', audio: './audios/MDMR/pra-ter-conversa.mpeg' },
            { id: 8, name: 'C-Walk', duration: '2:12', audio: './audios/MDMR/c-walk.mpeg' },
            { id: 9, name: 'Nois é o Terror', duration: '2:28', audio: './audios/MDMR/nois-e-o-terror.mpeg' },
            { id: 10, name: 'Você Vai Vencer', duration: '2:54', audio: './audios/MDMR/voce-vai-vencer.mpeg' },
            { id: 11, name: 'Procure Realizar os Seus Sonhos', duration: '2:50', audio: './audios/MDMR/procure-realizar-os-seus-sonhos.mpeg' },
            { id: 12, name: '123Glock', duration: '2:24', audio: './audios/MDMR/123glock.mpeg' },
            { id: 13, name: 'Minha Favela Tá Em Festa', duration: '2:51', audio: './audios/MDMR/minha-favela-ta-em-festa.mpeg' },

        ],
    },
    {
        id: 2,
        name: 'SPAM',
        artist: 'Alee & Klisman',
        img: './img/albuns/SPAM.jpg',
        year: 2025,
        genre: 'Trap',
        tracks: [
            { id: 0, name: 'BIANCA', duration: '3:04', audio: './audios/SPAM/bianca.mpeg' },
            { id: 1, name: 'SOL', duration: '2:25', audio: './audios/SPAM/sol.mpeg' },
            { id: 2, name: 'BRENDA', duration: '2:49', audio: './audios/SPAM/brenda.mpeg' },
            { id: 3, name: 'BARBARA', duration: '2:59', audio: './audios/SPAM/barbara.mpeg' },
        ],
    },
    {
        id: 3,
        name: 'COLAPSO GLOBAL',
        artist: 'WIU E TETO',
        img: './img/albuns/COLAPSO-GLOBAL.jpg',
        year: 2024,
        genre: 'Trap',
        tracks: [
            { id: 0, name: 'ISSO AQUI É BRASIL', duration: '2:18', audio: './audios/CLPSGB/isso-aqui-e-brasil.mpeg' },
            { id: 1, name: 'MEDICINA', duration: '2:11', audio: './audios/CLPSGB/medicina.mpeg' },
            { id: 2, name: 'REF', duration: '3:39', audio: './audios/CLPSGB/ref.mpeg' },
            { id: 3, name: 'LENTO', duration: '3:15', audio: './audios/CLPSGB/lento.mpeg' },
            { id: 4, name: 'CULPA DO FUSO', duration: '2:25', audio: './audios/CLPSGB/culpa-do-fuso.mpeg' },
            { id: 5, name: 'PANELA SUJA', duration: '3:35', audio: './audios/CLPSGB/panela-suja.mpeg' },
            { id: 6, name: 'O CARA', duration: '2:51', audio: './audios/CLPSGB/o-cara.mpeg' },
            { id: 7, name: 'FACECARD', duration: '3:19', audio: './audios/CLPSGB/facecard.mpeg' },
            { id: 8, name: 'AMARGO & DOCE', duration: '2:48', audio: './audios/CLPSGB/á-beira.mpeg' },
            { id: 9, name: 'MONALISA', duration: '3:20', audio: './audios/CLPSGB/monalisa.mpeg' },
            { id: 10, name: 'À BEIRA', duration: '3:58', audio: './audios/CLPSGB/medicina.mpeg' },
        ],
    },
    {
        id: 4,
        name: 'TEMPO.ZIP',
        artist: 'Teto',
        img: './img/albuns/tempo-zip.jpg',
        year: 2025,
        genre: 'Trap',
        tracks: [
            { id: 0, name: 'BRINCO DE DIAMANTE', duration: '2:32', audio: './audios/TP-ZIP/brinco-de-diamante.mpeg' },
            { id: 1, name: 'EU VOU SER RICO', duration: '3:01', audio: './audios/TP-ZIP/eu-vou-ser-rico.mpeg' },
            { id: 2, name: 'ESPELHO', duration: '2:10', audio: './audios/TP-ZIP/espelho.mpeg' },
            { id: 3, name: 'BOLAS DE HAXI', duration: '2:18', audio: './audios/TP-ZIP/bolas-de-haxi.mpeg' },
            { id: 4, name: 'DOCE MÁGICO', duration: '2:19', audio: './audios/TP-ZIP/docemagico.mpeg' },
            { id: 5, name: 'ATOA', duration: '2:45', audio: './audios/TP-ZIP/atoa.mpeg' },
            { id: 6, name: 'TE AMO MINHA MÃE', duration: '3:38', audio: './audios/TP-ZIP/te-amo-minha-mae.mpeg' },
        ],
    },
    {
        id: 5,
        name: '333',
        artist: 'Matuê',
        img: './img/albuns/333.jpg',
        year: 2025,
        genre: 'Trap',
        tracks: [
            { id: 0, name: 'CRACK COM MUSSILON', duration: '2:34', audio: './audios/333/crack.mpeg' },
            { id: 1, name: 'IMAGINA ESSE CENÁRIO', duration: '2:35', audio: './audios/333/imagina-esse-cenario.mpeg' },
            { id: 2, name: 'ISSO É SÉRIO', duration: '4:45', audio: './audios/333/isso-e-serio.mpeg' },
            { id: 3, name: '1993', duration: '2:07', audio: './audios/333/1993.mpeg' },
            { id: 4, name: '4TAL', duration: '3:24', audio: './audios/333/fortal.mpeg' },
            { id: 5, name: 'O SOM', duration: '5:12', audio: './audios/333/o-som.mpeg' },
            { id: 6, name: '04AM', duration: '3:19', audio: './audios/333/04am.mpeg' },
            { id: 7, name: 'CASTLEVANIA', duration: '3:50', audio: './audios/333/castlevania.mpeg' },
            { id: 8, name: 'V DE VILÃO', duration: '2:26', audio: './audios/333/v-de-vilao.mpeg' },
            { id: 9, name: 'MARIA', duration: '3:24', audio: './audios/333/maria.mpeg' },
            { id: 10, name: '333', duration: '5:24', audio: './333.mpeg' },
            { id: 11, name: 'LIKE THIS!', duration: '3:28', audio: './audios/333/like-this.mpeg' },
        ],
    },
    {
        id: 6,
        name: 'XTRANHO',
        artist: 'Matuê',
        img: './img/albuns/xtranho.jpg',
        year: 2026,
        genre: 'Trap',
        tracks: [
            { id: 0, name: 'REI TUÊ', duration: '2:23', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-14.mp3' },
            { id: 1, name: 'TALKING BOUT', duration: '2:32', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-15.mp3' },
            { id: 2, name: 'MEU CEMITÉRIO', duration: '3:27', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-16.mp3' },
            { id: 3, name: 'ÍCONE FASHION', duration: '2:32', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-16.mp3' },
            { id: 4, name: 'AUTOBAHN', duration: '3:05', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-14.mp3' },
            { id: 5, name: 'NANANANA', duration: '0:43', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-15.mp3' },
            { id: 6, name: 'FACAS E MACHADOS', duration: '1:52', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-16.mp3' },
            { id: 7, name: 'ALTERADO', duration: '3:34', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-16.mp3' },
            { id: 8, name: 'PENSAMENTOS PERIGOSOS', duration: '3:30', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-14.mp3' },
            { id: 9, name: 'XTRANHO', duration: '3:33', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-15.mp3' },
            { id: 10, name: 'BACKSTAGE', duration: '2:19', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-16.mp3' },
            { id: 11, name: 'TODAS AS LUZES', duration: '2:33', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-16.mp3' },
            { id: 12, name: 'OS MELHORES', duration: '2:35', audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-14.mp3' },
        ],
    },
];

// Músicas em alta (com referência ao álbum para tocar ao clicar)
const musicasEmAlta = [
    { name: 'XTRANHO', artist: 'Matuê', img: './img/albuns/xtranho.jpg', explicit: false, albumId: 6, audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-5.mp3' },
    { name: 'Eu Vou Ser Rico', artist: 'Teto', img: './img/albuns/tempo-zip.jpg', explicit: true, albumId: 4, audio: './audios/TP-ZIP/eu-vou-ser-rico.mpeg' },
    { name: '333', artist: 'Matuê', img: './img/albuns/333.jpg', explicit: false, albumId: 5, audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-7.mp3' },
    { name: 'Bianca', artist: 'Alee & Klisman', img: './img/albuns/SPAM.jpg', explicit: false, albumId: 2, audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-8.mp3' },
    { name: 'ISSO AQUI É BRASIL', artist: 'Teto & Wiu', img: './img/albuns/COLAPSO-GLOBAL.jpg', explicit: false, albumId: 3, audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-9.mp3' },
    { name: 'PRÊMIO MULTISHOW', artist: 'Ryu, The Runner', img: './img/album-premio-multishow.jpg', explicit: false, albumId: null, audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-10.mp3' },
    { name: 'Atiradores', artist: 'LPT Zlatan', img: './img/albuns/MDMR.jpg', explicit: false, albumId: 1, audio: 'https://www.soundhelix.com/audio/mp3/SoundHelix-Song-11.mp3' },
];

const artistas = [
    { name: 'Henrique & Juliano', img: './img/artista-henrique-juliano.jpg', albumId: 1 },
    { name: 'Diego & Victor Hugo', img: './img/artista-diego-victor-hugo.jpg', albumId: null },
    { name: 'Grupo Menos É Mais', img: './img/artista-grupo-menos.jpg', albumId: null },
    { name: 'Jorge & Mateus', img: './img/artista-jorge-mateus.jpg', albumId: null },
    { name: 'Zé Neto & Cristiano', img: './img/artista-ze-neto.jpg', albumId: null },
    { name: 'Matheus & Kauan', img: './img/artista-mateus-kauan.jpg', albumId: null },
    { name: 'Murilo Huff', img: './img/artista-murilo-huff.jpg', albumId: null },

];

// ==================================================
// ESTADO DO PLAYER
// ==================================================
const state = {
    audio: new Audio(),
    currentAlbum: null,       // objeto do álbum atual
    currentTrackIndex: -1,    // índice dentro do álbum
    isPlaying: false,
    isShuffle: false,
    repeatMode: 0,            // 0 = off | 1 = all | 2 = one
    volume: 0.7,
    isDraggingProgress: false,
    isDraggingVolume: false,
    queue: [],                // fila de tracks para tocar
};

state.audio.volume = state.volume;

// ==================================================
// UTILITÁRIOS
// ==================================================
const PLACEHOLDER_COLORS = [
    '#1a4a2e', '#4a1a1a', '#1a1a4a', '#4a3a1a',
    '#2e1a4a', '#1a4a4a', '#4a1a3a', '#3a4a1a',
];

function placeholderStyle(index) {
    return PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length];
}

function buildImgElement(src, alt, index) {
    const img = document.createElement('img');
    img.alt = alt;
    img.loading = 'lazy';
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

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function $(id) { return document.getElementById(id); }

// ==================================================
// PLAYER — CORE
// ==================================================
function loadTrack(album, trackIndex) {
    const track = album.tracks[trackIndex];
    if (!track) return;

    state.currentAlbum = album;
    state.currentTrackIndex = trackIndex;
    state.queue = album.tracks;

    state.audio.src = track.audio;
    state.audio.load();

    updatePlayerUI(album, track);
    highlightTrackRow(trackIndex);
}

function playTrack(album, trackIndex) {
    loadTrack(album, trackIndex);
    state.audio.play().catch(() => { });
    state.isPlaying = true;
    updatePlayIcon();
}

function togglePlay() {
    if (!state.currentAlbum) return;
    if (state.isPlaying) {
        state.audio.pause();
        state.isPlaying = false;
    } else {
        state.audio.play().catch(() => { });
        state.isPlaying = true;
    }
    updatePlayIcon();
}

function playNext() {
    if (!state.currentAlbum) return;
    const tracks = state.currentAlbum.tracks;
    let next;
    if (state.isShuffle) {
        next = Math.floor(Math.random() * tracks.length);
    } else {
        next = (state.currentTrackIndex + 1) % tracks.length;
    }
    playTrack(state.currentAlbum, next);
}

function playPrev() {
    if (!state.currentAlbum) return;
    // Se já passou mais de 3s, reinicia a música
    if (state.audio.currentTime > 3) {
        state.audio.currentTime = 0;
        return;
    }
    const prev = (state.currentTrackIndex - 1 + state.currentAlbum.tracks.length) % state.currentAlbum.tracks.length;
    playTrack(state.currentAlbum, prev);
}

function toggleShuffle() {
    state.isShuffle = !state.isShuffle;
    $('playerShuffleBtn').classList.toggle('active', state.isShuffle);
}

function toggleRepeat() {
    state.repeatMode = (state.repeatMode + 1) % 3;
    const btn = $('playerRepeatBtn');
    const icon = btn.querySelector('i');
    btn.classList.remove('active');
    icon.className = 'fa-solid fa-repeat';
    if (state.repeatMode === 1) {
        btn.classList.add('active');
    } else if (state.repeatMode === 2) {
        btn.classList.add('active');
        icon.className = 'fa-solid fa-repeat'; // poderia ser "1" icon
        btn.title = 'Repetir 1';
    } else {
        btn.title = 'Repetir';
    }
}

// ==================================================
// PLAYER — UI UPDATE
// ==================================================
function updatePlayerUI(album, track) {
    $('playerTrackName').textContent = track.name;
    $('playerTrackArtist').textContent = album.artist;

    const thumb = $('playerThumb');
    const placeholder = $('playerThumbPlaceholder');

    thumb.src = album.img;
    thumb.onerror = () => {
        thumb.classList.add('hidden');
        placeholder.style.display = 'flex';
    };
    thumb.onload = () => {
        thumb.classList.remove('hidden');
        placeholder.style.display = 'none';
    };
    thumb.src = album.img; // re-trigger

    // Atualiza botão play do álbum se estiver na view do álbum certo
    updateAlbumPlayBtn();
}

function updatePlayIcon() {
    const icon = $('playerPlayIcon');
    const albumBtn = $('albumPlayBtn');

    if (state.isPlaying) {
        icon.className = 'fa-solid fa-pause';
        if (albumBtn) albumBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        icon.className = 'fa-solid fa-play';
        if (albumBtn) albumBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function updateAlbumPlayBtn() {
    // Se o álbum aberto na view é o mesmo que está tocando, sincroniza o botão
    if (!state.currentAlbum) return;
    const albumBtn = $('albumPlayBtn');
    if (!albumBtn) return;
    // verificar se o álbum exibido é o mesmo tocando
    // (usamos dataset para guardar o id do álbum aberto)
    const viewAlbumId = albumBtn.dataset.albumId;
    if (viewAlbumId === String(state.currentAlbum.id)) {
        updatePlayIcon();
    }
}

function highlightTrackRow(trackIndex) {
    document.querySelectorAll('.track-row').forEach((row, i) => {
        row.classList.toggle('playing', i === trackIndex);
        const numEl = row.querySelector('.track-row__num-text');
        const waveEl = row.querySelector('.track-row__wave');
        const playIcon = row.querySelector('.track-row__play-icon');

        if (i === trackIndex) {
            if (numEl) numEl.style.display = 'none';
            if (waveEl) waveEl.style.display = 'flex';
            if (playIcon) playIcon.style.display = 'none';
        } else {
            if (numEl) numEl.style.display = '';
            if (waveEl) waveEl.style.display = 'none';
            if (playIcon) playIcon.style.display = 'none';
        }
    });
}

// ==================================================
// PLAYER — PROGRESS BAR
// ==================================================
function initProgressBar() {
    const track = $('progressTrack');
    const fill = $('progressFill');
    const thumb = $('progressThumb');

    function setProgress(e) {
        const rect = track.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        state.audio.currentTime = pct * state.audio.duration;
        updateProgressVisual(pct);
    }

    track.addEventListener('mousedown', e => {
        state.isDraggingProgress = true;
        setProgress(e);
    });
    document.addEventListener('mousemove', e => {
        if (!state.isDraggingProgress) return;
        const rect = track.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        updateProgressVisual(pct);
        state.audio.currentTime = pct * state.audio.duration;
    });
    document.addEventListener('mouseup', () => { state.isDraggingProgress = false; });

    // Atualiza a cada frame
    state.audio.addEventListener('timeupdate', () => {
        if (state.isDraggingProgress) return;
        const pct = state.audio.duration ? state.audio.currentTime / state.audio.duration : 0;
        updateProgressVisual(pct);
        $('playerCurrentTime').textContent = formatTime(state.audio.currentTime);
        $('playerDuration').textContent = formatTime(state.audio.duration);
    });

    state.audio.addEventListener('ended', onTrackEnded);
}

function updateProgressVisual(pct) {
    const pctStr = (pct * 100).toFixed(2) + '%';
    $('progressFill').style.width = pctStr;
    $('progressThumb').style.left = pctStr;
}

function onTrackEnded() {
    if (state.repeatMode === 2) {
        state.audio.currentTime = 0;
        state.audio.play();
        return;
    }
    if (state.repeatMode === 1 || state.isShuffle) {
        playNext();
        return;
    }
    // Sem repeat: avança se não for a última
    const isLast = state.currentTrackIndex === state.currentAlbum.tracks.length - 1;
    if (!isLast) {
        playNext();
    } else {
        state.isPlaying = false;
        updatePlayIcon();
    }
}

// ==================================================
// PLAYER — VOLUME
// ==================================================
function initVolumeBar() {
    const track = $('volumeTrack');

    function setVolume(e) {
        const rect = track.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        state.volume = pct;
        state.audio.volume = pct;
        $('volumeFill').style.width = (pct * 100) + '%';
        $('volumeThumb').style.left = (pct * 100) + '%';
        updateVolumeIcon(pct);
    }

    track.addEventListener('mousedown', e => {
        state.isDraggingVolume = true;
        setVolume(e);
    });
    document.addEventListener('mousemove', e => {
        if (state.isDraggingVolume) setVolume(e);
    });
    document.addEventListener('mouseup', () => { state.isDraggingVolume = false; });

    $('playerVolumeBtn').addEventListener('click', () => {
        if (state.audio.volume > 0) {
            state._lastVol = state.audio.volume;
            state.audio.volume = 0;
            state.volume = 0;
            $('volumeFill').style.width = '0%';
            $('volumeThumb').style.left = '0%';
        } else {
            const v = state._lastVol || 0.7;
            state.audio.volume = v;
            state.volume = v;
            $('volumeFill').style.width = (v * 100) + '%';
            $('volumeThumb').style.left = (v * 100) + '%';
        }
        updateVolumeIcon(state.audio.volume);
    });
}

function updateVolumeIcon(vol) {
    const icon = $('volumeIcon');
    if (vol === 0) icon.className = 'fa-solid fa-volume-xmark';
    else if (vol < 0.5) icon.className = 'fa-solid fa-volume-low';
    else icon.className = 'fa-solid fa-volume-high';
}

// ==================================================
// NAVEGAÇÃO — HOME ↔ ÁLBUM
// ==================================================
function showHome() {
    $('homeView').classList.remove('hidden');
    $('albumView').classList.add('hidden');
    $('mainContent').scrollTop = 0;
}

function showAlbumView(albumId) {
    const album = albumsData.find(a => a.id === albumId);
    if (!album) return;

    // Preenche cabeçalho
    const cover = $('albumViewCover');
    cover.src = album.img;
    cover.alt = album.name;
    cover.onerror = () => { cover.style.display = 'none'; };

    $('albumViewTitle').textContent = album.name;
    $('albumViewArtist').textContent = album.artist;
    $('albumViewInfo').textContent = `${album.genre}  ·  ${album.year}  ·  ${album.tracks.length} músicas`;

    // Botão play do álbum
    const albumPlayBtn = $('albumPlayBtn');
    albumPlayBtn.dataset.albumId = album.id;
    // Sincroniza ícone com estado atual
    if (state.currentAlbum?.id === album.id && state.isPlaying) {
        albumPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        albumPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }

    albumPlayBtn.onclick = () => {
        if (state.currentAlbum?.id === album.id) {
            togglePlay();
        } else {
            playTrack(album, 0);
        }
    };

    // Shuffle do álbum
    $('albumShuffleBtn').onclick = () => {
        state.isShuffle = true;
        $('playerShuffleBtn').classList.add('active');
        const rand = Math.floor(Math.random() * album.tracks.length);
        playTrack(album, rand);
    };

    // Renderiza tracks
    renderTrackList(album);

    $('homeView').classList.add('hidden');
    $('albumView').classList.remove('hidden');
    $('mainContent').scrollTop = 0;
}

// ==================================================
// RENDER — Track List
// ==================================================
function renderTrackList(album) {
    const list = $('trackList');
    list.innerHTML = '';

    album.tracks.forEach((track, i) => {
        const row = document.createElement('div');
        row.className = 'track-row';
        if (state.currentAlbum?.id === album.id && state.currentTrackIndex === i) {
            row.classList.add('playing');
        }

        // número / onda
        const numCell = document.createElement('div');
        numCell.className = 'track-row__num';

        const numText = document.createElement('span');
        numText.className = 'track-row__num-text';
        numText.textContent = i + 1;

        const playIcon = document.createElement('i');
        playIcon.className = 'fa-solid fa-play track-row__play-icon';
        playIcon.style.display = 'none';

        // wave bars (animação quando tocando)
        const wave = document.createElement('div');
        wave.className = 'track-row__wave';
        wave.style.display = (state.currentAlbum?.id === album.id && state.currentTrackIndex === i) ? 'flex' : 'none';
        wave.innerHTML = '<span></span><span></span><span></span><span></span>';

        numCell.appendChild(numText);
        numCell.appendChild(playIcon);
        numCell.appendChild(wave);

        // info
        const infoCell = document.createElement('div');
        infoCell.className = 'track-row__info';

        const trackName = document.createElement('span');
        trackName.className = 'track-row__name';
        trackName.textContent = track.name;
        if (state.currentAlbum?.id === album.id && state.currentTrackIndex === i) {
            trackName.style.color = 'var(--spotify-green)';
        }

        const trackArtist = document.createElement('span');
        trackArtist.className = 'track-row__artist';
        trackArtist.textContent = album.artist;

        infoCell.appendChild(trackName);
        infoCell.appendChild(trackArtist);

        // duração
        const durCell = document.createElement('div');
        durCell.className = 'track-row__dur';
        durCell.textContent = track.duration;

        row.appendChild(numCell);
        row.appendChild(infoCell);
        row.appendChild(durCell);

        // hover: mostra ícone play
        row.addEventListener('mouseenter', () => {
            if (!row.classList.contains('playing')) {
                numText.style.display = 'none';
                playIcon.style.display = 'block';
            }
        });
        row.addEventListener('mouseleave', () => {
            if (!row.classList.contains('playing')) {
                numText.style.display = '';
                playIcon.style.display = 'none';
            }
        });

        // clique: toca a música
        row.addEventListener('click', () => {
            playTrack(album, i);
        });

        // animação stagger
        row.style.opacity = '0';
        row.style.transform = 'translateX(-8px)';
        row.style.transition = `opacity 0.25s ease ${i * 0.04}s, transform 0.25s ease ${i * 0.04}s`;
        list.appendChild(row);
        requestAnimationFrame(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        });
    });
}

// ==================================================
// RENDER — Home Sections
// ==================================================
function renderMusicasEmAlta() {
    const grid = $('musicasGrid');
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
            // Se tem álbum associado, abre o álbum; senão toca a faixa avulsa
            if (item.albumId !== null) {
                showAlbumView(item.albumId);
            } else {
                playLooseTrack(item);
            }
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

        // clique no card abre o álbum se tiver, senão toca avulso
        card.addEventListener('click', () => {
            if (item.albumId !== null) showAlbumView(item.albumId);
            else playLooseTrack(item);
        });

        animateIn(card, i, 0.05);
        grid.appendChild(card);
    });
}

function renderArtistas() {
    const grid = $('artistasGrid');
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
            if (artist.albumId !== null) showAlbumView(artist.albumId);
        });

        const nameEl = document.createElement('p');
        nameEl.className = 'artist-card__name';
        nameEl.textContent = artist.name;

        const typeEl = document.createElement('p');
        typeEl.className = 'artist-card__type';
        typeEl.textContent = 'Artista';

        card.appendChild(imgWrap);
        card.appendChild(playBtn);
        card.appendChild(nameEl);
        card.appendChild(typeEl);

        card.addEventListener('click', () => {
            if (artist.albumId !== null) showAlbumView(artist.albumId);
        });

        animateIn(card, i, 0.12);
        grid.appendChild(card);
    });
}

function renderAlbums() {
    const grid = $('albumsGrid');
    if (!grid) return;

    albumsData.forEach((album, i) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${album.name} - ${album.artist}`);

        const imgWrap = document.createElement('div');
        imgWrap.className = 'music-card__img-wrap';
        imgWrap.style.borderRadius = '4px';
        imgWrap.appendChild(buildImgElement(album.img, album.name, i + 20));

        const playBtn = document.createElement('button');
        playBtn.className = 'music-card__play-btn';
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.setAttribute('aria-label', `Play ${album.name}`);
        playBtn.addEventListener('click', e => {
            e.stopPropagation();
            playTrack(album, 0);
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

        // clique no card → vai para a página do álbum
        card.addEventListener('click', () => showAlbumView(album.id));

        animateIn(card, i, 0.22);
        grid.appendChild(card);
    });
}

// Toca uma faixa "solta" (sem álbum completo, cria álbum virtual)
function playLooseTrack(item) {
    const fakeAlbum = {
        id: `loose_${item.name}`,
        name: item.name,
        artist: item.artist,
        img: item.img,
        tracks: [{ id: 0, name: item.name, duration: '—', audio: item.audio }],
    };
    playTrack(fakeAlbum, 0);
}

// Stagger de entrada
function animateIn(el, i, baseDelay) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = `opacity 0.35s ease ${baseDelay + i * 0.05}s, transform 0.35s ease ${baseDelay + i * 0.05}s, background-color 0.2s ease`;
    requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
}

// ==================================================
// SEARCH
// ==================================================
function initSearch() {
    const input = $('searchInput');
    if (!input) return;

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        document.querySelectorAll('.music-card, .artist-card').forEach(card => {
            const text = card.getAttribute('aria-label') || '';
            const match = text.toLowerCase().includes(query);
            card.style.display = (match || query === '') ? '' : 'none';
        });
    });

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
    const closeBtn = $('closeBanner');
    const banner = $('premiumBanner');
    if (!closeBtn || !banner) return;

    closeBtn.addEventListener('click', () => {
        banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(100%)';
        setTimeout(() => banner.remove(), 300);
    });
}

// ==================================================
// KEYBOARD shortcuts
// ==================================================
function initKeyboard() {
    document.addEventListener('keydown', e => {
        const tag = document.activeElement.tagName;
        if (tag === 'INPUT') return;

        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        }
        if (e.code === 'ArrowRight' && e.altKey) playNext();
        if (e.code === 'ArrowLeft' && e.altKey) playPrev();
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
    initProgressBar();
    initVolumeBar();
    initKeyboard();

    // Botão home
    $('homeBtn').addEventListener('click', e => {
        e.preventDefault();
        showHome();
    });

    // Botão voltar no álbum
    $('backBtn').addEventListener('click', showHome);

    // Controles do player
    $('playerPlayBtn').addEventListener('click', togglePlay);
    $('playerNextBtn').addEventListener('click', playNext);
    $('playerPrevBtn').addEventListener('click', playPrev);
    $('playerShuffleBtn').addEventListener('click', toggleShuffle);
    $('playerRepeatBtn').addEventListener('click', toggleRepeat);

    // Like btn — só visual
    $('playerLikeBtn').addEventListener('click', function () {
        this.classList.toggle('liked');
        const icon = this.querySelector('i');
        if (this.classList.contains('liked')) {
            icon.className = 'fa-solid fa-heart';
        } else {
            icon.className = 'fa-regular fa-heart';
        }
    });
});