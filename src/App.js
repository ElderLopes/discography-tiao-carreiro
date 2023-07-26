import React from "react";
import Logo from './assets/logo.png'

import {
    Container,
    ContainerHead,
    H1,
    Image,
    ContainerItens,
    H2,
    Input,
    Button,
    Paragrafo
} from './styles'

const App = () => {

    return (
        <Container>
            <ContainerHead>
                <Image alt="logo-imagem" src={Logo} />
                <H1>Discografia</H1>
            </ContainerHead>
            <ContainerItens>
                <H2>Digite uma palavra chave</H2>
                <Input  />
                <Button>Procurar</Button>
                <Paragrafo>Teste</Paragrafo>
            </ContainerItens>
        </Container>
    )
}

export default App