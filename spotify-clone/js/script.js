document.addEventListener('DOMContentLoaded', () => {


    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src=${artist.image} alt=imagem do ${artist.name}>
            <h3>${artist.name}</h3>
            <p>artista</p>
        
        `

    })


})