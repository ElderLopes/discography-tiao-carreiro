import styled from 'styled-components';
import Background from './assets/background.png';

const sharedButtonStyles = `
  border-radius: 40px;
  width: 100px;
  height: 40px;
  background-color: dodgerblue;
  box-shadow: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  background: url(${Background});
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
  font-size: 30px;
`;

export const ContainerItens = styled.div`
  padding: 10px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 0px 0px 20px 20px;
  #addAlbum {
    background: none;
    cursor: pointer;
    border: none;
  }

  #divAddAlbum {
    display: flex;
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  padding: 10px;
  margin-left: 15px;
`;

export const Input = styled.input`
  width: 600px;
  height: 40px;
  border-radius: 40px;
  border: none;
  outline: none;
  padding-left: 25px;
  margin-left: 15px;
`;

export const Button = styled.button`
  ${sharedButtonStyles}
  margin-left: 15px;
`;

export const Album = styled.li`
  display: flex;
  flex-direction: column;
  width: 670px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-left: 15px;
  }

  button {
    ${sharedButtonStyles}
    background: none;
    margin-left: 153px;
  }
`;

export const HeaderMusic = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 670px;

  #divTrack {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  #addTrack {
    margin-left: -40px;
  }
`;

export const Song = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 670px;
  p {
    flex: 1;
    margin-left: 40px;
    
  }

  button {
    ${sharedButtonStyles}
    background: none;
    margin-left: -40px;
  }
`;

export const Modal = styled.div`
position: fixed;
    top: 325px;
    left: 750px;
    display: flex;
    justify-content: space-around;
    background: black;
    flex-direction: column;
    align-items: start;
    padding: 10px;
 

  .buttonClose {
    margin-left: auto;
    background: none;
    color: white;
    border: none;
  }
  .buttonSave{
    top: 50px;
    right: 10px;
    ${sharedButtonStyles}
    background: none;
    color: white;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: white;
  }

  h3 {
    font-size: 18px;
    margin-top: 15px;
    color: white;
  }

  input {
    width: 300px;
    height: 40px;
    border-radius: 40px;
    border: none;
    outline: none;
    padding-left: 25px;
    margin-top: 5px;
  }
`;
