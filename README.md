# Discography-tiao-carreiro - README
 Abaixo você encontrará informações sobre o projeto, suas funcionalidades, como executá-lo e como foram desenvolvidos os principais recursos. Este documento foi criado para ajudar você e outros desenvolvedores a entender melhor o projeto e colaborar de forma eficaz.

## Descrição
O projeto "Discografia" é uma aplicação web desenvolvida em React que permite ao usuário visualizar uma lista de álbuns musicais e suas respectivas faixas. Com essa aplicação, os usuários podem pesquisar álbuns e músicas por palavras-chave, adicionar novos álbuns à lista, adicionar faixas às músicas existentes nos álbuns e excluir álbuns e faixas indesejadas.

## Funcionalidades
Visualização de álbuns: O usuário pode visualizar a lista de álbuns disponíveis com seus respectivos detalhes, incluindo nome, ano de lançamento e faixas musicais.
Pesquisa por palavras-chave: É possível pesquisar álbuns e faixas musicais utilizando uma palavra-chave, facilitando a localização de conteúdos específicos.
Adição de álbuns: O usuário pode adicionar novos álbuns à lista fornecendo o nome do álbum e o ano de lançamento.
Adição de faixas: Para cada álbum, o usuário pode adicionar novas faixas musicais, informando o número da faixa, o nome da música e a duração em formato de texto (MM:SS).
Exclusão de álbuns e faixas: O usuário pode excluir álbuns inteiros, bem como faixas musicais individuais, caso desejado.
## Executando o projeto
Para executar o projeto em seu ambiente local, siga as etapas abaixo:

Certifique-se de ter o Node.js instalado em sua máquina. Você pode obtê-lo em nodejs.org.

Clone o repositório do projeto para o seu computador.

Acesse a pasta do projeto e instale as dependências executando o seguinte comando no terminal:

 execute a aplicação com o seguinte comando:
bash

npm start
ou
yarn start

O servidor de desenvolvimento será iniciado e a aplicação estará disponível em http://localhost:3000.

## Como foi desenvolvido
O projeto foi desenvolvido utilizando a biblioteca React e a linguagem JavaScript. Foram utilizados também componentes do Material-UI para a construção do layout e estilização com styled-components. A persistência dos dados foi feita utilizando a biblioteca Axios para realizar requisições HTTP à API "https://tiao.supliu.com.br/api/". As funcionalidades foram implementadas através de Hooks do React, como useState, useEffect e useRef, para gerenciamento do estado da aplicação e interações com o usuário.

O código foi estruturado de forma modular, com componentes separados para diferentes partes da aplicação, o que torna o código mais organizado e de fácil manutenção. Além disso, o projeto utiliza estilos CSS in-line com styled-components para estilização específica de cada componente.

