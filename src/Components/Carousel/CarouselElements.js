import { Link } from "react-router-dom";
import styled from "styled-components";

export const CarouselLoader = styled.div`
    background-color: ${props => props.theme.waffBlue};
    display: flex;
    justify-context: center;
`
export const CarouselContainer = styled.div `
margin: 0 auto;
width: 100%;
/* height: 450px; */
max-width: 100vw;
text-align: center;
position: relative;
display: flex;
overflow: hidden;
background-color: black;
justify-content: center;

`
export const CarouselInner = styled.div`
    /* display: flex; */
    width: 500px;
    height: 300px;

    
`
export const CarouselCell = styled.div`
background: #242d45;
height: 300px;

`
export const CarouselButton = styled(Link)`
    background-color: ${props => props.theme.waffYellow};
    height: 40px;
    width: 200px;
    border: none 2px solid;
    border-radius: 68px;
    /* z-index: 3; */
    &:hover {
        background-color: #d7b500;
    }
    &:active {
        transform: scale(0.98);
    }
    position: absolute;
    top: 70%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`

export const CarouselImg = styled.img`
    height: 100%;
    object-fit: contain;
`

export const CarouselTitle = styled.h3`
    font-family: ${props=> props.theme.jostFont};
    color: ${props=> props.theme.waffYellow};
    /* text-align: center; */
    font-weight: bold;
    /* position: absolute; */
    justify-content: center;
    top: 20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`   