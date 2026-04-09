document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto', image: './img/artista-ze-neto.jpg' },
        { name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Mateus & Kauan', image: './img/artista-mateus-kauan.jpg' },
    ];

    const albumsData = [
        { name: 'White Noise', artist: "Sleepy Jhon", img: './img/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: "Henrique & Juliano", img: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: "Racionais", img: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: "Billie Eilish", img: './img/album-hit-me.jpg' },
        { name: 'Caju', artist: "Liniker", img: './img/album-caju.jpg' },
        { name: 'Escandalo Íntimo', artist: "Luísa Sonza", img: './img/album-escandalo.jpg' },
    ]

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artists-card') // ✅ corrigido

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
            <h3>${artist.name}</h3>
            <p>artista</p>
            </div>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.img}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
    })
})