import React, { useState, useRef } from "react";
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

    // const [nameTrack, setNameTrack] = useState()


    async function addNewAlbum() {
try{
    const data = { name: 'Teste', years: '2023' }
    const headers = { Authorization: 'elderfl85@gmail.com' }
    const response = await axios.post('https://tiao.supliu.com.br/api/album', data , {
                headers
            });
        console.log(data);
        const newAlbumId = response.data.id;

        const newAlbum = {
            id: newAlbumId,
            albumName: nameAlbum.current.value,
            age: ageAlbum.current.value,
           
        };
        setAlbums([...albums, newAlbum]);
        console.log(newAlbumId);
    } catch (error) {
        console.error("Erro ao criar novo álbum:", error);
      }
    }
    


        
        // setAlbums([
        //     ...albums,
        //      {
        //     id: Math.random(),
        //     albumName: nameAlbum.current.value,
        //     age: ageAlbum.current.value,
        //     songs: []
        // },
        // ])
     
    

    function deleteAlbum(albumsId) {
        const newAlbum = albums.filter(albums => albums.id !== albumsId)
        setAlbums(newAlbum)
    }

    //   function addNewTrack() {

    //     const newSong = {
    //       number: albums.length + 1, 
    //       songName: nameTrack,
    //       time: "00:00" 
    //     };
    //     const updatedAlbums = [...albums];
    //     updatedAlbums[updatedAlbums.length - 1].songs.push(newSong);
    //     setAlbums(updatedAlbums);
    //   }



    // function changeTrack(event) {
    //     setNameTrack(event.target.value);
    // }
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
                <Input ref={ageAlbum}/>
                <Button onClick={addNewAlbum} >Adicionar Àlbum</Button>
                {/* <H2>Add uma Faixa</H2>
                <Input onChange={changeTrack} />
                <Button onClick={addNewTrack} >Adicionar Faixa</Button> */}

                <ul>
                    {albums.map((albums) => (
                        <Albun key={albums.id}>
                            <div>
                                <h4>Álbum: {albums.albumName} - {albums.age}</h4>
                                <button onClick={() => deleteAlbum(albums.id) }><img src={Trash} alt="lata-de-lixo" /></button>
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