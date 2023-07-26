import React from "react";
import Logo from './assets/logo.png'
import Trash from './assets/trash.svg'

import {
    Container,
    ContainerHead,
    H1,
    Image,
    ContainerItens,
    H2,
    Input,
    Button,
    Albun,
    Song,
    HeaderMusic

} from './styles'

const App = () => {

    const Album = [
        {
            albumName: 'album1', age: '1975',
            songs: [
                { number: '12', songName: 'musica12', time: '3:45' },
                { number: '01', songName: 'musica1', time: '2:45' }
            ]
        },
        {
            albumName: 'album2', age: '1979',
            songs: [
                { number: '01', songName: 'musica1', time: '3:45' },
                { number: '02', songName: 'musica2', time: '2:45' },
                { number: '03', songName: 'musica3', time: '2:00' }
            ]
        }

    ]

    return (
        <Container>
            <ContainerHead>
                <Image alt="logo-imagem" src={Logo} />
                <H1>Discografia</H1>
            </ContainerHead>
            <ContainerItens>
                <H2>Digite uma palavra chave</H2>
                <Input />
                <Button>Procurar</Button>
                <ul>
                    {Album.map((album) => (
                        <Albun key={album.albumName}>
                            <div>
                                <h4>Álbum: {album.albumName} - {album.age}</h4>
                                <button><img src={Trash} alt="lata-de-lixo" /></button>
                            </div>
                            <ul>
                                <HeaderMusic>
                                    <h3>Nº</h3>
                                    <h3>Faixa</h3>
                                    <h3>Duração</h3>
                                </HeaderMusic>
                                {album.songs.map((song) => (
                                    <Song key={song.number}>
                                        <p> {song.number} </p>
                                        <p> {song.songName}</p>
                                        <p>({song.time})</p>
                                        <button><img src={Trash} alt="lata-de-lixo" /></button>
                                    </Song>
                                ))}

                            </ul>
                        </Albun>
                    ))}
                </ul>
            </ContainerItens>
        </Container>
    )
}

export default App