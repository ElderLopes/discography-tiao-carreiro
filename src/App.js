import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Logo from './assets/logo.png';
import Trash from './assets/trash.svg';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CancelIcon from '@mui/icons-material/Cancel';

import {
    Container,
    ContainerHead,
    H1,
    Image,
    ContainerItens,
    H2,
    Input,
    Button,
    Album,
    Song,
    HeaderMusic,
    Modal,
} from './styles'

const App = () => {
    const [albums, setAlbums] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddAlbumModalOpen, setIsAddAlbumModalOpen] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [timeInput, setTimeInput] = useState("");
    const nameAlbum = useRef()
    const ageAlbum = useRef()
    const numberTrack = useRef()
    const track = useRef()

    function openAddAlbumModal() {
        setIsAddAlbumModalOpen(true);
      }
    
      function closeAddAlbumModal(){
        setIsAddAlbumModalOpen(false);
      }

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
                        id: track.id,
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
    function openModal(album) {
        setSelectedAlbum(album);
        setIsModalOpen(true);
    }


    function closeModal() {
        setIsModalOpen(false);
    }

    async function saveTrack() {
        try {
            const data = {
                album_id: selectedAlbum.id,
                number: numberTrack.current.value,
                title: track.current.value,
                duration: timeInSeconds
            }

            const headers = { Authorization: 'elderfl85@gmail.com' }
            await axios.post('https://tiao.supliu.com.br/api/track', data, {
                headers
            });
            const newSong = {
                id: data.id,
                number: data.number,
                songName: data.title,
                time: data.duration
            };

            const updatedAlbums = albums.map(album => {
                if (album.id === data.album_id) {
                    return {
                        ...album,
                        songs: [...album.songs, newSong]
                    };
                }
                return album;
            });

            setAlbums(updatedAlbums);

           
        } catch (error) {
            console.error("Erro ao salvar a música:", error);
        }
    }

    function formatTime(durationInSeconds) {
        const minutes = Math.floor(durationInSeconds / 60).toString().padStart(2, '0');
        const seconds = (durationInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }
    function parseTimeToSeconds(timeString) {
        const [minutes, seconds] = timeString.split(":").map(Number);
        return minutes * 60 + seconds;
    }
    async function deleteTrack(albumId, trackId) {
        try {
            const headers = { Authorization: 'elderfl85@gmail.com' };
            await axios.delete(`https://tiao.supliu.com.br/api/track/${trackId}`, { headers });

            const updatedAlbums = albums.map(album => {
                if (album.id === albumId) {
                    const updatedSongs = album.songs.filter(song => song.id !== trackId);
                    return {
                        ...album,
                        songs: updatedSongs
                    };
                }
                return album;
            });

            setAlbums(updatedAlbums);
        } catch (error) {
            console.error("Erro ao deletar a faixa:", error);
        }
    }
    function closeModals() {
        closeModal();
        closeAddAlbumModal();
      }
    
    return (
        <Container>
            <ContainerHead>
                <Image alt="logo-imagem" src={Logo} />
                <H1>Discografia</H1>
            </ContainerHead>
            <ContainerItens>
                <H2>Digite uma palavra chave</H2>
                <Input type="text" required />
                <Button>Procurar</Button>
                <H2>Adicione um Álbum</H2>
                <button onClick={openAddAlbumModal}>
                    <LibraryMusicIcon/>
                </button>
    
                <ul>
                    {albums.map((albums) => (
                        <Album key={albums.id}>
                            <div>
                                <h4>Álbum: {albums.albumName} - {albums.age}</h4>
                                <button onClick={() => deleteAlbum(albums.id)}><img src={Trash} alt="lata-de-lixo" /></button>
                            </div>
                            <ul>
                                <HeaderMusic>
                                    <h3>Nº</h3>
                                    <h3>Faixa</h3>
                                    <h3>Duração</h3>
                                    <Button onClick={() => openModal(albums)}>
                                        <PlaylistAddIcon />
                                    </Button>

                                </HeaderMusic>
                                {albums.songs.map((songs) => (
                                    <Song key={songs.number}>
                                        <p>{songs.number}</p>
                                        <p>{songs.songName}</p>
                                        <p>{formatTime(songs.time)}</p>
                                        <button onClick={() => deleteTrack(albums.id, songs.id)}>
                                            <img src={Trash} alt="lata-de-lixo" />
                                        </button>
                                    </Song>
                                ))}
                            </ul>
                        </Album>
                    ))}
                </ul>
                {isModalOpen && (
                    <Modal>
                        <button onClick={closeModals}>
                <CancelIcon/>
            </button>
                        <h2>Adicione a faixa musical do álbum</h2>
                        <h3>Faixa:</h3>
                        <input ref={numberTrack} type="number" placeholder="Número da faixa" required />
                        <h3>Nome da Música:</h3>
                        <input ref={track} type="text" placeholder="Coloque o nome aqui" required />
                        <h3>Tempo de Duração:</h3>
                        <input
                            type="text"
                            value={timeInput}
                            onChange={(e) => {
                                setTimeInput(e.target.value);
                                setTimeInSeconds(parseTimeToSeconds(e.target.value));
                            }}
                            placeholder="Tempo de duração"
                            required
                        />
                        <button onClick={saveTrack}>Salvar Música</button>
                    </Modal>
                )}
                {isAddAlbumModalOpen && (
          <Modal>
            <button onClick={closeModals}>
                <CancelIcon/>
            </button>
            <h2>Adicione um novo álbum</h2>
            <h3>Nome do álbum:</h3>
            <input ref={nameAlbum} type="text" placeholder="Nome do álbum" required />
            <h3>Ano do álbum:</h3>
            <input ref={ageAlbum} type="number" placeholder="Ano do álbum" required />
            <button onClick={addNewAlbum}>Salvar Álbum</button>
          </Modal>
        )}
            </ContainerItens>
        </Container >
    )
}

export default App