import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Logo from './assets/logo.png';
import Trash from './assets/trash.svg';


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
    HeaderMusic,


} from './styles'

const App = () => {
    const [albums, setAlbums] = useState([])
    const nameAlbum = useRef()
    const ageAlbum = useRef()

    async function addNewAlbum() {
        try {
            const data = { name: nameAlbum.current.value, year: ageAlbum.current.value }
            const headers = { Authorization: 'elderfl85@gmail.com' }
            const response = await axios.post('https://tiao.supliu.com.br/api/album', data, {
                headers
            });

            const newAlbumId = response.data.id;

            const newAlbum = {
                id: newAlbumId,
                albumName: nameAlbum.current.value,
                age: ageAlbum.current.value,
                songs: []
            };
            setAlbums([...albums, newAlbum]);
        } catch (error) {
            console.error("Erro ao criar novo álbum:", error);
        }
    }

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const headers = { Authorization: 'elderfl85@gmail.com' };
                const { data } = await axios.get('https://tiao.supliu.com.br/api/album', { headers });


                const formattedAlbums = data.data.map(album => ({
                    id: album.id,
                    albumName: album.name,
                    age: album.year,
                    songs: album.tracks.map(track => ({
                        number: track.number,
                        songName: track.title,
                        time: track.duration
                    }))
                }));

                setAlbums(formattedAlbums);
            } catch (error) {
                console.error("Erro ao carregar os álbuns:", error);
            }
        }

        fetchAlbums();
    }, []);

    async function deleteAlbum(albumsId) {
        const headers = { Authorization: 'elderfl85@gmail.com' };
        await axios.delete(`https://tiao.supliu.com.br/api/album/${albumsId}`, { headers })
        const newAlbum = albums.filter(albums => albums.id !== albumsId)
        setAlbums(newAlbum)
    }

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
                <H2>Add um Album</H2>
                <Input ref={nameAlbum} />
                <H2>Add ano do Album</H2>
                <Input ref={ageAlbum} />
                <Button onClick={addNewAlbum} >Adicionar Àlbum</Button>
                <ul>
                    {albums.map((albums) => (
                        <Albun key={albums.id}>
                            <div>
                                <h4>Álbum: {albums.albumName} - {albums.age}</h4>
                                <button onClick={() => deleteAlbum(albums.id)}><img src={Trash} alt="lata-de-lixo" /></button>
                            </div>
                            <ul>
                                <HeaderMusic>
                                    <h3>Nº</h3>
                                    <h3>Faixa</h3>
                                    <h3>Duração</h3>
                                </HeaderMusic>
                                {albums.songs.map((songs) => (
                                    <Song key={songs.number}>
                                        <p> {songs.number} </p>
                                        <p> {songs.songName}</p>
                                        <p>({songs.time})</p>
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