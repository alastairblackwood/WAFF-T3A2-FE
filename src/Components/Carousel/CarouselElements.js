import styled from "styled-components";

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

    
`
export const CarouselCell = styled.div`
background: #517AB9;
height: 200px;


/* @media only screen and (min-width: 600px) {
    height: 400px;
} */


`
export const CarouselButton = styled.button`
    background-color: ${props => props.theme.waffYellow};
    height: 40px;
    width: 200px;
    border: none 1px solid;
    border-radius: 68px;
    /* z-index: 3; */
    &:hover {
        background-color: #d7b500;
    }
    &:active {
        transform: scale(0.98);
    }
`

