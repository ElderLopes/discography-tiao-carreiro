import styled from 'styled-components'
import Background from './assets/background.png'

export const Container = styled.div`
background: url(" ${Background} ");
background-size: cover;
height: 100vh;
padding: 100px;
`;
export const ContainerHead = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;

border-radius: 20px 20px 0 0;
`;
export const Image = styled.img`
padding: 15px;
width: 200px;
`;
export const H1 = styled.h1`
color: black;
font-size: 30px ;
`;
export const ContainerItens = styled.div`
padding: 20px;
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 0px 0px 20px 20px;

`;
export const H2 = styled.h2`
font-size: 20px;
padding: 10px;
margin-left: 15px;

`;
export const Input = styled.input`
width: 800px;
height: 40px;
border-radius: 40px;
border: none;
outline: none;
padding-left: 25px;
`;
export const Button = styled.button`
border-radius: 40px;
width: 100px;
height: 40px;
background-color: dodgerblue;
box-shadow: none;
margin-left: 15px;
border: none;
cursor: pointer;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}

`;
export const Paragrafo = styled.p`
margin: 5px;
padding: 20px;

`;